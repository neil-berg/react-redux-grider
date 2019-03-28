import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

// const initialState = {
//   count: 0,
//   clicks: 0
// };

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
  switch (action.type) {
    case 'ADD':
      return clicks + 1;
    default:
      return clicks;
  }
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

const rootReducer = combineReducers({
  count: countReducer,
  clicks: clicksReducer,
  loggedIn: logReducer
});

// const loggedInReducer = (state = initialState, action) => {
//   if (action.type === 'LOGGED_IN') {
//     return {
//       loggedIn: !state.loggedIn
//     };
//   }
//   return state;
// };

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
