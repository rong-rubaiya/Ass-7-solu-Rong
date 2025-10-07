import React from 'react';

const TicektandTask = () => {
  return (
   <div className="flex justify-center sm:justify-between ">
    <h1 className="text-2xl font-semibold">Customer Tickets</h1>
    <h1 className=" text-2xl font-semibold hidden sm:flex items-start  pr-20">Task Status</h1>
  </div>
  );
};

export default TicektandTask;