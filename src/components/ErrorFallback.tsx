import React from 'react'

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: VoidFunction
}) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button type='button' onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}
