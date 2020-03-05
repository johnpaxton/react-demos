import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connect, Provider } from 'react-redux';

const initialState = { counter: 1 };

// Action types
const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

// Action creators
const addOne = () => ({ type: actions.INCREMENT });
const subtractOne = () => ({ type: actions.DECREMENT });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { counter: state.counter + 1 };
    case actions.DECREMENT:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

function Counter({ value, increment, decrement }) {
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

const mapStateToProps = state => ({
  value: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(addOne()),
  decrement: () => dispatch(subtractOne()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default function ReduxContainer() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
