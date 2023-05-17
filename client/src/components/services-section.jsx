import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// images for cards
import CardImg from "../assets/quote-parallax.jpg";

// css from emotion
import { css } from "@emotion/react";

const styles = {
  serviceSection: css`
    background-color: #f90345;
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
  `,
};

export default function ServiceSection() {
  return (
    <>
      <Box sx={styles.serviceSection}>
        <Container>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            sx={{ textAlign: "center", color: "white" }}
          >
            Our Services
          </Typography>
          <Grid container spacing={2} sx={styles.cardContainer}>
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
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
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
