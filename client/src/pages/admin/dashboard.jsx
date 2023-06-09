import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Heading from "../../components/pageHeader";
// import TextField from "@mui/material/TextField";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../../contexts/authContext";
import { useState } from "react";

import { clients } from "../../local-data/clients";

// create ref to client logos folder on firebase storage
import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

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
  // fetch clients from firebase document and also get the logo url from the firebase storage and display all the clients
  
  return (
    <Box sx={ClientStyles.clientsBox}>
      <Typography variant="h5" component="h1" align="center">
        All Clients
      </Typography>
      <Grid container>
        {clients.map((client, index) => (
          <Grid item key={index} xs={4} sm={3} md={2}>
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
  const [logoFile, setLogoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  const handleAddClient = (e) => {
    e.preventDefault();
    console.log(name, logoLink, logoFile);
    if (logoFile && name.trim() !== "" && logoLink.trim() !== "") {
      const storageRef = ref(storage, `client-logos/${name}-${logoFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, logoFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError(error.message);
        },
        async () => {
          // File upload completed successfully
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("File available at: ", downloadURL);
          // update database
          let DocId = Date.now();
          const clientData = {
            docId: DocId,
            fileName: `${name}-${logoFile.name}`.trim(),
            clientName: name.trim(),
            downloadURL: downloadURL,
            Clientlink: logoLink.trim(),
          };
          try {
            await setDoc(
              doc(db, "ShreeshaktiTradingClients", DocId.toString()),
              clientData
            );
            console.log("Database updated successfully!");
            // Perform any further actions after updating the database
          } catch (error) {
            console.error("Error updating database:", error);
          }
        }
      );
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setLogoFile(file);
  };

  const styles = {
    nameInput: css``,
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
        <form onSubmit={(e) => handleAddClient(e)}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                type="text"
                label="Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="none"
                required
                sx={styles.nameInput}
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="url"
                label="Client Url"
                value={logoLink}
                onChange={(e) => setLogoLink(e.target.value)}
                fullWidth
                margin="none"
                required
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e)}
                fullWidth
                margin="none"
                required
                helperText="file format: jpg, png, jpeg"
                size="small"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: ".25rem" }}
              >
                Add
              </Button>

              {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
              {uploadError && <p>Error: {uploadError}</p>}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
