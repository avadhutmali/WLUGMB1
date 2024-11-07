import React, { useEffect } from 'react';

function Page1() {
  useEffect(() => {
    const stars = document.querySelector('.stars');
    const moon = document.querySelector('.moon');
    const mountains = document.querySelector('.mountains');
    const frontTrees = document.querySelector('.trees');
    const page = document.querySelector('.page')
    const text = document.querySelector('.text');
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      let value = window.scrollY;
      const moonMaxTranslateY = 1000; 

      if (stars) stars.style.transform = `translateX(${value * 0.25}px)`;  
      if (moon) moon.style.transform = `translateY(${Math.min(value * 1.05, moonMaxTranslateY)}px)`;      
      if (mountains) mountains.style.transform = `translateY(${value * 0.5}px)`;  
      if (frontTrees) frontTrees.style.transform = `translateY(${value * 0.15}px)`;  
      if(page )page.style.transform = `translateY(${value * 0.15}px)`; 
      if(footer )footer.style.transform = `translateY(${value * 0.15}px)`; 
      if (text) {
        text.style.transform = `translateY(${value * 0.2}px) translateX(${value * 1}px)`;  // Adjust the value for desired effect
      } 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: 'linear-gradient(#2b1055, #7597de)', 
    backgroundAttachment: 'fixed', 
  };

  return (
    <>
    <div style={gradientStyle} className="md:h-[140vh] h-[35vh]  relative z-0 "> 
      <img className='md:w-[30vh] w-[10vh] absolute right-5 top-3' src="wlug.png" alt="" />
      <img className="md:w-full absolute stars z-10 overflow-hidden" src="stars.png" alt="Stars" />
      <img className="md:w-full absolute mix-blend-screen moon z-20" src="moon.png" alt="Moon" />
      <img className="md:w-full absolute mountains z-30" src="mountains.svg" alt="Mountains" />
      <div className="text text-white font-bold text-[3vh] md:text-[10vh] absolute md:bottom-52 bottom-24 left-5 z-[35]">
          WLUG
        </div>
      <img className="w-full absolute trees z-40" src="front_trees.svg" alt="Front Trees" />
    </div>
  
    
  </>
  
  );
}

export default Page1;
