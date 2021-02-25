import React from 'react'

import useLogger from '../hooks/useLogger'

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: VoidFunction
}) {
  const log = useLogger('App')

  log.error('something bad happened')

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
