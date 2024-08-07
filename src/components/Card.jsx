import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="value">{card.value}</div>
      <div className="suit">{card.suit}</div>
    </div>
  );
};

export default Card;
