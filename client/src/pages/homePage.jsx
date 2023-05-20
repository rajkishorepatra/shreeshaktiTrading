import * as React from 'react';
import "../App.css";
import Navbar from '../components/navbar';
import Quote from '../components/quote';
import Why from '../components/why';
import Services from '../components/services';
import { Box } from '@mui/material';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Box className="main content" >
    </Box>
    <div className="brands content" ></div>
    <div className="services content"></div>
    <Services />
    <div className="parallax content"></div>
    <Why />
    <Quote />
    <Footer />

    </>
    
  ); 
}