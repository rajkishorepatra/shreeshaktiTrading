import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Startimage from "./assets/quote-parallax.jpg";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import S1 from "./assets/services-1.jpg";
import S2 from "./assets/services-2.jpg";
import S3 from "./assets/services-3.jpg";

const cardStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

const wordStyle = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexDirection: "column",
  padding: "5vh 0 5vh 0",
  fontSize: "1.8rem",
};

const imageStyle = {
  width: "100vw",
  height: "27vh",
  flexWrap: 'wrap',
  zIndex: -1,
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  padding: "5vh 5vw 5vh 5vw",
  color: "yellow",
  fontSize: "1.3rem",
  alignContent : 'center'
};

const imageBox = {
  width: "100vw",
  display: "flex",
  flexDirection: "column",
};

const card = {
  margin: "3vh 2vw 5vh 5vw",
  maxWidth: 345,
}

export default function MediaCard() {
  return (
    <>
      <Navbar />
      <Box>
        <CardMedia sx={imageStyle} image={Startimage}>
          <h1>Our Services</h1>
          <h3>
            We freight to all over the world <br />
            The best logistic company, Fastly and Safely
          </h3>
        </CardMedia>
      </Box>
      <Box sx={wordStyle}>
        <h1>SERVICES</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </Box>

      <Box sx={imageBox}>
        <Box sx={cardStyle}>
          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S1}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>

          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S2}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>

          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S3}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={cardStyle}>
          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S3}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S3}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
          <Card sx={card}>
            <CardMedia sx={{ height: 200 }} image={S3}/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Footer />
    </>
  );
}