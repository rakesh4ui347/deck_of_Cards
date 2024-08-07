import React from 'react';
import Deck from './components/Deck';
import DrawnCards from './components/DrawnCards';

const App = () => {
  return (
    <div>
      <h1>Deck of Cards</h1>
      <Deck />
      <DrawnCards />
    </div>
  );
};

export default App;
