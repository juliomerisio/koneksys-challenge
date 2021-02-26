import { Columns, Table } from 'components/Table/Table'
import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { Button, Modal } from '../components'
import { ModalHeader } from '../components/Modal/ModalHeader'
import { DashboardDataAtom } from '../components/Wizard/Steps/Complete'
import { Steps } from '../components/Wizard/Steps/Steps'
import { TitleAtom } from '../components/Wizard/Steps/UploadData'
import { Wizard } from '../components/Wizard/Wizard'
import { useLogger } from '../hooks'
import { useResetValues } from './useResetValues'

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

export const ModalAtom = atom({
  key: 'ModalAtom',
  default: false,
})

export const Dashboard = () => {
  const [open, setOpen] = useRecoilState(ModalAtom)
  const reset = useResetValues()
  const title = useRecoilValue(TitleAtom)

  return (
    <Container>
      <Header>
        <h1>{title || 'My Team'}</h1>
        <Button variant='accent' onClick={() => setOpen(true)}>
          Import Team
        </Button>
      </Header>

      <DashboardTable />

      <Modal isOpen={open} onClose={reset}>
        <ModalHeader onClose={reset} />
        <Wizard />
        <Steps />
      </Modal>
    </Container>
  )
}

const Wrapper = styled.div`
  span {
    max-width: 100px;
    white-space: unset;
    overflow: unset;
    text-overflow: unset;
  }
  > div {
    span:first-child {
      max-width: 150px;
    }
    span:last-child {
      max-width: 50px;
    }
  }
`

const DashboardTable = () => {
  const get = useRecoilValue(DashboardDataAtom)

  const logger = useLogger('Dashboard')

  logger.info('Data', get)

  return (
    <Wrapper>
      {get.length > 0 ? (
        <Table isDashboard rows={get} columns={columns} />
      ) : null}
    </Wrapper>
  )
}

const columns: Columns = [
  {
    key: 'Player Name',
    label: 'Player',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: '#',
    label: '#',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'Pos',
    label: 'pos',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Height',
    label: 'Height',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Weight',
    label: 'Weight',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Experience',
    label: 'Experience',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Age',
    label: 'Age',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Base Salary',
    label: 'Salary',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'College',
    label: 'College',
    render: (value) => value,
    renderRow: (value) => value,
  },
  {
    key: 'Status',
    label: 'Status',
    render: (value) => value,
    renderRow: (value) => value,
  },
]
