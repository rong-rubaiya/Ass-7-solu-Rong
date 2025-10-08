import React from 'react';

import vector1 from "../assets/vector1.png"

const Banner = ({inProgress,selectedCard }) => {
  return (
    
  <div className="mx-auto max-w-[1400px] block sm:flex justify-between gap-0 sm:gap-6 px-4 py-20">
  <div className="rounded-lg flex-1 h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative flex mb-3 sm:mb-0">
    <div className="w-1/2 h-full bg-[url('./assets/vector1.png')] bg-cover bg-center"></div>
    <div className="w-1/2 h-full  bg-cover bg-center scale-x-[-1] "style={{ backgroundImage: `url(${vector1})` }}></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
      <p className="w-[300px] text-[28px] text-center font-medium">In-progress</p>
      <h1 className="text-6xl font-semibold">{inProgress}</h1>
    </div>
  </div>

  <div className="rounded-lg flex-1 h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A] relative flex">
    <div className="w-1/2 h-full bg-[url('./assets/vector1.png')] bg-cover bg-center"></div>
    <div className="w-1/2 h-full bg-[url('./assets/vector1.png')] bg-cover bg-center scale-x-[-1]"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
      <p className="w-[300px] text-[28px] text-center font-medium">Resolved</p>
      <h1 className="text-6xl font-semibold">0</h1>
    </div>
  </div>
</div>
  );
};

export default Banner;