import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drawCards, sortDrawnCards } from '../features/deck/deckSlice';
import Card from './Card';

const DrawnCards = () => {
  const drawnCards = useSelector((state) => state.deck.drawnCards);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <button onClick={() => dispatch(drawCards(5))}>Draw 5 Cards</button>
      <button onClick={() => dispatch(sortDrawnCards())}>
        Sort Drawn Cards
      </button>
      <div className="cards">
        {drawnCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default DrawnCards;
