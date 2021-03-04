import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import { Dashboard } from './Dashboard'

test('should render default label', () => {
  render(
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </RecoilRoot>
  )

  expect(screen.getByRole('heading', { name: /my Team/i })).toBeVisible()

  expect(
    screen.getByRole('button', { name: /import Team/i })
  ).toBeInTheDocument()
})
