import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// animation
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

export default function WhySection() {
  const styles = {
    whySection: css`
      background-color: #EAEAEA;
      min-height: 30vh;
    `,
    card: css`
      padding: 1rem;
      border: 1px solid #eaeaea;
      border-radius: 10px;
      margin-bottom: 1rem;
      min-height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #094559;
      font-family: "poppins";
      color: #eaeaea;

      & h6 {
        text-align: center;
        margin-bottom: 0.25rem;
        font-weight: 600;
      }
      & p {
        text-align: center;
      }
    `,
  };
  return (
    <Box sx={styles.whySection}>
      <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
        <Typography
          variant="h3"
          noWrap
          gutterBottom
          sx={{ textAlign: "center", fontFamily: "bebas neue", color: "#F07C00"}}
          color={""}
        >
          Why Choose Us?
        </Typography>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <Grid container spacing={2} sx={styles.cardContainer}>
            <Grid item xs={12} md={4}>
              <motion.div
              //  initial={{ x: '-100vw', opacity: 0 }}
              //  animate={{ x: 0, opacity: 1 }}
              //  transition={{ duration: 1,type:"spring", bounce: 0.5 }}
              >
                <Box sx={styles.card}>
                  <Typography variant="h6" noWrap>
                    OUR VISION
                  </Typography>
                  <Typography variant="body1">
                    With unwavering dedication and a relentless pursuit of
                    innovation, we aim to set new standards and achieve
                    unparalleled success in the global food and beverages trade
                    industry.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={styles.card}>
                <Typography variant="h6" noWrap>
                  OUR VISION
                </Typography>
                <Typography variant="body1">
                  With unwavering dedication and a relentless pursuit of
                  innovation, we aim to set new standards and achieve
                  unparalleled success in the global food and beverages trade
                  industry.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={styles.card}>
                <Typography variant="h6" noWrap>
                  OUR VISION
                </Typography>
                <Typography variant="body1">
                  With unwavering dedication and a relentless pursuit of
                  innovation, we aim to set new standards and achieve
                  unparalleled success in the global food and beverages trade
                  industry.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
