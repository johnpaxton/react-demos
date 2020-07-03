import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Caught an error.');
  }

  render() {
    return this.state.hasError ? <p>Bad</p> : this.props.children;
  }
}

describe('Minimal error boundary test', () => {
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it('should NOT render the error boundary', () => {
    const { getByText, queryByText } = render(
      <ErrorBoundary>
        <p>Good</p>
      </ErrorBoundary>,
    );

    expect(getByText(/Good/)).toBeInTheDocument();
    expect(queryByText(/Bad/)).toBeNull();
  });

  it('should render the error boundary', () => {
    const Throws = () => {
      throw new Error('test error');
    };

    const { getByText, queryByText } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>,
    );

    expect(getByText(/Bad/)).toBeInTheDocument();
    expect(queryByText(/Good/)).toBeNull();
  });
});
