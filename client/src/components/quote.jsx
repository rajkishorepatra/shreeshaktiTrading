import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

import { css } from "@emotion/react";

// frmaer motion
import { motion } from "framer-motion";

// import background images
import quoteBackground from "../assets/quote-parallax.jpg";

export default function Quote() {
  const styles = {
    heading: css`
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
      background: #43543f;
      @media (max-width: 768px) {
        max-width: 100%;
      }
    `,
    halfWidth: css`
      @media (min-width: 576px) {
        display: flex;
        gap: 1rem;
      }
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
                  <TextField
                    fullWidth
                    hiddenLabel
                    id="name"
                    margin="dense"
                    size="small"
                    variant="filled"
                    placeholder="Full Name"
                  />
                  <Box sx={styles.halfWidth}>
                    <TextField
                      hiddenLabel
                      margin="dense"
                      fullWidth
                      id="email"
                      size="small"
                      variant="filled"
                      placeholder="Email"
                    />
                    <TextField
                      hiddenLabel
                      margin="dense"
                      fullWidth
                      id="mobile"
                      size="small"
                      variant="filled"
                      placeholder="Mobile"
                    />
                  </Box>

                  <Box sx={styles.halfWidth}>
                    <TextField
                      hiddenLabel
                      margin="dense"
                      fullWidth
                      id="destinationTo"
                      size="small"
                      variant="filled"
                      placeholder="Destination To"
                    />
                    <TextField
                      hiddenLabel
                      margin="dense"
                      fullWidth
                      id="destinationFrom"
                      size="small"
                      variant="filled"
                      placeholder="Destination From"
                    />
                  </Box>

                  <Box sx={styles.halfWidth}>
                    <TextField
                      hiddenLabel
                      fullWidth
                      margin="dense"
                      id="shipmentType"
                      size="small"
                      variant="filled"
                      placeholder="Shipping Type"
                    />
                    <TextField
                      hiddenLabel
                      fullWidth
                      id="date"
                      margin="dense"
                      size="small"
                      variant="filled"
                      placeholder="Date"
                    />
                  </Box>

                  <TextField
                    hiddenLabel
                    id="Messege"
                    multiline
                    rows={4}
                    margin="dense"
                    fullWidth
                    placeholder="Messege"
                  />

                  <Box>
                    <Button variant="contained" size="large">
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
}
