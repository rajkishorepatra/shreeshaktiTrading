import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

// css from emotion
import { css } from "@emotion/react";

// icons
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FolderIcon from "@mui/icons-material/Folder";

export default function NumbersSection() {
  return (
    <Box
      sx={css`
        background-color: black;
      `}
    >
      <Container
        maxWidth="lg"
        sx={css`
          padding: 2rem 0.5rem;
        `}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                background: "white",
                position: "relative",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  transform: "translateY(-20%)",
                  padding: "1rem 0",
                }}
              >
                <FolderIcon
                  sx={{
                    color: "white",
                    background: "red",
                    width: "4rem",
                    height: "4rem",
                    aspectRatio: "1/1",
                    borderRadius: ".25rem",
                  }}
                />
              </Box>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h3" component="div">
                  450
                </Typography>
                <Typography variant="h6" component="div">
                  Clients
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                background: "white",
                position: "relative",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  transform: "translateY(-20%)",
                  padding: "1rem 0",
                }}
              >
                <PeopleIcon
                  sx={{
                    color: "white",
                    background: "red",
                    width: "4rem",
                    height: "4rem",
                    aspectRatio: "1/1",
                    borderRadius: ".25rem",
                  }}
                />
              </Box>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h3" component="div">
                  450
                </Typography>
                <Typography variant="h6" component="div">
                  Clients
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                background: "white",
                position: "relative",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  transform: "translateY(-20%)",
                  padding: "1rem 0",
                }}
              >
                <PersonIcon
                  sx={{
                    color: "white",
                    background: "red",
                    width: "4rem",
                    height: "4rem",
                    aspectRatio: "1/1",
                    borderRadius: ".25rem",
                  }}
                />
              </Box>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h3" component="div">
                  450
                </Typography>
                <Typography variant="h6" component="div">
                  Clients
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper
              sx={{
                background: "white",
                position: "relative",
                padding: "1rem",
              }}
            >
              <Box
                sx={{
                  transform: "translateY(-20%)",
                  padding: "1rem 0",
                }}
              >
                <LocalShippingIcon
                  sx={{
                    color: "white",
                    background: "red",
                    width: "4rem",
                    height: "4rem",
                    aspectRatio: "1/1",
                    borderRadius: ".25rem",
                  }}
                />
              </Box>
              <Stack spacing={2} direction={"row"}>
                <Typography variant="h3" component="div">
                  450
                </Typography>
                <Typography variant="h6" component="div">
                  Clients
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
