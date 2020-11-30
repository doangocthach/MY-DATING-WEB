import React, { ComponentType, lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";
const loadable = (
  importFunction: () => Promise<{ default: ComponentType<any> }>,
  fallback?: any
) => {
  const LazyLoadingComponent = lazy(importFunction);

  return (props: any) => (
    <Suspense fallback={<Loading />}>
      <LazyLoadingComponent {...props} />
    </Suspense>
  );
};

export default loadable;
