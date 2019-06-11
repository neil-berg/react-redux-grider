import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';

import CommentFeed from '../components/CommentFeed';

afterEach(cleanup);

test('Comment feed exists', () => {
  const fakeComments = [
    { id: 1, name: 'Neil', text: 'blah blah' },
    { id: 2, name: 'Mary', text: 'la di da' }
  ];
  const { container } = render(<CommentFeed comments={fakeComments} />);
  expect(container).toBeInTheDocument();
});

test('Comment feed header title', () => {
  const fakeComments = [
    { id: 1, name: 'Neil', text: 'blah blah' },
    { id: 2, name: 'Mary', text: 'la di da' }
  ];
  const { getByText } = render(<CommentFeed comments={fakeComments} />);
  const header = getByText(/comment feed/i);
  expect(header).toHaveTextContent('Comment Feed');
});

test('Renders "no contacts" when there are no contacts', () => {
  const fakeComments = [];
  const { getByText } = render(<CommentFeed comments={fakeComments} />);
  const noCommentsText = getByText(/no comments/i);
  expect(noCommentsText).toBeInTheDocument();
});

test('render feed with non-zero contacts', () => {
  const fakeComments = [
    { id: 1, name: 'Neil', text: 'blah blah' },
    { id: 2, name: 'Mary', text: 'la di da' }
  ];
  const { getAllByTestId } = render(<CommentFeed comments={fakeComments} />);
  // const names = getAllByTestId('comment-name').map(
  //   li => li.firstChild.textContent
  // );
  const names = getAllByTestId('comment-name').map(item => item.textContent);
  const text = getAllByTestId('comment-text').map(item => item.textContent);

  const fakeNames = fakeComments.map(comment => comment.name);
  const fakeText = fakeComments.map(comment => comment.text);

  expect(names).toEqual(fakeNames);
  expect(text).toEqual(fakeText);
});

// test('renders CommentFeed', () => {
//   const { container, getByText } = render(
//     <CommentFeed header="Comment Feed" />
//   );

//   expect(container).toHaveTextContent('Comment Feed');
//   expect(container).toBeInTheDocument();
//   //expect(header.innerHTML).toBe('Comment Feed');
// });
