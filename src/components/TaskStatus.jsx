import React from 'react';

const TaskStatus = ({ selectedCard }) => {
  console.log(selectedCard);

  return (
    <>
    <div className='p-2 sm:p-3 w-4/5 sm:w-auto mx-auto sm:mx-0  rounded-md bg-white '>
      {selectedCard.length > 0 ? (
        selectedCard.map((card, index) => (
          <div key={index} className='mb-3 mt-3 p-4 shadow-xl rounded-sm bg-[#F5F5F5]'>
            <h1 className='text-center sm:text-start font-semibold'>{card.title}</h1>
            <button className='w-full py-2 mt-2 bg-[#02A53B] rounded-md text-white cursor-pointer'>
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500'>No tasks selected</p>
      )}
    </div>
    <div className='mt-3'>
      <h1 className='text-2xl font-bold text-center'>Resolved Task</h1>
      <div className='bg-white p-3 rounded-md mt-3 '>
       <div className='bg-green-100 py-3 px-4 sm:px-1 rounded-md text-center sm:text-0'>
         <h1 className='text-xl font-semibold'>Heading</h1>
        <div className='block sm:flex justify-between py-3'>
          <p className='text-green-400'>✔️Completed</p>
          <p>Click to Remove</p>
        </div>
       </div>
      </div>
    </div>
</>
    
  );
};

export default TaskStatus;
