import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// animation
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
// images for cards
import CardImg from "../assets/quote-parallax.jpg";

// css from emotion
import { css } from "@emotion/react";

export default function ServiceSection() {
  const controls = useAnimation();

  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const styles = {
    heading: css`
      text-align: center;
      color: white;
      font-family: "bebas neue";
    `,
    serviceSection: css`
      background-color: #094559;
      min-height: 30vh;
      padding: 3rem 0;
    `,
    cardContainer: css`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    `,
    cardItem: css`
      display: flex;
      align-items: center;
      justify-content: center;
    `,
  };

  return (
    <>
      <Box sx={styles.serviceSection} ref={ref}>
        <Container>
          <motion.div
            animate={controls}
            initial={"hidden"}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.2 },
              },
              hidden: {
                opacity: 0,
                y: 100,
              },
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={styles.heading}
            >
              Our Services
            </Typography>
          </motion.div>
          <Grid container spacing={3} sx={styles.cardContainer}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index} sx={styles.cardItem}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.2 + index * 0.2 },
                      y: 0,
                    },
                    hidden: { y: 50, opacity: 0.1 },
                  }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

function ServiceCard({ service }) {
  const styles = {
    card: css`
      max-width: 24rem;
    `,
  };
  return (
    <>
      <Card sx={styles.card}>
        <CardMedia
          sx={{ height: 140 }}
          image={service.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

const services = [
  {
    id: 1,
    title: "Air Freight",
    image: CardImg,
    description: "We provide the best air freight services in the world",
  },
  {
    id: 1,
    title: "Air Freight",
    image: CardImg,
    description: "We provide the best air freight services in the world",
  },
  {
    id: 1,
    title: "Air Freight",
    image: CardImg,
    description: "We provide the best air freight services in the world",
  },
];
