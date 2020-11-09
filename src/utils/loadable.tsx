import React, { ComponentType, lazy, Suspense } from "react";

const loadable = (
  importFunction: () => Promise<{ default: ComponentType<any> }>,
  fallback?: any
) => {
  const LazyLoadingComponent = lazy(importFunction);

  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadingComponent {...props} />
    </Suspense>
  );
};

export default loadable;
