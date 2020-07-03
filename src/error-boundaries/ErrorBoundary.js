import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary.componentDidCatch() -> error: ', error);
    console.error('ErrorBoundary.componentDidCatch() -> errorInfo: ', errorInfo);
  }

  render() {
    return (
      <div style={{ border: '2px red dashed', padding: '5px' }}>
        {!this.state.hasError
          ? this.props.children
          : this.props.errorComponent ?? <p>No error component provided</p>}
      </div>
    );
  }
}
