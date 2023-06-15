import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// animation
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function WhySection() {
  const controls = useAnimation();

  const ref = useRef();
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // const numbersVariants = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.8 }, y: 0 },
  //   hidden: { y: 50, opacity: 0.2 },
  // };

  const whySectionData = [
    {
      heading: "our vision",
      desc: " With unwavering dedication and a relentless pursuit of innovation, we aim to set new standards and achieve unparalleled success in the global food and beverages trade industry.",
    },
    {
      heading: "our vision",
      desc: " With unwavering dedication and a relentless pursuit of innovation, we aim to set new standards and achieve unparalleled success in the global food and beverages trade industry.",
    },
    {
      heading: "our vision",
      desc: " With unwavering dedication and a relentless pursuit of innovation, we aim to set new standards and achieve unparalleled success in the global food and beverages trade industry.",
    },
  ];

  const styles = {
    whySection: css`
      background-color: #eaeaea;
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
    <Box sx={styles.whySection} ref={ref}>
      <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
        <motion.div>
          <Typography
            variant="h3"
            noWrap
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "bebas neue",
              color: "#F07C00",
            }}
            color={""}
          >
            Why Choose Us?
          </Typography>
        </motion.div>

        <Grid container spacing={2} sx={styles.cardContainer}>
          {whySectionData.map((data, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.2 },
                    y: 0,
                  },
                  hidden: { y: 50, opacity: 0.2 },
                }}
              >
                <Box sx={styles.card}>
                  <Typography variant="h6" noWrap>
                    {data.heading}
                  </Typography>
                  <Typography variant="body1">{data.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
