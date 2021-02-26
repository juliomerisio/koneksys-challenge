import React from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

import { uuid } from '../../../utils/uuid'
import { Button } from '../../Button'
import { Radio } from '../../Form/Radio/Radio'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Columns, Table } from '../../Table/Table'
import { Container, CSVAtom } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const FavoriteAtom = atom<string>({
  key: 'FavoriteAtom',
  default: '',
})

export const Favorite = () => {
  const get = useRecoilValue(CSVAtom)
  const [getFavorite, setFavorite] = useRecoilState(FavoriteAtom)
  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Player status',
    next: 'Complete',
  })

  const rows = get.data.data.map((row) => ({
    ...row,
    onChange: (value: string) => setFavorite(value),
    favorite: getFavorite,
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
        <Button variant='accent' onClick={onNext} disabled={!getFavorite}>
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
