import React from 'react';
import dragonImage from '../assets/dragon.png';

const Dragon = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Aura layer */}
      <div className="absolute w-[1000px] h-[1000px] rounded-full animate-spin-slow z-0 bg-aura" />
      
      {/* Dragon Image */}
      <img
  src={dragonImage}
  alt="Dragon"
  className="relative z-10 w-[1000px] max-w-full object-contain"
/>

    </div>
  );
};

export default Dragon;
