import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import { css } from "@emotion/react";

import { UserAuth } from "../../contexts/authContext";
import { useEffect, useState } from "react";

// components
import Heading from "../../components/pageHeader";
import { Stack } from "@mui/material";

export default function AdminDashboard() {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const styles = {
    OperationBtn: css`
      width: 100%;
      max-width: 320px;
      padding: 1.5rem;
    `,
    OperationBox: css`
      justify-content: center;
      align-self: center;
    `,
  };
  return (
    <Box>
      <Heading title="Admin Dashboard" />
      <Container maxWidth="xl">
        <Box sx={{ padding: "2rem 0" }}>
          <Button
            variant="contained"
            onClick={() => {
              logOut();
              navigate("/shreeshaktiTrading/admin/login");
            }}
          >
            Logout{" "}
          </Button>
        </Box>

        <Stack spacing={2} direction="row" sx={styles.OperationBox}>
          <Button sx={styles.OperationBtn} variant="contained">
            Add New Client
          </Button>
          <Button sx={styles.OperationBtn} variant="contained">
            View All Clients
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
