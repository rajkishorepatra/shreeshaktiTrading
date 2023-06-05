import { css } from "@emotion/react";
import { m } from "framer-motion";

import { Menu as MenuIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import navImage from "../assets/Catalogue-ShreeShakti-1.png";

import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const styles = {
    logo: css`
      display: flex;
      align-items: center;
      align-self: center;
      text-decoration: none;
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
      // text-align: end;
      margin-right: 1rem;
      &:hover {
        text-decoration: underline;
      }
    `,

    main: css`
      background: #5c9bd6;
      padding: 0.5rem 0;
      position: fixed;
      width: 100%;
      min-height: 3.5rem;
      top: 0;
      z-index: 100;
    `,
  };

  return (
    <Box sx={{ marginBottom: "3.5rem" }}>
      <Box sx={styles.main}>
        <Container maxWidth="xl">
          <Box
            sx={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <Container sx={styles.logo}>
              <img src={navImage} height={"40rem"} width={"40rem"} alt="home" />
              <Typography sx={{fontSize:'1.5rem',}}>SHREESHAKTI</Typography>
            </Container>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={styles.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Box sx={styles.links}>
              <Link sx={styles.link} component={RLink} to="/shreeshaktiTrading">
                Home
              </Link>
              <Link sx={styles.link} component={RLink} to="/shreeshaktiTrading">
                About
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/shreeshaktiTrading/services"
              >
                Services
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/shreeshaktiTrading/tracking"
              >
                Tracking
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/shreeshaktiTrading/shipment"
              >
                Shipment
              </Link>
            </Box>
          </Box>

          {open && (
            <m.div>
              <Container
                maxWidth="xl"
                sx={css`
                  @media (min-width: 768px) {
                    display: none;
                  }
                `}
              >
                <Stack direction="column" spacing={1}>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shreeshaktiTrading"
                    onClick={() => setOpen(!open)}
                  >
                    Home
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shreeshaktiTrading"
                    onClick={() => setOpen(!open)}
                  >
                    About
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shreeshaktiTrading/services"
                    onClick={() => setOpen(!open)}
                  >
                    Services
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shreeshaktiTrading/tracking"
                    onClick={() => setOpen(!open)}
                  >
                    Tracking
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shreeshaktiTrading/shipment"
                    onClick={() => setOpen(!open)}
                  >
                    Shipment
                  </Link>
                </Stack>
              </Container>
            </m.div>
          )}
        </Container>
      </Box>
    </Box>
  );
}
