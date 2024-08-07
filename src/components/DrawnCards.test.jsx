import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import DrawnCards from './DrawnCards';

test('should render Draw 5 Cards and Sort Drawn Cards buttons', () => {
  render(
    <Provider store={store}>
      <DrawnCards />
    </Provider>
  );

  const drawButton = screen.getByText(/Draw 5 Cards/i);
  const sortButton = screen.getByText(/Sort Drawn Cards/i);

  expect(drawButton).toBeInTheDocument();
  expect(sortButton).toBeInTheDocument();
  act(() => {
    fireEvent.click(drawButton);
  });
  expect(drawButton).toBeInTheDocument();
});
