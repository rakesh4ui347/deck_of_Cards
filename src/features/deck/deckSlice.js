import { createSlice } from '@reduxjs/toolkit';
import { shuffle } from 'lodash';

const initialState = {
  deck: [],
  drawnCards: [],
};

const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
const values = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
  'Ace',
];

const createDeck = () => {
  const deck = [];
  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
};

const deckSlice = createSlice({
  name: 'deck',
  initialState: {
    deck: createDeck(),
    drawnCards: [],
  },
  reducers: {
    shuffleDeck: (state) => {
      state.deck = shuffle(state.deck);
    },
    drawCards: (state, action) => {
      const num = action.payload;
      state.drawnCards = state.deck.slice(0, num);
      state.deck = state.deck.slice(num);
    },
    sortDrawnCards: (state) => {
      const sortOrder = {
        Clubs: 0,
        Spades: 1,
        Hearts: 2,
        Diamonds: 3,
      };
      const valueOrder = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        Jack: 11,
        Queen: 12,
        King: 13,
        Ace: 14,
      };
      state.drawnCards.sort((a, b) => {
        if (sortOrder[a.suit] === sortOrder[b.suit]) {
          return valueOrder[a.value] - valueOrder[b.value];
        }
        return sortOrder[a.suit] - sortOrder[b.suit];
      });
    },
  },
});

export const { shuffleDeck, drawCards, sortDrawnCards } = deckSlice.actions;
export default deckSlice.reducer;
