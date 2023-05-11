import * as React from 'react';
import "./App.css";
import Navbar from './components/navbar';


export default function ButtonAppBar() {
  return (
    <>
    <Navbar />
    <div className="main content"></div>
    <div className="brands content" style={{background: 'black'}}></div>
    <div className="services content" style={{background: 'yellow'}}></div>
    <div className="counter content" style={{background: 'balck'}}></div>
    <div className="parallax content" style={{background: 'grey'}}></div>
    <div className="why content" style={{background: 'white'}}></div>
    <div className="services content" style={{background: 'grey'}}></div>
    <div className="quote content" style={{background: 'white'}}></div>
    <div className="footer content" style={{background: 'grey'}}></div>

    </>
    
  );
}