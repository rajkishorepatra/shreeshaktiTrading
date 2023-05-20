import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import "../App.css";
// import { Link } from 'react-router-dom';

export default function Navbar() {

    return (

      <>
      <Box sx={{ flexGrow: 1, justifyContent: "space-between", display:"flex"}}>
        <AppBar position="static" sx={{width: '100vw', background:'white', boxShadow:0}}>
          <Toolbar>
            <Button color="inherit" sx={{fontFamily: 'Arizonia, cursive', fontSize: '2rem', fontWeight:"bolderx", }}><span style={{fontSize: '5rem', color:"#4d4dff", fontWeight:"bolder"}}>R</span>UCHI</Button>
            <div className="details">
            <Button color="inherit">
              Home
            </Button>
            <Button color="inherit">Tracking</Button>
              {/* <Link to="/Services"> */}
            <Button color="inherit">
              Services
              </Button>
              {/* </Link> */}
            <Button color="inherit">Admin</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      </>
    )
}