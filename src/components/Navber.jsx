import React from 'react';

const Navber = () => {
  return (
   <div className='  bg-white text-center  shadow-md border-b-1 border-b-gray-200'>
    <div className='block sm:flex justify-between max-w-[1400px] mx-auto py-7  '>
      <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
    <div className='flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-5 '>
      <ul className='flex flex-col sm:flex-row gap-1.5 sm:gap-5 justify-center '>
        <li>Home</li>
        <li>Changelog</li>
        <li>Blog</li>
        <li>Download</li>
        <li>Contact</li>
      </ul>
       <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-5 sm:py-2 w-3/5 sm:w-full rounded-md text-white'>+ New Ticket</div>
    </div>
   
    </div>
   </div>
  );
};

export default Navber;