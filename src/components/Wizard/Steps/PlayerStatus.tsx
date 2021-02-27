import { Button, ModalFooter, Table } from 'components'
import { replaceItemAtIndex } from 'helpers/replaceItemAtIndex'
import { useLogger, useWizardSteps } from 'hooks'
import React from 'react'
import { useRecoilState } from 'recoil'
import { CSVAtom } from 'store/atoms'

import { SelectData } from '../../Form/Select/Select'
import { Container } from './UploadData'

export const PlayerStatus = () => {
  const logger = useLogger('Player Status')
  const [getCSVData, setCSVData] = useRecoilState(CSVAtom)

  logger.info('Data', getCSVData.data)

  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Favorite',
  })

  const handleChangePlayerStatus = ({ value, label }: SelectData) => {
    const findPlayerIndex = getCSVData.data.data.findIndex(
      (player) => player['Player Name'] === value
    )

    setCSVData((prev) => {
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

  const rows = getCSVData.data.data.map((row) => ({
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
