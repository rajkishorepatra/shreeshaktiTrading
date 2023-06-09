import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Heading from "../components/pageHeader";

// import { css } from "@emotion/react";
import { css } from "@emotion/react";

import S1 from "../assets/services-1.jpg";
import S2 from "../assets/services-2.jpg";
import Startimage from "../assets/quote-parallax.jpg";

export default function MediaCard() {
  const styles = {
    heading: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 4rem 0;
      font-family: "bebas neue";

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
      // text-align: center;
      @media (max-width: 768px) {
        padding: 2rem 0;
      }
    `,
    body: css`
      background: white;
    `,
  };
  return (
    <>
    <Heading title="OUR SERVICES" description="We freight to all over the world
    The best logistic company, Fastly and Safely"/>
      <Box sx={styles.body}>
        <Container maxWidth="xl" sx={{ paddingBottom: "2rem" }}>
          <Box sx={styles.wordStyle}>
            <Typography
              variant="h3"
              color={"primary"}
              sx={{ fontFamily: "bebas neue" }}
            >
              SERVICES
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "poppins" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card sx={{ backgroundColor: "#094559", color: "#EAEAEA", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}}>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "bebas neue" }}
                  >
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA", }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
