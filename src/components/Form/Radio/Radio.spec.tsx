import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/theme'
import { Radio } from './Radio'

it('should render a button and click', async () => {
  render(
    <ThemeProvider theme={theme}>
      <Radio />
    </ThemeProvider>
  )

  // fireEvent.click(screen.getByText('Click me'))

  expect(screen.getByRole('radio')).toBeInTheDocument()
})
