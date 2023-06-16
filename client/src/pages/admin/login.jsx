import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Heading from "../../components/pageHeader";

export default function AdminLogin() {
  const { currentUser, logIn } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState({ loading: false, error: null });
  const [loginStatus, setLoginStatus] = useState(location?.state?.isAdmin);

  useEffect(() => {
    setLoginStatus(location?.state?.isAdmin);
  }, [location]);

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard", {
        state: { isAdmin: true },
      });
    }
    document.title = "Admin Login | Shree Shakti Express";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, error: null });
    try {
      await logIn(email, password);
      setFormState({ loading: false, error: null });
      navigate("/admin/dashboard", {
        state: { isAdmin: true },
      });
    } catch (err) {
      let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
      console.log(errmsg);
      setFormState({ loading: false, error: errmsg });
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

    body: css`
      background-color: #eaeaea;
    `,
  };

  return (
    <>
      <Box sx={{ background: "#EAEAEA" }}>
        <Heading title="ADMIN LOGIN" back="<< BACK TO HOMEPAGE" />
        <Container maxWidth="xl" sx={styles.container}>
          <Typography variant="h5" component="h1" align="center">
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
                required
                disabled={formState.loading}
              />
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
                disabled={formState.loading}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={formState.loading}
              >
                {formState.loading ? "logging you in" : "Login"}
              </Button>
            </form>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "320px" },
              padding: "2rem 1rem",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
          >
            <Snackbar
              open={!loginStatus}
              autoHideDuration={8000}
              onClose={() => setLoginStatus(false)}
              message={"You were logged out!"}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setLoginStatus(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
