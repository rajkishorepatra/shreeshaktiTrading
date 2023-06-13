import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

// images for cards
import CardImg from "../assets/quote-parallax.jpg";

// css from emotion
import { css } from "@emotion/react";

const styles = {
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
  card: css`
    max-width: 24rem;

    &:hover {
      height: 18rem;
      box-shadow: rgba(241, 240, 240, 0.832) 0px 5px 5px,
        rgba(0, 0, 0, 0.05) 0px 5px 10px;
      transition: transform 13s ease-in-out;
    }
  `,
};

export default function ServiceSection() {

  return (
    <>
    <Scrollspy
        currentClassName="active" // CSS class for the currently active section
        componentTag="div" // The container element type to render
        offset={-100} // Offset from the top to trigger the active state
      >
      <Box sx={styles.serviceSection}>
        <Container>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{
              textAlign: "center",
              color: "white",
              fontFamily: "bebas neue",
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={3} sx={styles.cardContainer}>
            {services.map((service, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ServiceCard service={service} sx={{ fontFamily: "poppins" }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      </Scrollspy>
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

function ServiceCard({ service }) {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 5000 } : {})}
      >
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
      </Grow>
    </>
  );
}
