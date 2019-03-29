const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return (posts = [...posts, action.payload.data]);
    default:
      return posts;
  }
};

export default postsReducer;
