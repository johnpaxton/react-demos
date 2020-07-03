import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import CounterWithProblems from './CounterWithProblems';
import ShowError from './ShowError';

const ErrorDemo = () => {
  return (
    <div>
      <h2>Error Boundaries</h2>
      <div style={{ marginBottom: '20px' }}>
        <p>
          The component below will occasionally throw an error. It is isolated inside an
          ErrorBoundary, a custom component which uses{' '}
          <code>getDerivedStateFromError</code>
          and <code>componentDidCatch</code>.
        </p>
      </div>
      <section>
        <ErrorBoundary errorComponent={ShowError}>
          <CounterWithProblems />
        </ErrorBoundary>
      </section>
    </div>
  );
};

export default ErrorDemo;
