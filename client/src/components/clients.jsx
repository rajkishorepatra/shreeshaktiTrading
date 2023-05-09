import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// swiper imports
import Swiper from "swiper";
import { useEffect, useRef } from "react";

export default function Clients() {
  const swiperRef = useRef(null);

  const ClientStyles = {
    logoImg: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      minWidth: "8rem",
      padding: "1rem 2rem",
    },
    clientCarouselContainer: {
      padding: "4rem 0",
      width: "100%",
      height: "100%",
      background: "#292d28",
    },
  };

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      slidesPerView: "1",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
    });
  }, []);

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
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {clientLogo.map((client) => (
                  <div className="swiper-slide" key={client.id}>
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={ClientStyles.logoImg}
                    />
                  </div>
                ))}
              </div>
            </div>
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
];
