import { render, fireEvent, screen } from '@testing-library/react'

import { Button } from './Button'

it('should render a button and click', async () => {
  const onClick = jest.fn()

  render(<Button onClick={onClick}>Click me</Button>)

  fireEvent.click(screen.getByText(/Click me/i))

  expect(onClick).toHaveBeenCalled()
})

it('should validate accent variant', async () => {
  render(<Button variant='accent'>Click me</Button>)

  fireEvent.click(screen.getByText('Click me'))

  expect(screen.getByRole('button')).toHaveStyle({
    color: 'white',
    borderColor: 'transparent',
  })
})

it('should validate border variant', async () => {
  render(<Button variant='border'>Click me</Button>)

  fireEvent.click(screen.getByText('Click me'))

  expect(screen.getByRole('button')).toHaveStyle({
    border: '1px solid',
  })
})
