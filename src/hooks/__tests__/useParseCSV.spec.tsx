import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Upload } from '../../components'
import theme from '../../styles/theme'

test('should be able to upload a file', async () => {
  const onError = jest.fn()

  const onSuccess = jest.fn()

  const { getByText, getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Upload onError={onError} onSuccess={onSuccess} />
    </ThemeProvider>
  )

  // fireEvent.click(getByText('something'))

  // await actWait()

  const input = await screen.getByLabelText(/select a file/i)

  //
  const file = new File(
    [
      // eslint-disable-next-line no-multi-str
      'title, type, value, category\
      Loan, income, 1500, Others\
      Website Hosting, outcome, 50, Others\
      Ice cream, outcome, 3, Food',
    ],
    'import.csv',
    {
      type: 'text/csv',
    }
  )

  Object.defineProperty(input, 'files', {
    value: [file],
  })

  fireEvent.change(input)

  expect(input).toHaveProperty('files', [file])
})
