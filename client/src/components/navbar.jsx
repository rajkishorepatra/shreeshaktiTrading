import { css } from "@emotion/react";
import { m } from "framer-motion";

import { Menu as MenuIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";
import Stack from "@mui/material/Stack";


import { useState } from "react";
import ShreeShaktiLogo from "../assets/shreeshakti-logo.png";
import { Typography } from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const styles = {
    logo: css`
      height: 100%;
      display: flex;
      text-decoration: none;
      img {
        max-width: 3rem;
        object-fit: cover;
      }
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
        justify-content: center;
      }
    `,

    link: css`
      color: #094559;
      font-size: 1.2rem;
      text-decoration: none;
      margin: 0 1rem;
      &:hover {
        text-decoration: underline;
        color: #9d8f33;
      }
    `,

    main: css`
      font-family: "bebas neue", sans-serif;
      background: #eaeaea;
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
            <Link component={RLink} to="/" sx={styles.logo}>
              <Box sx={css`display: flex; align-items: center; `}>
                <img src={ShreeShaktiLogo} alt="Shree Shakti Logo" />
                <Typography
                  variant="h5"
                  sx={{
                    textDecoration:'none',
                    fontFamily: 'bebas neue', 
                    paddingLeft: '.5rem', 
                  }}
                >
                  ShreeShaktiTrading
                </Typography>
              </Box>
            </Link>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={styles.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Box sx={styles.links}>
              <Link sx={styles.link} component={RLink} to="/">
                Home
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/services"
              >
                Services
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/tracking"
              >
                Tracking
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/shipment"
              >
                Shipment
              </Link>
              <Link
                sx={styles.link}
                component={RLink}
                to="/admin/login"
              >
                Admin
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
                  <Link></Link>
                <Link
                    sx={styles.link}
                    component={RLink}
                    to="/"
                    onClick={() => setOpen(!open)}
                  >
                    Home
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/services"
                    onClick={() => setOpen(!open)}
                  >
                    Services
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/tracking"
                    onClick={() => setOpen(!open)}
                  >
                    Tracking
                  </Link>
                  <Link
                    sx={styles.link}
                    component={RLink}
                    to="/shipment"
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
