// import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

import { css } from "@emotion/react";

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
      matgintop: 2rem;
      padding: 2rem 0;
    `,
    section: {
      marginBottom: "20px",
      // maxWidth: "480px",
      justifySelf: "center",
    },
    subtitle: {
      color: "#757575",
      marginBottom: "20px",
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
  };
  return (
    <Box>
      <footer style={footerStyles.root}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} style={footerStyles.section}>
                <Grid item xs={12}>
                  <Paper
                    variant="outlined"
                    square
                    sx={{
                      background: "#344534",
                      height: "5rem",
                      aspectRatio: "1/1",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "uppercase" }}
                  >
                    ShreeShakti food and beverages trading l.l.c
                  </Typography>
                  <Typography variant="body2" style={footerStyles.subtitle}>
                    Delicious food and drinks for all occasions
                  </Typography>
                </Grid>
                <Grid item xs={12}>
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
                  <Typography variant="h5">Contact</Typography>
                </Grid>
                <Grid item xs={12}>
                  <form>
                    <TextField
                      fullWidth
                      hiddenLabel
                      placeholder="Name"
                      variant="filled"
                      size="small"
                      margin="dense"
                    />
                    <TextField
                      fullWidth
                      hiddenLabel
                      placeholder="Email Address"
                      variant="filled"
                      size="small"
                      margin="dense"
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
                    />
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={footerStyles.formButton}
                    >
                      Send
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
      <Box sx={footerStyles.copyright}>
        <Copyright />
      </Box>
    </Box>
  );
}
