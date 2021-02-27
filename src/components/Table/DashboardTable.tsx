import { useLogger } from 'hooks'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { DashboardDataAtom, FavoritePlayerAtom } from 'store/atoms'
import styled from 'styled-components'

import { Columns, Table } from './Table'

export const DashboardTable = () => {
  const logger = useLogger('Dashboard')

  const get = useRecoilValue(DashboardDataAtom)

  const getFavoritePlayer = useRecoilValue(FavoritePlayerAtom)

  logger.info('Data', get)

  const rows = get.map((row) => ({
    ...row,
    isActive: row?.['Player Name'] === getFavoritePlayer,
  }))

  return (
    <Wrapper>
      {get.length > 0 ? (
        <Table isDashboard rows={rows} columns={columns} />
      ) : null}
    </Wrapper>
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
      max-width: 90px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`

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
