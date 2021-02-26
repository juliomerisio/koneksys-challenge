import React from 'react'

import { uuid } from '../../../utils/uuid'
import { Button } from '../../Button'
import { Radio } from '../../Form/Radio/Radio'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Columns, Table } from '../../Table/Table'
import { Container } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const Favorite = () => {
  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Player status',
    next: 'Complete',
  })

  const rows: Array<Row> = [
    {
      radio: '',
      player: 'player',
      number: '#',
      pos: 'pos',
      college: 'college',
      status: 'status',
    },
    {
      radio: '',
      player: 'player',
      number: '#',
      pos: 'pos',
      college: 'college',
      status: 'status',
    },
    {
      radio: '',
      player: 'player',
      number: '#',
      pos: 'pos',
      college: 'college',
      status: 'status',
    },
    {
      radio: '',
      player: 'player',
      number: '#',
      pos: 'pos',
      college: 'college',
      status: 'status',
    },
  ]

  return (
    <>
      <Container>
        <label htmlFor='table'>Favorite</label>

        <Table rows={rows} columns={columns} />
      </Container>

      <ModalFooter>
        <Button variant='border' onClick={onPrevious}>
          Back
        </Button>
        <Button variant='accent' onClick={onNext}>
          Continue
        </Button>
      </ModalFooter>
    </>
  )
}

const columns: Columns = [
  {
    key: 'radio',
    label: ' ',
    render: (value) => value,
    renderRow: (_value) => <Radio id={uuid()} />,
  },
  {
    key: 'player',
    label: 'Player',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'number',
    label: '#',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'pos',
    label: 'pos',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'college',
    label: 'College',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'status',
    label: 'Status',
    render: (value) => value,

    renderRow: (value) => value,
  },
]

type Row = { [key: string]: string }
