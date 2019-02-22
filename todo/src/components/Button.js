import React from 'react';
import './Button.css';

const Button = ({ text, tasks, onButtonClick }) => {
  return (
    <button
      className={tasks.length > 0 ? 'reveal' : 'hidden'}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
