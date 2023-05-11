import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

export default function Clients() {
  const ClientStyles = {
    logoImgContainer: {
      aspectRatio: "1/1",
      padding: "1rem",
      maxHeight: "12rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#aaa",
    },
    logoImg: {
      width: "100%",
      objectFit: "contain",
      objectPosition: "center",
    },
    clientCarouselContainer: {
      padding: "4rem 0",
      width: "100%",
      height: "100%",
      background: "#f92d28",
    },
  };

  return (
    <Box sx={ClientStyles.clientCarouselContainer}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ textAlign: "center", color: "white" }}
          >
            Our Clients
          </Typography>

          <Box>
            <Swiper
              slidesPerGroup={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              rewind={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                960: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay]}
            >
              {clientLogo.map((image, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    sx={ClientStyles.logoImgContainer}
                    variant="elevation"
                    elevation={3}
                  >
                    <img
                      src={image.logo}
                      style={ClientStyles.logoImg}
                      alt={image.name}
                    />
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

const clientLogo = [
  {
    id: 1,
    name: "ruchi foodline",
    logo: "https://www.ruchifoodline.com/img/ruchi-new-logo-white.png",
  },
  {
    id: 1,
    name: "frozit",
    logo: "https://www.frozit.in/images/logo-dark.png",
  },
  {
    id: 1,
    name: "ruchi foodline",
    logo: "https://www.ruchifoodline.com/img/ruchi-new-logo-white.png",
  },
  {
    id: 1,
    name: "frozit",
    logo: "https://www.frozit.in/images/logo-dark.png",
  },
  {
    id: 1,
    name: "ruchi foodline",
    logo: "https://www.ruchifoodline.com/img/ruchi-new-logo-white.png",
  },
  {
    id: 1,
    name: "frozit",
    logo: "https://www.frozit.in/images/logo-dark.png",
  },
  {
    id: 1,
    name: "ruchi foodline",
    logo: "https://www.ruchifoodline.com/img/ruchi-new-logo-white.png",
  },
  {
    id: 1,
    name: "frozit",
    logo: "https://www.frozit.in/images/logo-dark.png",
  },
  {
    id: 1,
    name: "ruchi foodline",
    logo: "https://www.ruchifoodline.com/img/ruchi-new-logo-white.png",
  },
];
