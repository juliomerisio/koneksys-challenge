import { Select } from 'components'
import { uuid } from 'helpers/uuid'
import React, { ReactElement } from 'react'

import { Columns, Container, Row, RowsContainer } from './Table.styled'

interface TableProps {
  columns?: Array<Column>
  rows?: Array<Row>
  isDashboard?: boolean
}

export const Table: React.FC<TableProps> = ({
  columns = columnsExample,
  rows = rowsExample,
  isDashboard = false,
}) => {
  return (
    <Container>
      <Columns data-testid='columns'>
        {columns.map((column) => (
          <span data-testid='columnItem' key={column.key}>
            {column.render(column.label, column)}
          </span>
        ))}
      </Columns>
      <RowsContainer isDashboard={isDashboard}>
        {rows?.map((row) => (
          <Row key={row?.key + uuid()} isActive={row?.isActive}>
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

export type Columns = Array<Column>

const columnsExample: Columns = [
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
    key: 'College',
    label: 'College',
    render: (value) => value,
    renderRow: (value) => value,
  },

  {
    key: 'Status',
    label: 'Status',
    render: (value) => value,
    renderRow: (value, obj) => (
      <Select
        selectorName='status'
        onChange={(name, v) => {
          if (typeof obj?.onChange === 'function') {
            obj?.onChange(v)
          }
        }}
        data={[
          {
            id: 'Active',
            label: 'Active',
            value: String(obj?.['Player Name'] ?? ''),
          },
          {
            id: 'Injured',
            label: 'Injured',
            value: String(obj?.['Player Name'] ?? ''),
          },
          {
            id: 'Practice',
            label: 'Practice',
            value: String(obj?.['Player Name'] ?? ''),
          },
          {
            id: 'Suspended',
            label: 'Suspended',
            value: String(obj?.['Player Name'] ?? ''),
          },
        ]}
        selectPlaceholder='Status'
        currentData={{
          id: typeof obj?.Status === 'string' ? obj.Status : '',
          label: typeof value === 'string' ? value : '',
          value: typeof value === 'string' ? value : '',
        }}
      />
    ),
  },
]

type Row = { [key: string]: any } //eslint-disable-line
export type Rows = Array<Row>

const rowsExample: Rows = [
  {
    Player: 'player',
    Number: '#',
    Pos: 'pos',
    College: 'college',
    Status: 'status',
  },
  {
    Player: 'player',
    Number: '#',
    Pos: 'pos',
    College: 'college',
    Status: 'status',
  },
]
