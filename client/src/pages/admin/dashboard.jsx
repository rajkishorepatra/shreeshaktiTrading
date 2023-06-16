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

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";

import { css } from "@emotion/react";
import { useNavigate, useLocation } from "react-router-dom";

import { UserAuth } from "../../contexts/authContext";
import { useState, useEffect } from "react";

// create ref to client logos folder on firebase storage
import { storage } from "../../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { db } from "../../firebase";
import {
  doc,
  deleteDoc,
  setDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

export default function AdminDashboard() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [viewclients, setViewclients] = useState(false);
  const [addclient, setAddclient] = useState(false);
  const [feedback, setFeedback] = useState({
    state: false,
    message: "",
  });
  const [loginStatus, setLoginStatus] = useState(location?.state?.isAdmin);

  useEffect(() => {
    setLoginStatus(location?.state?.isAdmin);
  }, [location]);

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
        title="ADMIN DASHBOARD"
        description={
          <Button
            variant="contained"
            onClick={() => {
              logOut();
              navigate("/admin/login", { state: { isAdmin: false } });
            }}
          >
            LOGOUT
          </Button>
        }
        back="<< BACK TO HOMEPAGE"
      />
      <Container maxWidth="xl">
        <Box sx={{ padding: "2rem 0" }}>
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
            <ClientsView setFeedback={setFeedback} />
          </Collapse>
          <Collapse in={addclient}>
            <AddClient setAddclient={setAddclient} setFeedback={setFeedback} />
          </Collapse>

          {/* feedback system */}
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "320px" },
              padding: "2rem 1rem",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
          >
            <Snackbar
              open={feedback.state}
              autoHideDuration={6000}
              onClose={() => setFeedback({ state: false, message: "" })}
              message={feedback.message}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setFeedback({ state: false, message: "" });
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            />
            <Snackbar
              open={loginStatus}
              autoHideDuration={8000}
              onClose={() => setLoginStatus(false)}
              message={"You are logged in as Admin."}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setLoginStatus(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function ClientsView({ setFeedback }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "ShreeShaktiTradingClients"),
      (snapshot) => {
        const updatedList = snapshot.docs.map((doc) => doc.data());
        setClients(updatedList);
        console.log(updatedList);
      }
    );
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  const deleteClient = async (docId, fileName) => {
    try {
      // Delete the file from Firebase Storage
      const fileRef = ref(storage, `client-logos/${fileName}`); // Replace 'path/to/files/' with the actual path to the file
      await deleteObject(fileRef);

      // Delete the Firestore document
      await deleteDoc(doc(db, "ShreeShaktiTradingClients", docId.toString()));

      console.log("Entry deleted successfully.");
      setFeedback({
        state: true,
        message: "Entry deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting entry:", error);
      setFeedback({
        state: true,
        message: "Error deleting entry.",
      });
    }
  };

  const ClientStyles = {
    logoImgContainer: {
      aspectRatio: "1/1",
      padding: ".25rem",
      position: "relative",

      // maxWidth: "8rem",
      display: "flex",
      flexDirection: "column",
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
      <Grid container spacing={2}>
        {clients.map((client, index) => (
          <Grid item key={index} xs={4} sm={3} md={2}>
            <Paper
              sx={ClientStyles.logoImgContainer}
              variant="elevation"
              elevation={0}
            >
              <img
                src={client.downloadURL}
                style={ClientStyles.logoImg}
                alt={client.clientName}
              />
              <Typography variant="subtitle2" align="center">
                {client.clientName}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: "0.25rem",
                  right: "0.25rem",
                  svg: {
                    color: "red",
                  },
                }}
              >
                {/* mui delete icon */}
                <IconButton
                  aria-label="delete"
                  onClick={() => {
                    let confirmDelete = window.confirm(
                      "Are you sure you want to delete this client?"
                    );
                    if (confirmDelete) {
                      deleteClient(client.docId, client.fileName);
                    }
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          {clients.length === 0 && (
            <Box
              sx={{
                padding: "1rem",
              }}
            >
              <Typography variant="subtitle2" align="center">
                No Clients Added Yet
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

function AddClient({ setAddclient, setFeedback }) {
  const [clientName, setClientName] = useState("");
  const [logoLink, setLogoLink] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);

  const handleAddClient = (e) => {
    e.preventDefault();
    const Uid = Date.now();
    console.log(clientName, logoLink, logoFile);
    if (logoFile && clientName.trim() !== "" && logoLink.trim() !== "") {
      const storageRef = ref(
        storage,
        `client-logos/${clientName}-${Uid}-${logoFile.name}`
      );
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

          const clientData = {
            docId: Uid,
            fileName: `${clientName}-${Uid}-${logoFile.name}`.trim(),
            clientName: clientName.trim(),
            downloadURL: downloadURL,
            clientLink: logoLink.trim(),
          };
          try {
            await setDoc(
              doc(db, "ShreeShaktiTradingClients", Uid.toString()),
              clientData
            );
            console.log("Database updated successfully!");
            // reset the form
            setClientName("");
            setLogoLink("");
            setLogoFile(null);
            setUploadProgress(0);
            setUploadError(null);
            // close the form
            setAddclient(false);
            // show feedback
            setFeedback({
              state: true,
              message: "Client added successfully!",
            });
          } catch (error) {
            console.error("Error updating database:", error);
            setFeedback({
              state: true,
              message: "Error updating database!",
            });
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
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
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
