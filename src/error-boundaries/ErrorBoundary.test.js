import React from 'react';
import { render, act, fireEvent, waitForElement } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ErrorBoundary from './ErrorBoundary';
import { BadCounter } from './CounterWithProblems';

it('should render successfully', () => {
  const { container, getByText } = render(
    <ErrorBoundary>
      <p>Nothing bad</p>
    </ErrorBoundary>,
  );

  expect(getByText('Nothing bad')).toBeInTheDocument();

  // Apparently the above HTML is prettier-ified
  expect(container.firstChild).toMatchInlineSnapshot(`
  <p>
    Nothing bad
  </p>
  `);
});

it('should render the error boundary', () => {
  // Disable error logging, which is verbose for this test
  console.error = jest.fn();
  const { container, getByText } = render(
    <ErrorBoundary>
      <BadCounter count={2} />
    </ErrorBoundary>,
  );

  expect(getByText('Something went wrong')).toBeInTheDocument();

  // Don't test internals, though
  expect(console.error).toHaveBeenCalled();
});
