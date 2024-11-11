import React, { useEffect } from 'react';

// Utility functions for creating stars
const createStars = (numStars, width, height) => {
  return Array.from({ length: numStars }, () => ({
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  }));
};

// StarField Component
const StarField = () => {
  const starFieldWidth = 2560;
  const starFieldHeight = 2560;
  const numStarOneStars = 1000; // Reduced count
  const numStarTwoStars = 400;
  const numStarThreeStars = 100;
  const numShootingStars = 5;

  const starsOne = createStars(numStarOneStars, starFieldWidth, starFieldHeight);
  const starsTwo = createStars(numStarTwoStars, starFieldWidth, starFieldHeight);
  const starsThree = createStars(numStarThreeStars, starFieldWidth, starFieldHeight);
  const shootingStars = createStars(numShootingStars, starFieldWidth, starFieldHeight);

  const starStyle = {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#FFF',
    animation: 'animStar linear infinite',
    willChange: 'transform, opacity',
  };

  const shootingStarStyle = {
    position: 'absolute',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    background: 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))',
    animation: 'animShootingStar linear infinite',
    willChange: 'transform, opacity',
  };

  return (
    <div className="container h-screen w-full relative bg-gradient-to-b from-[#020107] to-[#201b46]">
      <div className="text-white absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
        {/* Main Content */}
      </div>

      {/* Star Layers */}
      <div className="stars">
        {starsOne.map((star, index) => (
          <div
            key={`star-one-${index}`}
            style={{
              ...starStyle,
              width: '1px',
              height: '1px',
              top: star.y,
              left: star.x,
              animationDuration: '100s',
            }}
          />
        ))}
      </div>

      <div className="stars1">
        {starsTwo.map((star, index) => (
          <div
            key={`star-two-${index}`}
            style={{
              ...starStyle,
              width: '2px',
              height: '2px',
              top: star.y,
              left: star.x,
              animationDuration: '125s',
            }}
          />
        ))}
      </div>

      <div className="stars2">
        {starsThree.map((star, index) => (
          <div
            key={`star-three-${index}`}
            style={{
              ...starStyle,
              width: '3px',
              height: '3px',
              top: star.y,
              left: star.x,
              animationDuration: '175s',
            }}
          />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="shooting-stars">
        {shootingStars.map((star, index) => (
          <div
            key={`shooting-star-${index}`}
            style={{
              ...shootingStarStyle,
              width: '5px',
              height: '80px',
              top: star.y,
              left: star.x,
              animationDuration: '10s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarField;
