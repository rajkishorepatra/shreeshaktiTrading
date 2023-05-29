import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { css } from "@emotion/react";

// frmaer motion
import { motion } from "framer-motion";

// import background images
import quoteBackground from "../assets/quote-parallax.jpg";

export default function Quote() {
  const styles = {
    heading: css`
      color: white;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        text-align: center;
      }
    `,
    quoteContainer: css`
      min-height: 90vh;
      position: relative;
      isolation: isolate;
      @media (min-width: 768px) {
        background: url(${quoteBackground}) no-repeat center center;
        background-size: cover;
      }
    `,
    formContainer: css`
      padding: 3rem 0.5rem;
      @media (min-width: 768px) {
        max-width: 50%;
      }
    `,
    quoteBack: css`
      display: block;
      width: 100%;
      height: 100%;
      max-width: 55%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.9;
      background: rgba(0, 0, 0, 0.7);
      @media (max-width: 768px) {
        max-width: 100%;
      }
    `,
    formInputField: css`
      background-color: white;
      border-radius: 0.25rem 0.25rem 0 0;
    `,
  };
  return (
    <>
      <Box sx={styles.quoteContainer}>
        <Box sx={styles.quoteBack}></Box>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, type: "spring", bounce: 0.5 }}
          >
            <Box sx={styles.formContainer}>
              <Box sx={styles.heading}>
                <Typography variant="h3">Get a free quote</Typography>
                <Typography variant="body1">
                  We always use best and fastest fleets
                </Typography>
              </Box>
              <Box>
                <form>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        hiddenLabel
                        id="name"
                        size="small"
                        variant="filled"
                        placeholder="Full Name"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        fullWidth
                        id="email"
                        size="small"
                        variant="filled"
                        placeholder="Email"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        //
                        fullWidth
                        id="mobile"
                        size="small"
                        variant="filled"
                        placeholder="Mobile"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        //
                        fullWidth
                        id="destinationTo"
                        size="small"
                        variant="filled"
                        placeholder="Destination To"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        fullWidth
                        id="destinationFrom"
                        size="small"
                        variant="filled"
                        placeholder="Destination From"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        fullWidth
                        id="shipmentType"
                        size="small"
                        variant="filled"
                        placeholder="Shipping Type"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        hiddenLabel
                        fullWidth
                        id="date"
                        size="small"
                        variant="filled"
                        placeholder="Date"
                        sx={styles.formInputField}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        hiddenLabel
                        id="Messege"
                        multiline
                        rows={4}
                        fullWidth
                        placeholder="Messege"
                        sx={styles.formInputField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" size="large">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
