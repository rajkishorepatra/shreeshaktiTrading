// mui imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { css } from "@emotion/react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// images
import carouselImg1 from "../assets/headerCarousel1.jpg";
import carouselImg2 from "../assets/headerCarousel2.jpg";
import carouselImg3 from "../assets/headerCarousel-3.jpg";

import { useEffect, useRef } from "react";
import { Stack } from "@mui/material";

export default function PageHeader() {
  let swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      let swiper = swiperRef.current.swiper;
      swiper.on("slideChange", () => {});
    }
  }, []);

  const styles = {
    container: css`
      position: relative;
      max-height: 90vh;
      overflow: hidden;
    `,
    contentsContainer: css`
      transform: translateY(120%);
      @media (max-width: 576px) {
        transform: translateY(60%);
      }
      @media (max-width: 400px) {
        transform: translateY(40%);
      }
    `,
    carouselText: css`
      color: white;
      text-align: center;
      font-family: "poppins";
      padding: 0 2rem;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    `,
  };

  return (
    <>
      <Box sx={styles.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
          style={{ maxHeight: "90vh" }}
          ref={swiperRef}
        >
          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src={carouselImg1}
                alt={"image one"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.6)",
                }}
              >
                <Container maxWidth="lg" sx={styles.contentsContainer}>
                  <Stack spacing={1}>
                    <m.div
                      initial="hidden"
                      whileInView={"visible"}
                      viewport={{ once: true }}
                    >
                      <Typography
                        variant="h4"
                        sx={css`
                          color: white;
                          text-align: center;
                          font-size: 2rem;
                          @media (max-width: 768px) {
                            font-size: 1.2rem;
                          }
                        `}
                      >
                        WE ARE PROUD
                      </Typography>
                    </m.div>
                    <Typography
                      variant="h3"
                      sx={css`
                        text-transform: uppercase;
                        color: yellow;
                        text-align: center;

                        @media (max-width: 768px) {
                          font-size: 1.5rem;
                        }
                      `}
                    >
                      {"To be always on demand"}
                    </Typography>
                    <Typography variant="body1" sx={styles.carouselText}>
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?"
                      }
                    </Typography>
                  </Stack>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src={carouselImg2}
                alt={"image two"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.6)",
                }}
              >
                <Container maxWidth="lg" sx={styles.contentsContainer}>
                  <Stack spacing={1}>
                    <Typography
                      variant="h4"
                      sx={css`
                        color: white;
                        text-align: center;
                        font-size: 2rem;
                        @media (max-width: 768px) {
                          font-size: 1.2rem;
                        }
                      `}
                    >
                      WE ARE ACTIVE
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={css`
                        text-transform: uppercase;
                        color: yellow;
                        text-align: center;

                        @media (max-width: 768px) {
                          font-size: 1.5rem;
                        }
                      `}
                    >
                      {"To Ship your product on time"}
                    </Typography>
                    <Typography variant="body1" sx={styles.carouselText}>
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?"
                      }
                    </Typography>
                  </Stack>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <img
                src={carouselImg3}
                alt={"image three"}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0,0,0,0.6)",
                }}
              >
                <Container maxWidth="lg" sx={styles.contentsContainer}>
                  <Stack spacing={1}>
                    <Typography
                      variant="h4"
                      sx={css`
                        color: white;
                        text-align: center;
                        font-size: 2rem;
                        @media (max-width: 768px) {
                          font-size: 1.2rem;
                        }
                      `}
                    >
                      WE ARE
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={css`
                        text-transform: uppercase;
                        color: yellow;
                        text-align: center;

                        @media (max-width: 768px) {
                          font-size: 1.5rem;
                        }
                      `}
                    >
                      {"Always there for you"}
                    </Typography>
                    <Typography variant="body1" sx={styles.carouselText}>
                      {
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?"
                      }
                    </Typography>
                  </Stack>
                </Container>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
