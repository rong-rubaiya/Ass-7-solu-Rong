import React, { use, useState } from 'react';

import CardSection from './CardSection';
import TaskStatus from './TaskStatus';

const Card = ({cardPromis,selectedCard,setselectedCard,cards,setinProgress,setresolved}) => {
  const cardData = use(cardPromis)
  console.log(cardData);
   const [cardList, setCards] = useState(cardData || []);
  return (
   <>
    <div className='flex flex-col sm:flex-row gap-5'>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-6  w-full sm:w-4/5'>
    {
     cardList.map(cards=>
        <CardSection  cards={cards} selectedCard={selectedCard} setselectedCard={setselectedCard} setinProgress={setinProgress} cardList={cardList} setCards={setCards}></CardSection>
      )
    }
    
    </div>
    <div >
       <h1 className=" text-2xl font-semibold flex sm:hidden justify-center pr-20 ">Task Status</h1>
      <TaskStatus  selectedCard={selectedCard} setselectedCard={setselectedCard} cards={cards} setresolved={setresolved} setinProgress={setinProgress}></TaskStatus>
    
    </div>
    </div>
   </>
  );
};

export default Card;