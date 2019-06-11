import React from 'react';

import CommentFeed from './CommentFeed';

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

const noComments = [];

const App = () => {
  return (
    <div>
      <CommentFeed comments={comments} />
    </div>
  );
};

export default App;
