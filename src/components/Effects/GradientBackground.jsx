import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #0000ff, #add8e6);
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


const GradientBackground = ({ children }) => <StyledDiv>{children}</StyledDiv>;

export default GradientBackground;


