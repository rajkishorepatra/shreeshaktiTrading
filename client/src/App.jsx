import * as React from 'react';
import "./App.css";
import Navbar from './components/navbar';
import Quote from './components/quote';
import Why from './components/why';
import Services from './components/services';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const boxStyle = {
  padding: "10vh 0 0 5vw",
};

const stackView = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100vw',
};


export default function ButtonAppBar() {
  return (
    <>
    <Navbar />
    <Box className="main content" >
      {/* <Box sx={boxStyle}>
        <h1>OUR SERVICES</h1>
      <Stack direction="row" spacing={2} sx={stackView}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
      </Box> */}
    </Box>
    <div className="brands content" ></div>
    <div className="services content"></div>
    <Services />
    <div className="parallax content"></div>
    <Why />
    <Quote />
    <div className="footer content"></div>

    </>
    
  );
}