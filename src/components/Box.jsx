import React, { useEffect, useState } from 'react';

const Box = () => {
  const [borderAngle, setBorderAngle] = useState(0);

  // Set interval to animate the spinning border
  useEffect(() => {
    const interval = setInterval(() => {
      setBorderAngle((prev) => (prev + 1) % 360);
    }, 30); // This controls the speed of rotation
    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const boxStyle = {
    width: '60vmin',
    height: '50vmin',
    display: 'grid',
    placeContent: 'center',
    color: 'white',
    textShadow: '0 1px 0 #000',
    border: 'solid 5px transparent',
    borderRadius: '2em',
    animation: 'bg-spin 3s linear infinite', // Animation continuous loop
    background: `conic-gradient(from ${borderAngle}deg, #213, #112 5%, #112 60%, #213 95%) padding-box,
                conic-gradient(from ${borderAngle}deg, transparent 25%, #08f, #f03 99%, transparent) border-box,
                conic-gradient(from ${borderAngle}deg, #213, #112 5%, #112 60%, #213 95%) border-box`,
    backgroundPosition: 'center center',
  };

  return (
    <div style={boxStyle}>
      <div className="content">Registration Closed</div>
    </div>
  );
};

export default Box;
