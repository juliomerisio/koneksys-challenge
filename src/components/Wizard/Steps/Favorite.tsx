import { Button, Radio, ModalFooter, Table } from 'components'
import { uuid } from 'helpers/uuid'
import { useWizardSteps } from 'hooks'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { CSVAtom, FavoritePlayerAtom } from 'store/atoms'

import { Columns } from '../../Table/Table'
import { Container } from './UploadData'

export const Favorite = () => {
  const getCSVData = useRecoilValue(CSVAtom)
  const [getFavoritePlayer, setFavoritePlayer] = useRecoilState(
    FavoritePlayerAtom
  )

  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Player status',
    next: 'Complete',
  })

  const rows = getCSVData.data.data.map((row) => ({
    ...row,
    onChange: (value: string) => setFavoritePlayer(value),
    favorite: getFavoritePlayer,
    isActive: getFavoritePlayer === row?.['Player Name'],
  }))

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
        <Button variant='accent' onClick={onNext} disabled={!getFavoritePlayer}>
          Continue
        </Button>
      </ModalFooter>
    </>
  )
}

const columns: Columns = [
  {
    key: 'Player Name',
    label: 'Player',
    render: (value) => value,
    renderRow: (value, obj) => {
      return (
        <Radio
          id={uuid()}
          checked={obj.favorite === obj['Player Name']}
          onChange={() => {
            if (typeof obj.onChange === 'function') {
              obj.onChange(value)
            }
          }}
        />
      )
    },
  },

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
    key: 'College',
    label: 'College',
    render: (value) => value,
    renderRow: (value) => value,
  },
]
