import React from 'react';

import CommentFeed from './CommentFeed';
import Counter from './Counter';
import FetchUsers from './FetchUsers';

const comments = [
  {
    id: 1,
    name: 'Neil',
    text: 'Learning about testing components'
  },
  {
    id: 2,
    name: 'Erica',
    text: 'Painting great paintings'
  }
];

const App = () => {
  return (
    <div>
      <CommentFeed comments={comments} />
      <Counter />
      <FetchUsers userID="1" />
    </div>
  );
};

export default App;
