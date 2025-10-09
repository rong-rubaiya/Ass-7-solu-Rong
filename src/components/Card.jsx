import React, { use, useState } from 'react';
import CardSection from './CardSection';
import TaskStatus from './TaskStatus';

const Card = ({ cardPromis, selectedCard, setselectedCard, cards, setinProgress, setresolved }) => {
  
  const cardData = use(cardPromis);
  const [cardList, setCards] = useState(cardData || []);

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      {/* Card Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-4/5">
        {cardList.map((card) => (
          <CardSection
            key={card.id} // ✅ Unique key for each card
            cards={card}
            selectedCard={selectedCard}
            setselectedCard={setselectedCard}
            setinProgress={setinProgress}
            cardList={cardList}
            setCards={setCards}
          />
        ))}
      </div>

      {/* Task Status */}
      <div>
        <h1 className="text-2xl font-semibold flex sm:hidden justify-center pr-20">
          Task Status
        </h1>
        <TaskStatus
          selectedCard={selectedCard}
          setselectedCard={setselectedCard}
          cards={cards}
          setresolved={setresolved}
          setinProgress={setinProgress}
        />
      </div>
    </div>
  );
};

export default Card;
