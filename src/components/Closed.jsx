import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for spinning animation
const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Box = styled.div`
  width: 60vmin;
  height: 50vmin;
  display: grid;
  place-content: center;
  color: white;
  text-shadow: 0 1px 0 #000;
  border: solid 5px transparent;
  border-radius: 2em;
  animation: ${spin} 3s linear infinite; // Animation continuous loop
  
  background: conic-gradient(
    from ${(props) => props.angle}deg, 
    #213, 
    #112 5%, 
    #112 60%, 
    #213 95%) padding-box,
    conic-gradient(
      from ${(props) => props.angle}deg, 
      transparent 25%, 
      #08f, 
      #f03 99%, 
      transparent) border-box,
    conic-gradient(
      from ${(props) => props.angle}deg, 
      #213, 
      #112 5%, 
      #112 60%, 
      #213 95%) border-box;
  
  background-position: center center;
`;

const BoxWrapper = () => {
  const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360); // Update angle continuously
    }, 30); // Speed of rotation
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <Box angle={angle}>
      <div className="content">Registration Closed</div>
    </Box>
  );
};

export default BoxWrapper;
