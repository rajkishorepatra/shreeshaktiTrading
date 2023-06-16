import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";

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

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard", {
        state: { isAdmin: true, from: location.pathname },
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
        state: { isAdmin: true, from: location.pathname },
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
  };

  return (
    <Box>
      <Heading title="Admin Login" />
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
          <Collapse in={!location?.state?.isAdmin ? true : false}>
            <Alert severity="info">
              {location?.state?.from === "/admin/dashboard"
                ? "you were logged out, please login again"
                : "you need to login to access dashboard page"}
            </Alert>
          </Collapse>

          <Collapse in={formState.error ? true : false}>
            <Alert severity="error">{formState.error}</Alert>
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
}
