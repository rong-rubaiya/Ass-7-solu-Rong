import React, { useState } from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ selectedCard = [], setselectedCard, setresolved, setinProgress }) => {
  const [resolvedCard, setResolvedCard] = useState([]);

  const handleComplete = (card) => {
    // Show toast
    toast("✅ Complete!");

    // Remove from In-Progress
    setselectedCard(prev => prev.filter(c => c.id !== card.id));

    // Add to Resolved
    setResolvedCard(prev => [...prev, card]);

    // Increment resolved counter for Banner
    setresolved(prev => prev + 1);

    // Decrement inProgress counter
    setinProgress(prev => prev - 1);
  };

  const handleRemoveResolved = (card) => {
    setResolvedCard(prev => prev.filter(c => c.id !== card.id));
    setresolved(prev => prev - 1);
  };

  return (
    <>
      {/* In-Progress Tasks */}
      <div className="p-2 sm:p-3 w-4/5 sm:w-auto mx-auto sm:mx-0 rounded-md bg-white">
        {selectedCard.length > 0 ? (
          selectedCard.map(card => (
            <div key={card.id} className="mb-3 mt-3 p-4 shadow-xl rounded-sm bg-[#F5F5F5]">
              <h1 className="text-center sm:text-start font-semibold">{card.title}</h1>
              <button
                onClick={() => handleComplete(card)}
                className="w-full py-2 mt-2 bg-[#02A53B] rounded-md text-white cursor-pointer"
              >
                Complete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks selected</p>
        )}
      </div>

      {/* Resolved Tasks */}
      <div className="mt-3">
        <h1 className="text-2xl font-bold text-center">Resolved Task</h1>
        <div className="bg-white p-3 rounded-md mt-3">
          {resolvedCard.length > 0 ? (
            resolvedCard.map(card => (
              <div
                key={card.id}
                className="bg-green-100 py-3 px-4 sm:px-1 rounded-md text-center sm:text-0 mb-4 shadow-2xl"
              >
                <h1 className="text-xl font-semibold">{card.title}</h1>
                <div className="block sm:flex justify-between py-3 gap-4">
                  <p className="text-green-400">✔️ Completed</p>
                  <p
                    className="text-gray-500 cursor-pointer text-sm"
                    onClick={() => handleRemoveResolved(card)}
                  >
                    Click to Remove
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No resolved tasks</p>
          )}
        </div>
      </div>
    </>
  );
};

export default TaskStatus;
