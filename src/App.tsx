import { ErrorBoundary } from 'react-error-boundary'

import MainPage from './pages/main'
import ErrorFallback from './common/components/error-fallback/error-fallback'

import './App.css'

const App = (): JSX.Element => {
  // I decided to just reload page here to giving user at least one way how to possibly fix crashed app
  // In overall ofc here should be any error handlers or happy-paths, but looks like this is out of scope
  const resetPage = () => window.location.reload()

  return (
    <div className="app-container">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={resetPage}
      >
        <MainPage />
      </ErrorBoundary>
    </div>
  )
}

export default App
