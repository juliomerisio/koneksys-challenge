import React from 'react'
import { useRecoilState } from 'recoil'

import { useLogger } from '../../../hooks'
import { Button } from '../../Button'
import { SelectData } from '../../Form/Select/Select'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Table } from '../../Table/Table'
import { Container, CSVAtom } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const PlayerStatus = () => {
  const logger = useLogger('Player Status')
  const [get, set] = useRecoilState(CSVAtom)

  logger.info('Data', get.data)

  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Favorite',
  })

  const handleChangePlayerStatus = ({ value, label }: SelectData) => {
    const findPlayerIndex = get.data.data.findIndex(
      (player) => player['Player Name'] === value
    )

    set((prev) => {
      const update = replaceItemAtIndex(prev.data.data, findPlayerIndex, {
        ...prev.data.data[findPlayerIndex],
        Status: label,
      })

      return {
        errors: [],
        data: {
          data: update,
          fileInfo: prev.data.fileInfo,
        },
      }
    })
  }

  const rows = get.data.data.map((row) => ({
    ...row,
    onChange: handleChangePlayerStatus,
  }))

  return (
    <>
      <Container>
        <label htmlFor='table'>Player Status</label>
        <Table rows={rows} />
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

function replaceItemAtIndex(
  arr: Record<string, string>[],
  index: number,
  newValue: Record<string, string>
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}
