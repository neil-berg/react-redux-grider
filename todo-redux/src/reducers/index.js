import { combineReducers } from 'redux';

const todos = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false,
          show: true
        }
      ];
    case 'DELETE_TODO':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, show: false } : todo
      );
    case 'COMPLETE_TODO':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'CLEAR_ALL':
      return todos.map(todo => ({ ...todo, show: false }));
    case 'COMPLETE_ALL':
      return todos.map(todo => ({ ...todo, completed: true }));
    default:
      return todos;
  }
};

export default combineReducers({
  todos
});
