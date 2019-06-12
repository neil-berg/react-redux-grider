import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span data-testid="span-count">The count is {count}</span>
    </div>
  );
};

export default Counter;
