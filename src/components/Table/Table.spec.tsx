import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import { Table } from './Table'

it('should render table with default config', async function () {
  render(
    <ThemeProvider theme={theme}>
      <Table />
    </ThemeProvider>
  )

  const columns = screen.getByTestId('columns')
  const { findAllByTestId } = within(columns)

  const items = await findAllByTestId('columnItem')

  expect(items.length).toBe(5)
})
