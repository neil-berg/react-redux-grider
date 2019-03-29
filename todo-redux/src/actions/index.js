export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: Date.now(),
    text
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const completeTodo = id => {
  return {
    type: 'COMPLETE_TODO',
    id
  };
};
