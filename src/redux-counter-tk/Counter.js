import React from 'react';

export default function Counter({ value, increment, decrement }) {
  return (
    <div className="card">
      <header className="card-header">
        <h4 className="card-header-title has-background-warning">
          Redux-enabled counter
        </h4>
      </header>
      <div className="card-content">
        <div className="has-text-centered has-padding-bottom-20">
          <h1 className="title is-size-3">{value}</h1>
        </div>
        <div className="justify-center buttons are-large">
          <button
            className="button is-danger is-block is-full-height"
            onClick={decrement}
          >
            <span role="img" aria-label="heavy minus sign">
              ➖
            </span>
            <br />
            <span>Decrement</span>
          </button>
          &nbsp;
          <button
            className="button is-success is-block is-full-height"
            onClick={increment}
          >
            <span role="img" aria-label="heavy plus sign">
              ➕
            </span>
            <br />
            <span>Increment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
