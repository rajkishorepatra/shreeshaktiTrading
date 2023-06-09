// import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { useState } from 'react';

import { css } from "@emotion/react";

import ShreeShaktiLogo from "../assets/shreeshakti-logo.png";

function Copyright() {
  return (
    <Typography
      variant="overline"
      color="text.secondary"
      sx={{ textTransform: "uppercase" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        LeafLets
      </Link>{" "}
      {new Date().getFullYear()}
      {".All Rights Reserved."}
    </Typography>
  );
}

export default function PageFooter() {
  const footerStyles = {
    root: css`
      padding: 2rem 0 0 0;
      background: #EAEAEA;
    `,
    section: {
      marginBottom: "20px",
      justifySelf: "center",
    },
    subtitle: {
      color: "#757575",
      marginBottom: "20px",
      fontFamily: "poppins",
    },
    iconButton: {
      marginRight: "10px",
    },
    icon: {
      color: "#444444",
      fontSize: "2rem",
    },
    formButton: {
      px: 3,
      py: 1,
    },
    copyright: {
      py: 2,
      textAlign: "center",
      backgroundColor: "#F5F5F5",
    },
    info : css `
      font-family:'poppins';
    `,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log({name}, {email}, {message});
    const response = await fetch (`https://shreeshaktiserver.onrender.com/contactUs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, email, message}),
    }).then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      //  console.log(resData);
       if (resData.status === "success") {
        console.log("Message Sent");
       } else if (resData.status === "fail") {
        console.log("Message failed to send");
       }
    })
    .then(() => {{name , email, message}});
  };

  return (
    <Box>
      <Box sx={footerStyles.root}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} style={footerStyles.section}>
                <Grid item xs={12}>
                  {/* <Paper
                    variant="outlined"
                    square
                    sx={{
                      background: "#344534",
                      height: "5rem",
                      aspectRatio: "1/1",
                      borderRadius: "50%",
                    }}
                  /> */}
                  <img
                    src={ShreeShaktiLogo}
                    alt="ShreeShakti Logo"
                    style={{ height: "5rem", width: "5rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "uppercase", fontFamily:'bebas neue',fontSize:"1.25rem"}}
                  >
                    ShreeShakti food and beverages trading l.l.c
                  </Typography>
                  <Typography variant="body2" style={footerStyles.subtitle}>
                    Delicious food and drinks for all occasions
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={footerStyles.info}>
                  <Typography variant="body1">
                    <strong>
                      <AlternateEmailOutlinedIcon />
                    </strong>{" "}
                    info@shreeshakti.com
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      <PhoneOutlinedIcon />
                    </strong>{" "}
                    +971 123456789
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <IconButton style={footerStyles.iconButton}>
                    <Facebook sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <Twitter sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <LinkedIn sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <Instagram sx={footerStyles.icon} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={1} style={footerStyles.section}>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{fontFamily:"bebas neue"}}>Contact Us</Typography>
                </Grid>
                <Grid item xs={12}>
                  <form onSubmit={submitForm}>
                    <TextField
                      fullWidth
                      hiddenLabel
                      placeholder="Name"
                      variant="filled"
                      size="small"
                      margin="dense"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      fullWidth
                      hiddenLabel
                      placeholder="Email Address"
                      variant="filled"
                      size="small"
                      margin="dense"
                      value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      hiddenLabel
                      fullWidth
                      multiline
                      minRows={4}
                      placeholder="Message"
                      variant="filled"
                      size="small"
                      margin="dense"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={footerStyles.formButton}
                      // onClick={submitForm}
                      type="submit"
                    >
                      Send
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={footerStyles.copyright}>
        <Copyright />
      </Box>
    </Box>
  );
}
