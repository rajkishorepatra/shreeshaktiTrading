import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// css from emotion
import { css } from "@emotion/react";

import CountUp from "react-countup";

// icons
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FolderIcon from "@mui/icons-material/Folder";

import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NumbersSection() {
  const controls = useAnimation();

  const ref = useRef();
  const isInView = useInView(ref, { margin: "100px 0px -300px  0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div style={{ backgroundColor: "#EAEAEA", padding: "2rem 0" }}>
      <motion.div ref={ref}>
        <Container
          maxWidth="lg"
          sx={css`
            padding: 2rem 0.5rem;
          `}
        >
          <Grid container spacing={{ xs: 5, sm: 6, md: 2 }}>
            {numbersData.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                    hidden: { y: 100, opacity: 0 },
                  }}
                >
                  <NumberCard
                    icon={item.icon}
                    number={item.number}
                    title={item.title}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}

const numbersData = [
  {
    icon: <FolderIcon />,
    number: 578,
    title: "Projects Done",
  },
  {
    icon: <PeopleIcon />,
    number: 347,
    title: "Permanent Clients",
  },
  {
    icon: <PersonIcon />,
    number: 270,
    title: "Employees",
  },
  {
    icon: <LocalShippingIcon />,
    number: 128,
    title: "Owned Vehicles",
  },
];

function NumberCard({ icon, number, title }) {
  const styles = {
    iconBox: css`
      position: absolute;
      top: -1.5rem;
      left: 1rem;
      background: #5c9bd6;
      padding: 0.5rem 1.25rem;
      color: white;
      border-radius: 0.25rem;

      svg {
        font-size: 3rem;
      }
    `,
    detailsBox: css`
      padding-top: 2rem;
      display: flex;
      align-items: center;
    `,

    titles: css`
      padding-left: 0.25rem;
      font-weight: semibold;
      font-family: poppins;
    `,
  };
  return (
    <Paper
      sx={{
        background: "white",
        position: "relative",
        padding: "1rem",
      }}
    >
      <Box sx={styles.iconBox}>{icon}</Box>

      <Box sx={styles.detailsBox}>
        <CountUp
          start={0}
          end={number}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          // scrollSpyDelay={2000}
        >
          {({ countUpRef }) => (
            <Typography
              variant="h4"
              component="div"
              color={"red"}
              sx={{
                fontFamily: "bebas neue",
                fontSize: { xs: "2rem", sm: "2.2rem", md: "2.8rem" },
                paddingRight: ".5rem",
                fontWeight: "bold",
              }}
            >
              <span ref={countUpRef} />
            </Typography>
          )}
        </CountUp>

        <Typography component="div" sx={styles.titles}>
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
