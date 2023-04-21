import React, { useState } from 'react';

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error:', error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    // Fallback UI when there's an error
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
}

export default ErrorBoundary;
