import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/theme'
import { Radio } from './Radio'

it('should render radio ', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Radio />
    </ThemeProvider>
  )

  expect(screen.getByRole('radio')).toBeInTheDocument()
})
