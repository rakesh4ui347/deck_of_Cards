import React from 'react';
import { useDispatch } from 'react-redux';
import { shuffleDeck } from '../features/deck/deckSlice';

const Deck = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button onClick={() => dispatch(shuffleDeck())}>Shuffle Deck</button>
    </div>
  );
};

export default Deck;
