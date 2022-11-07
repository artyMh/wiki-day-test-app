import { memo } from 'react'

import Button from '../button'
import './error-fallback.css'

export type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps): JSX.Element => {
  return (
    <div role="alert" className="error-fallback-container">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Refresh page</Button>
    </div>
  )
}

export default memo(ErrorFallback)
