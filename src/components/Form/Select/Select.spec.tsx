import { fireEvent, render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../styles/theme'
import { Select } from './Select'

const OPTIONS = [
  { label: 'Brazil', id: 'Brazil', value: 'Brazil' },
  { label: 'Canada', id: 'Canada', value: 'Canada' },
]

it('should render select with default selected', async function () {
  const onChange = jest.fn()

  render(
    <ThemeProvider theme={theme}>
      <Select
        selectorName='country'
        data={OPTIONS}
        currentData={OPTIONS[0]}
        onChange={onChange}
      />{' '}
    </ThemeProvider>
  )

  expect(screen.getByTestId('value')).toHaveTextContent(OPTIONS[0].value)

  fireEvent.click(screen.getByRole('button', { name: /brazil/i }))
  screen.logTestingPlaygroundURL()

  expect(screen.getByRole('textbox')).toBeInTheDocument()

  const list = screen.getByRole('list', { name: /custom\-select/i })
  const { getAllByRole } = within(list)

  const items = await getAllByRole('listitem')

  expect(items.length).toBe(2)

  fireEvent.click(screen.getByRole('button', { name: /canada/i }))

  expect(screen.getByTestId('value')).toHaveTextContent(OPTIONS[1].value)
})
