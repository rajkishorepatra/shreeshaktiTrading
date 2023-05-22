import { css } from "@emotion/react";

import { Menu as MenuIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";
export default function Navbar() {
  const styles = {
    logo: css`
      align-self: center;
    `,
    menuButton: css`
      margin-right: 1rem;
      color: #000000;
      @media (min-width: 768px) {
        display: none;
      }
    `,
    links: css`
      display: none;
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
      }
    `,

    link: css`
      color: #000000;
      text-decoration: none;
      margin-right: 1rem;
      &:hover {
        text-decoration: underline;
      }
    `,

    main: css`
      background: #5c9bd6;
      position: "static";
      // min-height: 3rem;
      padding: 0.5rem 0;
    `,
  };

  return (
    <Box sx={styles.main}>
      <Container maxWidth="xl">
        <Box
          sx={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Typography sx={styles.logo} variant="h6">
            ShreeShakti
          </Typography>
          <IconButton
            sx={styles.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Box sx={styles.links}>
            <Link sx={styles.link} component={RLink} to="/">
              Home
            </Link>
            <Link sx={styles.link} component={RLink} to="/">
              About
            </Link>
            <Link sx={styles.link} component={RLink} to="/services">
              Services
            </Link>
            <Link sx={styles.link} component={RLink} to="/tracking">
              Tracking
            </Link>
            <Link sx={styles.link} component={RLink} to="/shipment">
              Shipment
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
