import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"


import S1 from "../assets/services-1.jpg";
import S2 from "../assets/services-2.jpg";
import Startimage from "../assets/quote-parallax.jpg";

const wordStyle = {
    // width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    padding: "5vh 0 5vh 0",
    fontSize: "1.8rem",
};

const imageStyle = {
    minHeight: "15rem",
    padding: "3rem 0",
};

export default function MediaCard() {
    return (
        <>
            <Box>
                <Box>
                    <CardMedia sx={imageStyle} image={Startimage}>
                        <Container maxWidth='xl'>
                            <Typography variant="h4">Our Services</Typography>
                            <h3>
                                We freight to all over the world <br />
                                The best logistic company, Fastly and Safely
                            </h3>
                        </Container>
                    </CardMedia>
                </Box>
                <Container maxWidth='xl'>
                    <Box sx={wordStyle}>
                        <h1>SERVICES</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </Box>

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S1} />
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
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S2} />
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
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S1} />
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
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S2} />
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
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S1} />
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
                        </Grid>

                        <Grid item xs={12} md={6} lg={4}>
                            <Card>
                                <CardMedia sx={{ height: 200 }} image={S2} />
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
                        </Grid>







                    </Grid>
                </Container>
            </Box>
        </>
    );
}