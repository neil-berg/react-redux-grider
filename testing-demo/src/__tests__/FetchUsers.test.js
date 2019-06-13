import React, { useState } from 'react';
import {
  render,
  container,
  fireEvent,
  cleanup,
  act,
  waitForElement
} from '@testing-library/react';
import 'jest-dom/extend-expect';
import axiosMock from 'axios';

import FetchUsers from '../components/FetchUsers';

afterEach(cleanup);

// Suppress artificial warning from React-DOM regarding "act()":
// https://github.com/testing-library/react-testing-library/issues/281
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

describe('FetchUsers', () => {
  // test('Loading... text when loading data', () => {
  //   act(() => {
  //     const { getByTestId } = render(<FetchUsers userId="1" />);
  //     expect(getByTestId('loading').textContent).toBe('Loading...');
  //   });
  // });

  test('Fetches users from axois call', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        name: 'Neil',
        username: 'neilberg',
        email: 'neil@neil.berg'
      }
    });

    const userID = '1';
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;

    const { getByText, getByTestId, container } = render(
      <FetchUsers userID={userID} />
    );

    expect(getByTestId('loading').textContent).toBe('Loading...');

    const resolvedDiv = await waitForElement(() => getByTestId('user'));
    expect(resolvedDiv.firstChild.textContent).toBe('Neil');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
});
