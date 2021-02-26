import { Table } from 'components/Table/Table'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { Button, Modal } from '../components'
import { ModalHeader } from '../components/Modal/ModalHeader'
import { Steps } from '../components/Wizard/Steps/Steps'
import { CSVAtom } from '../components/Wizard/Steps/UploadData'
import { Wizard, WizardAtom } from '../components/Wizard/Wizard'

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  padding: 32px;
  min-height: 100vh;
`

export const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const setWizard = useSetRecoilState(WizardAtom)
  const setCSVAtom = useSetRecoilState(CSVAtom)

  const handleCloseModal = () => {
    setWizard({
      active: ['Upload Data'],
      actual: 'Upload Data',
      hasError: [],
    })

    setCSVAtom({
      data: {
        fileInfo: {
          name: '',
          type: '',
          size: 0,
        },
        data: [],
      },
      errors: [],
    })
    setOpen(false)
  }

  return (
    <Container>
      <Header>
        <h1>My Team</h1>
        <Button variant='accent' onClick={() => setOpen(true)}>
          Import Team
        </Button>
      </Header>

      <Modal isOpen={open} onClose={handleCloseModal}>
        <ModalHeader onClose={handleCloseModal} />
        <Wizard />
        <Steps />
      </Modal>

      <Table isDashboard />
    </Container>
  )
}
