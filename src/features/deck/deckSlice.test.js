import deckReducer, {
  shuffleDeck,
  drawCards,
  sortDrawnCards,
} from './deckSlice';

describe('deckSlice', () => {
  const initialState = {
    deck: [
      { suit: 'Clubs', value: '2' },
      { suit: 'Hearts', value: '3' },
      { suit: 'Diamonds', value: 'Ace' },
      { suit: 'Spades', value: 'King' },
    ],
    drawnCards: [],
  };

  it('should shuffle the deck', () => {
    const state = deckReducer(initialState, shuffleDeck());
    expect(state.deck).not.toEqual(initialState.deck); // Deck should be shuffled
  });

  it('should draw cards from the deck', () => {
    const state = deckReducer(initialState, drawCards(2));
    expect(state.drawnCards).toHaveLength(2);
    expect(state.deck).toHaveLength(2); // 2 cards should be removed from the deck
  });

  it('should sort drawn cards', () => {
    const stateWithDrawnCards = {
      ...initialState,
      drawnCards: [
        { suit: 'Hearts', value: '3' },
        { suit: 'Clubs', value: '2' },
        { suit: 'Diamonds', value: 'Ace' },
      ],
    };
    const state = deckReducer(stateWithDrawnCards, sortDrawnCards());
    expect(state.drawnCards[0].suit).toBe('Clubs');
    expect(state.drawnCards[1].suit).toBe('Hearts');
    expect(state.drawnCards[2].suit).toBe('Diamonds');
  });
});
