import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        timeAgo="Today at 6:00PM"
        text="Nice blog post!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        timeAgo="Today at 4:30PM"
        text="Great job!"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        timeAgo="Yesterday at 2:13AM"
        text="Where's lunch?"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
