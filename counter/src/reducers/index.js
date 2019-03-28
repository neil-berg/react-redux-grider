import { combineReducers } from 'redux';

const countReducer = (count = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      return count;
  }
};

const clicksReducer = (clicks = 0, action) => {
  if (action.addToTotal) {
    return clicks + 1;
  }
  return clicks;
};

const logReducer = (status = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return (status = true);
    case 'LOGOUT':
      return (status = false);
    default:
      return status;
  }
};

export default combineReducers({
  count: countReducer,
  clicks: clicksReducer,
  loggedIn: logReducer
});
