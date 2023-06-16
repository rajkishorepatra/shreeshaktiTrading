import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Heading from "../../components/pageHeader";
import { Link } from "@mui/material";

export default function AdminLogin() {
  const { currentUser, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard");
    }
    document.title = "Admin Login | Shree Shakti Express";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      await logIn(email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
      console.log(errmsg);
    }
  };

  const styles = {
    formBox: css`
      margin: 0 auto;
      max-width: 500px;
      padding: 1rem;
    `,
    container: css`
      padding: 2rem 0;
    `,
  };

  return (
    <>
    <Box>
      <Heading title="ADMIN LOGIN" back="<< BACK TO HOMEPAGE"/>
      <Container maxWidth="xl" sx={styles.container}>
        <Typography variant="h5" component="h1" align="center" sx={{fontFamily:"bebas neue", fontSize:"2rem", color:"#094559"}}>
          Login as Admin
        </Typography>

        <Box sx={styles.formBox}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              // required
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              margin="normal"
              // required
            />
            <Button type="submit" variant="contained" color="primary" sx={css`
              background-color: #094559;

              &:hover{
                background-color: #E62E23;
              }
            `}>
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
    </>
  );
}
