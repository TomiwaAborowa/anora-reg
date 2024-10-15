import React, { Component } from 'react';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // You can log the error here
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error and info here
    this.setState({ hasError: true });
    // Redirect to the homepage
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
export default MyErrorBoundary