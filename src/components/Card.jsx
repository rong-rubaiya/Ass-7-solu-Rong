import React, { use } from 'react';
import CardSection from './CardSection';

const Card = ({cardPromis}) => {
  const cardData = use(cardPromis)
  console.log(cardData);
  return (
   <>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-6  w-full sm:w-4/5'>
    {
      cardData.map(cards=>
        <CardSection  cards={cards}></CardSection>
      )
    }
    </div>
   </>
  );
};

export default Card;