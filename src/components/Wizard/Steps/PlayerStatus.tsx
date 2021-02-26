import React from 'react'

import { Button } from '../../Button'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Table } from '../../Table/Table'
import { Container } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const PlayerStatus = () => {
  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Favorite',
  })

  return (
    <>
      <Container>
        <label htmlFor='table'>Player Status</label>
        <Table />
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
