import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from './ErrorBoundary';
import { BadCounter } from './CounterWithProblems';

describe('ErrorBoundary', () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should render successfully', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <p>Nothing bad</p>
      </ErrorBoundary>,
    );

    expect(getByText('Nothing bad')).toBeInTheDocument();
  });

  it('should NOT render the error boundary', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <BadCounter count={1} />
      </ErrorBoundary>,
    );

    expect(getByText(/Value/)).toBeInTheDocument();
  });

  it('should render the error boundary (without a custom component)', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <BadCounter count={2} />
      </ErrorBoundary>,
    );

    expect(getByText(/No error component provided/)).toBeInTheDocument();
  });

  it('should render the error boundary with a custom component', () => {
    const CustomError = () => {
      console.log('CustomError invoked');
      return <p>Custom error message</p>;
    };
    const Throws = () => {
      throw new Error('test error');
    };

    const { getByText } = render(
      <ErrorBoundary errorComponent={<CustomError />}>
        <Throws />
      </ErrorBoundary>,
    );

    // console.log("container.querySelector('p'): ", container.querySelector('p'));

    expect(getByText(/Custom error message/)).toBeInTheDocument();
  });
});
