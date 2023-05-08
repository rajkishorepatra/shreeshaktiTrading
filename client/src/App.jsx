import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

// import components
import PageFooter from "./components/footer";
export default function App() {
  return (
    <>
      <Box
        sx={{ flexGrow: 1, justifyContent: "space-between", display: "flex" }}
      >
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              sx={{
                fontFamily: "Bruno Ace SC, cursive",
                fontSize: "1.5rem",
                fontWeight: "bolderx ",
              }}
            >
              RUCHI
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="about content" style={{ background: "white" }}></div>
      <div className="leadership content" style={{ background: "black" }}></div>
      <div
        className="key-services content"
        style={{ background: "yellow" }}
      ></div>
      <div className="presence content" style={{ background: "balck" }}></div>
      <div className="infra content" style={{ background: "grey" }}></div>

      <PageFooter />
    </>
  );
}
