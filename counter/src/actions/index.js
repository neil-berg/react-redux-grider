export const increment = () => {
  return {
    type: 'INCREMENT',
    addToTotal: true
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
    addToTotal: true
  };
};

export const login = () => {
  return {
    type: 'LOGIN'
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};
