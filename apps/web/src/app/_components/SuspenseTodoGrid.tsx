"use client";

import { Spinner } from "@todo-app/components";
import { Suspense } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { TodoGrid } from "./TodoGrid";

const Fallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export const SuspenseTodoGrid: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense fallback={<Spinner variant='brand' size='lg' />}>
        <TodoGrid />
      </Suspense>
    </ErrorBoundary>
  );
};
