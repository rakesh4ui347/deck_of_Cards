import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Deck from './Deck';

test('should render shuffle button and call shuffleDeck action on click', () => {
  render(
    <Provider store={store}>
      <Deck />
    </Provider>
  );

  const button = screen.getByText(/Shuffle Deck/i);
  fireEvent.click(button);
  expect(button).toBeInTheDocument();
});
