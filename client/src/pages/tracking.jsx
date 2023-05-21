import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { css } from "@emotion/react";

export default function TrackingPage() {
  const styles = {
    heading: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3rem 0;
        min-height: 12rem;
        @media and (max-width: )
    }
    `,
  };
  return (
    <Box sx={{ background: "#f283f5" }}>
      <Container maxWidth="lg">
        <Box sx={styles.heading}>
          <Typography sx={{ typography: { md: "h4", xs: "h5" } }}>
            Hello world
          </Typography>
          <Typography sx={{ typography: { md: "h5", xs: "h6" } }}>
            We freight to all over the world The best logistic company,
          </Typography>
        </Box>

        {/* tab containing forms-  */}
        

        
      </Container>
    </Box>
  );
}
