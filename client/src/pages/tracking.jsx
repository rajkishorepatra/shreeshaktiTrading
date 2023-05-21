import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { css } from "@emotion/react";

// images
import Startimage from "../assets/quote-parallax.jpg";

export default function TrackingPage() {
  const styles = {
    heading: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 4rem 0;

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 3rem 0;
      }
    `,
    imageStyle: css`
      background-image: url(${Startimage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: yellow;
    `,
    wordStyle: css`
      padding: 3rem 0;
      margin: auto;
      max-width: 60%;
      text-align: center;
      @media (max-width: 768px) {
        padding: 2rem 0;
      }
    `,
    datepicker: css`
      width: 100%;
    `,
  };
  return (
    <Box sx={{ background: "#62f3f5", paddingBottom: "3rem" }}>
      <Box sx={styles.imageStyle}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.7)",
          }}
        >
          <Container maxWidth="xl">
            <Box sx={styles.heading}>
              <Typography
                variant="h4"
                sx={{ typography: { xs: "h5", md: "h4" } }}
              >
                Tracking
              </Typography>
              <Typography
                variant="h5"
                sx={{ typography: { xs: "body2", md: "body1" },textAlign:{xs:'left',md:"right"} }}
              >
                We freight to all over the world <br />
                The best logistic company, Fastly and Safely
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="xl">
        <Box sx={styles.wordStyle}>
          <Typography variant="h4" color={"primary"}>
            Track a Shipment
          </Typography>
          <Typography variant="body1">
            Track your LTL, truckload, or intermodal shipment by entering your{" "}
            <b>Track number</b> below to get instant freight tracking
            information.
          </Typography>
        </Box>

        <Container maxWidth="md">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Tracking Id" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <DatePicker label="Start date" sx={styles.datepicker} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <DatePicker label="End date" sx={styles.datepicker} />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Origin Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Orign Country: "
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Unitd States</MenuItem>
                    <MenuItem value={30}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Origin Zip/Postal Zip"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Destination Country{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Destination Country: "
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>India</MenuItem>
                    <MenuItem value={20}>Unitd States</MenuItem>
                    <MenuItem value={30}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Destination Zip/Postal Zip"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" color="secondary">
                  Track
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Container>
    </Box>
  );
}
