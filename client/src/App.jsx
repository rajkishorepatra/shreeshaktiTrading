import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./App.css";


export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1, justifyContent: "space-between", display:"flex"}}>
      <AppBar position="static" sx={{width: '100vw', }}>
        <Toolbar>
          <Button color="inherit" sx={{fontFamily: "Bruno Ace SC, cursive", fontSize: '1.5rem', fontWeight:"bolderx "}}>RUCHI</Button>
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
    <div className="about content" style={{background: 'red'}}></div>
    <div className="leadership content" style={{background: 'green'}}></div>
    <div className="key-services content" style={{background: 'black'}}></div>
    <div className="presence content" style={{background: 'yellow'}}></div>
    <div className="infra content" style={{background: 'orange'}}></div>

    </>
    
  );
}