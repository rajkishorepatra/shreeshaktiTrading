import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { css } from "@emotion/react";
// images
import Startimage from "../assets/quote-parallax.jpg";

export default function Heading({ img, title, description }) {
  const styles = {
    heading: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 5rem 0;

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 4rem 0;
      }
    `,
    imageStyle: css`
      background-image: url(${img? img : Startimage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: yellow;
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
          <Box sx={styles.heading}>
            <Typography
              variant="h4"
              sx={{ typography: { xs: "h5", md: "h4" } }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                typography: { xs: "body2", md: "body1" },
                textAlign: { xs: "left", md: "right" },
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
