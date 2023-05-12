import Box from "@mui/material/Box";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

// images
import carouselImg1 from "../assets/headerCarousel1.jpg";
import carouselImg2 from "../assets/headerCarousel2.jpg";
import carouselImg3 from "../assets/headerCarousel3.jpg";
let carouselImages = [carouselImg1, carouselImg2, carouselImg3, carouselImg2];

export default function PageHeader() {
  return (
    <>
      <Box sx={{
        maxHeight: "90vh",
        minHeight: "80vh",
        overflow: "hidden",
      }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
          modules={[Autoplay,Navigation]}
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={index} style={{
                width: "100%",
                objectFit: "cover",
                objectPosition: "bottom",
                
              }}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
