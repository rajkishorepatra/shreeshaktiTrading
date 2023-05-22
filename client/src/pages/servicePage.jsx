import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

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
      text-align: center;
      @media (max-width: 768px) {
        padding: 2rem 0;
      }
    `,
  };
  return (
    <>
      <Box>
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
                  Our Services
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ typography: { xs: "body2", md: "body1" } }}
                >
                  We freight to all over the world <br />
                  The best logistic company, Fastly and Safely
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>
        <Container maxWidth="xl" sx={{paddingBottom:'2rem'}}>
          <Box sx={styles.wordStyle}>
            <Typography variant="h4" color={"primary"}>
              Services
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S1} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S1} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S1} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Card>
                <CardMedia sx={{ height: 200 }} image={S2} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
