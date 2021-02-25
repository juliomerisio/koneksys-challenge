import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { ErrorFallback } from './components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        /* reset the state of your app so the error doesn't happen again  } */
      }}
    >
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </RecoilRoot>
    </ErrorBoundary>
  )
}
