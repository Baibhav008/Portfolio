
import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';
import GradientBackground from "./components/Effects/GradientBackground";

import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

import Particles from 'react-particles';







const pulseAnimation = keyframes`${pulse}`;

const waveAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Define your styled component for the navbar
const WavyGradientNavbar = styled.nav`
  // Adjust this to change the height of the navbar
  height : 88px;
  width: 100%;
  background: linear-gradient(180deg, #0077ff, #00e6ff); // Brighter blue colors
  background-size: 200% 200%;
  animation: ${waveAnimation} 3s linear infinite; // Apply the wave animation
`;



const App =()=>{
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
   
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

      <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}
    >
      
    </div>
    
      <Navbar/>
    
        <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
