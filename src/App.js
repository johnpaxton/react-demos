import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ErrorBoundaryDemo from './error-boundaries/ErrorBoundaryDemo';
import CancelPromise from './cancel-promise/CancelPromise';
import EffectHook from './effect-hook/EffectHook';
import ContextDemo from './context-demo/ContextDemo';
import HigherOrderComponent from './higher-order-component/HigherOrderComponent';
import Memoization from './memo-demo/Memoization';
import DynamicComponents from './dynamic-components/DynamicComponents';
import ReduxCounter from './redux-counter/ReduxCounter';
import ReduxCounterBP from './redux-counter-best/ReduxContainer';
import ReduxToolkitCounter from './redux-counter-tk/ReduxContainer';
import VisibilityDemo from './visibility-tests/VisibilityDemo';

function App() {
  return (
    <Router>
      <main className="container">
        <header className="columns">
          <div className="column">
            <h1 className="title is-size-1">React Demos</h1>
            <hr />
          </div>
        </header>
        <div className="columns">
          <div className="column">
            <ul className="list-unstyled">
              <li>
                <Link to="error-boundaries">Error Boundaries</Link>
              </li>
              <li>
                <Link to="cancel-promise">Cancel Promises (axios)</Link>
              </li>
              <li>
                <Link to="effect-hook">Effect Hook</Link>
              </li>
              <li>
                <Link to="context-demo">Context API</Link>
              </li>
              <li>
                <Link to="higher-order-component">Higher Order Component</Link>
              </li>
              <li>
                <Link to="memoization">Memoization</Link>
              </li>
              <li>
                <Link to="dynamic-components">DynamicComponents</Link>
              </li>
              <li>
                <Link to="redux-counter">Redux Counter</Link>
              </li>
              <li>
                <Link to="redux-counter-best-practices">
                  Redux Counter (best practices)
                </Link>
              </li>
              <li>
                <Link to="redux-toolkit-counter">Redux Counter (using the toolkit)</Link>
              </li>
              <li>
                <Link to="visibility-demo">Visbility Demo</Link>
              </li>
            </ul>
          </div>
          <div className="column">
            <Switch>
              <Route path="/error-boundaries">
                <ErrorBoundaryDemo />
              </Route>
              <Route path="/cancel-promise">
                <CancelPromise />
              </Route>
              <Route path="/effect-hook">
                <EffectHook />
              </Route>
              <Route path="/context-demo">
                <ContextDemo />
              </Route>
              <Route path="/higher-order-component">
                <HigherOrderComponent />
              </Route>
              <Route path="/memoization">
                <Memoization />
              </Route>
              <Route path="/dynamic-components">
                <DynamicComponents />
              </Route>
              <Route path="/redux-counter">
                <ReduxCounter />
              </Route>
              <Route path="/redux-counter-best-practices">
                <ReduxCounterBP />
              </Route>
              <Route path="/redux-toolkit-counter">
                <ReduxToolkitCounter />
              </Route>
              <Route>
                <VisibilityDemo />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
