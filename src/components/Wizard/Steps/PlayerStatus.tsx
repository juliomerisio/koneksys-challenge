import React from 'react'

import { Button } from '../../Button'
import { Upload } from '../../Form/Upload/Upload'
import { ModalFooter } from '../../Modal/ModalFooter'
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
        <Upload />
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
