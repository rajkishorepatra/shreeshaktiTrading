import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";

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
      max-width: 320px;
      padding: 1.5rem;
    `,
    OperationBox: css`
      justify-content: center;
      align-self: center;
    `,
  };
  return (
    <Box>
      <Heading title="Admin Dashboard" />
      <Container maxWidth="xl">
        <Box sx={{ padding: "2rem 0" }}>
          <Button
            variant="contained"
            onClick={() => {
              logOut();
              navigate("/shreeshaktiTrading/admin/login");
            }}
          >
            Logout{" "}
          </Button>
        </Box>

        <Stack spacing={2} direction="row" sx={styles.OperationBox}>
          <Button
            sx={styles.OperationBtn}
            variant="contained"
            onClick={() => setAddclient(!addclient)}
          >
            Add New Client
          </Button>
          <Button
            sx={styles.OperationBtn}
            variant="contained"
            onClick={() => {
              console.log(viewclients);
              setViewclients(!viewclients);
            }}
          >
            View All Clients
          </Button>
        </Stack>

        {viewclients && <ClientsView />}
        {addclient && <AddClient />}
      </Container>
    </Box>
  );
}

function ClientsView() {
  const ClientStyles = {
    logoImgContainer: {
      aspectRatio: "1/1",
      padding: "1rem",
      maxHeight: "12rem",
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
    clientCarouselContainer: {
      padding: "4rem 0",
      width: "100%",
      height: "100%",
      background: "#f5f5f5",
    },
    clientsBox: css`
      padding: 2rem 0;
    `,
  };
  return (
    <Box sx={ClientStyles.clientsBox}>
      <Typography variant="h4" component="h1" align="center">
        All Clients
      </Typography>
      <Grid container>
        {clients.map((client, index) => (
          <Grid item key={index} xs="6" sm="4" md="3">
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
      <Typography variant="h4" component="h1" align="center">
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
            margin="normal"
            required
          />
          <TextField
            type="url"
            label="Logo Link"
            value={logoLink}
            onChange={(e) => setLogoLink(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
}
