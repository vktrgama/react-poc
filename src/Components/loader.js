import React from 'react';
import { LoadingSpinner } from '@apollo/space-kit/Loaders/LoadingSpinner';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const Loader = ({ loading, error, data, children }) => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <div className="spinnerContainer">
        <LoadingSpinner data-testid="spinner" size="large" theme="grayscale" />
      </div>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default Loader;
