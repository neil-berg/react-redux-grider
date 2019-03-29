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

export const clearAll = () => {
  return {
    type: 'CLEAR_ALL'
  };
};

export const completeAll = () => {
  return {
    type: 'COMPLETE_ALL'
  };
};
