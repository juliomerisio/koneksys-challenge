import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import { Modal, ModalHeader } from '../index'

const DummyComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(true)

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ModalHeader onClose={toggleModal} />
      </Modal>
    </>
  )
}

const setup = () => {
  render(
    <ThemeProvider theme={theme}>
      <DummyComponent />
    </ThemeProvider>
  )

  expect(
    screen.getByRole('heading', { name: /my team importer/i })
  ).toBeInTheDocument()

  const closeButton = screen.getByRole('button')

  return { closeButton }
}

test('should close it when clicked on close button', () => {
  const { closeButton } = setup()

  userEvent.click(closeButton)

  expect(screen.queryByText(/my team importer/i)).not.toBeNull()
})

// it('should close modal pressing escape', function () {
//   setup()
//
//   act(() => {
//     fireEvent.keyDown(screen.getByText(/my team importer/i), {
//       key: 'Escape',
//       code: 'Escape',
//       keyCode: 27,
//       charCode: 27,
//     })
//   })
//
//   expect(screen.getByRole('heading', { name: /my team importer/i }))
// })
