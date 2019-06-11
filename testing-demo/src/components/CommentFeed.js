import React from 'react';

const CommentFeed = ({ comments }) => {
  const renderCommentList = comments.map(comment => (
    <li key={comment.id}>
      <h3 data-testid="comment-name">{comment.name}</h3>
      <p data-testid="comment-text">{comment.text}</p>
    </li>
  ));

  if (!comments.length) {
    return <div>No Comments</div>;
  }

  return (
    <div>
      <h2>Comment Feed</h2>
      <ul>{renderCommentList}</ul>
    </div>
  );
};

export default CommentFeed;
