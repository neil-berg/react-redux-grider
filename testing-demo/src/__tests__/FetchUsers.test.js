import React from 'react';
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

describe('FetchUsers', () => {
  test('Loading... text when loading data', () => {
    act(() => {
      const { getByTestId } = render(<FetchUsers userId="1" />);
      expect(getByTestId('loading').textContent).toBe('Loading...');
    });
  });

  test('Fetches users from axois call', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        name: 'Neil',
        username: 'neilberg',
        email: 'neil@neil.berg'
      }
    });

    const userID = '1';
    const { getByText, getByTestId, container } = render(
      <FetchUsers userID={userID} />
    );

    const resolvedDiv = await waitForElement(() => getByTestId('user'));

    expect(resolvedDiv.firstChild.textContent).toBe('Neil');
  });
});
