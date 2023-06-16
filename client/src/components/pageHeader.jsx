import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";

import { css } from "@emotion/react";
// images
import Startimage from "../assets/quote-parallax.jpg";

export default function Heading({ img, title, description, back }) {
  const styles = {
    heading: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      // padding: 3rem 0;
      padding-bottom: 3rem;
      font-family: bebas neue;

      @media (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 2rem;
      }
    `,
    imageStyle: css`
      background-image: url(${img? img : Startimage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: yellow;
      font-family: "bebas neue";
    `,

    linkStyle: css`
      font-size: 1.5rem;
      color: #F07C00;
      text-decoration: none;
      padding: 2.5rem 0 1rem 0;

      &:hover {
        color: white;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 1.5rem 0 0.4rem 0;
      }
    `,
  };

  return (
    <Box sx={styles.imageStyle}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          background: "rgba(0,0,0,0.7)",
        }}
      >
        <Container maxWidth="xl">
        
        <Box sx={styles.linkStyle}>
        <Link to="/" sx={styles.linkStyle} component={RLink}>
        {back}
        </Link>
        </Box>
        <Box sx={styles.heading}>
            <Typography
              variant="h4"
              sx={{ typography: { xs: "h5", md: "h4" }, fontFamily: "bebas neue", display:"flex", flexDirection:"column",}}
            >
            
            {title}
            
            </Typography>
            <Typography
              variant="h5"
              sx={{
                typography: { xs: "body2", md: "body1" },
                textAlign: { xs: "left", md: "right" },
                fontFamily: "poppins"
              }}
            >
            {description}
            </Typography>
            </Box>
        </Container>
      </Box>
    </Box>
  );
}
