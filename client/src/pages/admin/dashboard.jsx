import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Collapse from "@mui/material/Collapse";

import { UserAuth } from "../../contexts/authContext";
import { useState } from "react";

// components
import Heading from "../../components/pageHeader";
import { Grid, Stack, Typography } from "@mui/material";

import { clients } from "../../local-data/clients";

export default function AdminDashboard() {
  const [viewclients, setViewclients] = useState(false);
  const [addclient, setAddclient] = useState(false);

  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const styles = {
    OperationBtn: css`
      width: 100%;
      max-width: 200px;
      padding: 1rem;
    `,
    OperationBox: css`
      justify-content: center;
      align-self: center;
    `,
  };
  return (
    <Box>
      <Heading
        title="Admin Dashboard"
        description={
          <Button
            variant="contained"
            onClick={() => {
              logOut();
              navigate("/shreeshaktiTrading/admin/login");
            }}
          >
            Logout
          </Button>
        }
      />
      <Container maxWidth="xl" sx={{ padding: "1.5rem 0" }}>
        <Stack spacing={2} direction="row" sx={styles.OperationBox}>
          <Button
            sx={styles.OperationBtn}
            variant="contained"
            onClick={() => {
              setAddclient(!addclient);
              setViewclients(false);
            }}
          >
            Add New Client
          </Button>
          <Button
            sx={styles.OperationBtn}
            variant="contained"
            onClick={() => {
              setViewclients(!viewclients);
              setAddclient(false);
            }}
          >
            View All Clients
          </Button>
        </Stack>

        <Collapse in={viewclients}>
          <ClientsView />
        </Collapse>
        <Collapse in={addclient}>
          <AddClient />
        </Collapse>
      </Container>
    </Box>
  );
}

function ClientsView() {
  const ClientStyles = {
    logoImgContainer: {
      aspectRatio: "1/1",
      padding: "1rem",
      //   maxHeight: "10rem",
      maxWidth: "8rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
    },
    logoImg: {
      width: "100%",
      objectFit: "contain",
      objectPosition: "center",
    },
    clientsBox: css`
      padding: 2rem 0;
    `,
  };
  return (
    <Box sx={ClientStyles.clientsBox}>
      <Typography variant="h5" component="h1" align="center">
        All Clients
      </Typography>
      <Grid container>
        {clients.map((client, index) => (
          <Grid item key={index} xs="4" sm="3" md="2">
            <Paper
              sx={ClientStyles.logoImgContainer}
              variant="elevation"
              elevation={0}
            >
              <img
                src={client.logo}
                style={ClientStyles.logoImg}
                alt={client.name}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function AddClient() {
  const [name, setName] = useState("");
  const [logoLink, setLogoLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("added new logo");
    clients.push({ name: name, logo: logoLink });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <Typography variant="h5" component="h1" align="center">
        Add Clients
      </Typography>
      <Box sx={{ maxWidth: "400px" }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="dense"
            required
          />
          <TextField
            type="url"
            label="Logo Link"
            value={logoLink}
            onChange={(e) => setLogoLink(e.target.value)}
            fullWidth
            margin="dense"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: ".25rem" }}
          >
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
}
