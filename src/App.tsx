import './i18n'
import { Providers } from './Providers'
import Router from './routes'

function App(): JSX.Element {
  return (
    <Providers>
      <Router />
    </Providers>
  )
}

export default App
