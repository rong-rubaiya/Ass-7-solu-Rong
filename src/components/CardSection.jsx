import React from 'react';
import { toast } from "react-toastify";

const CardSection = ({ cards,  setselectedCard,setinProgress,setCards }) => {
  const statusDynamic =
    cards.status.toLowerCase() === "open"
      ? "bg-[#B9F8CF] text-[#0B5E06]"
      : "bg-[#F8F3B9] text-[#9C7700]";

  const priorityDynamic =
    cards.priority.toLowerCase() === "high"
      ? "text-green-600"
      : cards.priority.toLowerCase() === "critical"
      ? "text-red-600"
      : cards.priority.toLowerCase() === "low"
      ? "text-blue-600"
      : "text-yellow-600";

  return (
    <section
      onClick={() => {
       setCards(prev => prev.filter(c => String(c.id) !== String(cards.id)));

        setselectedCard((prev) => [...prev, cards]);

        setinProgress((prev) => prev + 1);

       toast("✅In-progress!")

        
      }}
      className="p-[16px] mt-3 bg-white shadow-sm rounded-md mx-4 sm:mx-0 cursor-pointer w-full  "
    >
      <div className="flex items-center justify-between ">
        <h1 className="text-[18px] text-black font-bold">{cards.title}</h1>
        <div className={`px-3 py-1 rounded-3xl ${statusDynamic}`}>
          <i className="fa-solid fa-circle"></i>
          <span className="pl-2 font-medium text-[16px]">{cards.status}</span>
        </div>
      </div>
      <p className="my-3 text-gray-500">{cards.description}</p>
      <div className="block sm:flex justify-between gap-2">
        <div>
          <span className="text-gray-500 text-xs pr-3">{cards.code}</span>
          <span className={`font- text-xs font-semibold ${priorityDynamic}`}>
            {cards.priority}
          </span>
        </div>
        <div className="pr-16 text-gray-500 text-[14px]">
          <span className="pr-3">{cards.customer}</span>
          <i className="fa-regular fa-calendar">{cards.createdAt}</i>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
