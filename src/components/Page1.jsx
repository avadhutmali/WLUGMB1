import React, { useEffect } from 'react';

function Page1() {
  useEffect(() => {
    const stars = document.querySelector('.stars');
    const moon = document.querySelector('.moon');
    const mountains = document.querySelector('.mountains');
    const frontTrees = document.querySelector('.trees');
    const text = document.querySelector('.text');
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      let value = window.scrollY;
      const moonMaxTranslateY = 1000; 

      if (stars) stars.style.transform = `translateX(${value * 0.25}px)`;  
      if (moon) moon.style.transform = `translateY(${Math.min(value * 0.8, moonMaxTranslateY)}px)`; // Reduced translation for smoother effect  
      if (mountains) mountains.style.transform = `translateY(${value * 0.3}px)`; // Reduced intensity  
      if (frontTrees) frontTrees.style.transform = `translateY(${value * 0.1}px)`; // Reduced intensity  
      if (text) text.style.transform = `translateY(${value * 0.1}px) translateX(${value * 1.5}px)`;  
    };

    const optimizedScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener('scroll', optimizedScroll);

    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(#2b1055, #7597de)', 
    backgroundAttachment: 'fixed', 
  };

  return (
    <>
      <div style={gradientStyle} className="md:h-[120vh] h-[32vh] relative z-0 overflow-hidden"> 
        <a href="https://www.wcewlug.org/" className="z-[600]">
          <img className="md:w-[20vh] w-[10vh] absolute right-5 top-3 z-[600]" src="wlug.png" alt="" />
        </a>
        <img className="md:w-full md:-top-[20vh]  absolute stars z-10" src="stars.png" alt="Stars" />
        <img className="md:w-full md:-top-[10vh]  absolute mix-blend-screen moon z-20" src="moon.png" alt="Moon" />
        <img className="md:w-full -top-[4vh] md:-top-[20vh] md:left-40 absolute mountains z-30" src="mountains.svg" alt="Mountains" />
        <div className="text    text-white font-bold text-[3vh] md:text-[10vh] absolute md:bottom-52 bottom-20 left-5 z-[35]">
        WLUG
        </div>
        <img className="w-full -top-[1vh] md:-top-[22vh]   absolute trees z-40" src="front_trees.svg" alt="Front Trees" />
      </div>
    </>
  );
}

export default Page1;
