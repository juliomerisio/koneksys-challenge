import React from 'react'

import { Button } from '../../Button'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Container } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const Favorite = () => {
  const { onNext, onPrevious } = useWizardSteps({
    previous: 'Player status',
    next: 'Complete',
  })

  return (
    <>
      <Container>
        <label htmlFor='table'>Favorite</label>
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
