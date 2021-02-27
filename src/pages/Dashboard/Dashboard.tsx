import {
  Button,
  Modal,
  ModalHeader,
  Steps,
  Wizard,
  DashboardTable,
} from 'components'
import { useResetValues } from 'hooks'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ModalAtom, TitleAtom } from 'store/atoms'
import styled from 'styled-components'

export const Dashboard = () => {
  const reset = useResetValues()
  const title = useRecoilValue(TitleAtom)
  const [isModalOpen, setIsModalOpen] = useRecoilState(ModalAtom)

  return (
    <Container>
      <Header>
        <h1>{title || 'My Team'}</h1>
        <Button variant='accent' onClick={() => setIsModalOpen(true)}>
          Import Team
        </Button>
      </Header>

      <DashboardTable />

      <Modal isOpen={isModalOpen} onClose={reset}>
        <ModalHeader onClose={reset} />
        <Wizard />
        <Steps />
      </Modal>
    </Container>
  )
}

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
