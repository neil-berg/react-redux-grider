import React from 'react';
import { render, container, fireEvent, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Counter from '../components/Counter';

afterEach(cleanup);

describe('Counter', () => {
  test('Increment button renders', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const incrementButton = getByText('Increment');
    expect(incrementButton).toBeInTheDocument();
  });

  test('Button clicks update counter', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const leftClick = { button: 0 };
    const incrementButton = getByText(/increment/i);
    const decrementButton = getByText(/decrement/i);
    const spanCount = getByTestId('span-count');

    // Act
    fireEvent.click(incrementButton, leftClick);
    fireEvent.click(incrementButton, leftClick);
    fireEvent.click(incrementButton, leftClick);
    fireEvent.click(decrementButton, leftClick);

    // Assert
    expect(spanCount.textContent).toBe(`The count is 2`);
  });
});
