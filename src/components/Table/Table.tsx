import React, { ReactElement } from 'react'

import { uuid } from '../../utils/uuid'
import Select from '../Form/Select/Select'
import { Columns, Container, Row, RowsContainer } from './Table.styled'

interface TableProps {
  columns?: Array<Column>
  rows?: Array<Row>
}

export const Table: React.FC<TableProps> = ({
  columns = columnsExample,
  rows = rowsExample,
}) => {
  return (
    <Container>
      <Columns>
        {columns.map((column) => (
          <span key={column.key}>{column.render(column.label, column)}</span>
        ))}
      </Columns>
      <RowsContainer>
        {rows?.map((row) => (
          <Row key={row?.key}>
            {columns?.map((column, columnIndex) => {
              const index = columns[columnIndex].key

              return (
                <span key={uuid()}>
                  {column?.renderRow && column?.renderRow(row[index], row)}
                </span>
              )
            })}
          </Row>
        ))}
      </RowsContainer>
    </Container>
  )
}

type Column = {
  key: string
  label: string
  render: (value: string | ReactElement, obj: Record<string, unknown>) => any //eslint-disable-line

  renderRow: (value: string | ReactElement, obj: Record<string, unknown>) => any //eslint-disable-line
}

const columnsExample: Array<Column> = [
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
    renderRow: (_value) => (
      <Select
        selectorName='status'
        onChange={() => true}
        data={[
          { id: 'one', label: 'Hello', value: 'hello' },
          { id: 'two', label: 'Hey', value: 'hey' },
        ]}
        selectPlaceholder='Status'
        currentData={null}
      />
    ),
  },
]

type Row = { [key: string]: string }

const rowsExample: Array<Row> = [
  {
    player: 'player',
    number: '#',
    pos: 'pos',
    college: 'college',
    status: 'status',
  },
  {
    player: 'player',
    number: '#',
    pos: 'pos',
    college: 'college',
    status: 'status',
  },
  {
    player: 'player',
    number: '#',
    pos: 'pos',
    college: 'college',
    status: 'status',
  },
  {
    player: 'player',
    number: '#',
    pos: 'pos',
    college: 'college',
    status: 'status',
  },
]
