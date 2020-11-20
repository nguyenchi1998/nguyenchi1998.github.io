/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from 'react';
import LoadingIndicator from 'components/LoadingIndicator';

const loadable = (importFunc) => {
  const LazyComponent = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<LoadingIndicator />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
