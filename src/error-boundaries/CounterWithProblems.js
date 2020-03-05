import React, { useState } from 'react';

const CounterWithProblems = () => {
  const [count, setCount] = useState(0);

  // Note that error boundaries do not work in error handlers, because event handlers don't throw
  // errors during rendering. Use try-catch for an error handler in an event handler.
  return (
    <div>
      <p>This counter has problems. Every time it reaches an even number, it throws an error.</p>
      <BadCounter count={count} />
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export const BadCounter = ({ count }) => {
  if (count === 0 || count % 2) {
    return <p>Value: {count}</p>;
  } else {
    throw new Error('Counter bug!');
  }
};

export default CounterWithProblems;
