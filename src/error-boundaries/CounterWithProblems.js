import React, { useState } from 'react';

const CounterWithProblems = () => {
  const [count, setCount] = useState(0);

  // Note that error boundaries do not work in error handlers, because event handlers don't throw
  // errors during rendering. Use try-catch for an error handler in an event handler.
  return (
    <div>
      <p>
        This counter has problems. Every time it reaches an even number, it throws an
        error.
      </p>
      <p>
        When it throws the error, you will have to close the error overlay from Create
        React App (there's an 'X' in the upper right hand corner)
      </p>
      <hr />
      <BadCounter count={count} />
      <div style={{ marginTop: '10px' }}>
        <button className="button is-primary" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
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
