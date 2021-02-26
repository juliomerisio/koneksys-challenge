import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, Modal } from '../components'
import { ModalHeader } from '../components/Modal/ModalHeader'
import { Steps } from '../components/Wizard/Steps/Steps'
import { Wizard } from '../components/Wizard/Wizard'

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  padding: 32px;
`

export const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Header>
        <h1>My Team</h1>
        <Button variant='accent' onClick={() => setOpen(true)}>
          Import Team
        </Button>
      </Header>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalHeader onClose={handleClose} />
        <Wizard />
        <Steps />
      </Modal>
    </Container>
  )
}
