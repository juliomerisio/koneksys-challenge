import React from 'react'

import { Button } from '../../Button'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Container } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

export const Complete = () => {
  const { onPrevious } = useWizardSteps({
    previous: 'Favorite',
    next: 'Complete',
  })

  return (
    <>
      <Container>
        <label htmlFor='table'>Complete</label>
        {/* <Upload onError={handleError} onSuccess={handleSuccess} /> */}
      </Container>

      <ModalFooter>
        <Button variant='border' onClick={onPrevious}>
          Back
        </Button>
        <Button variant='accent'>Continue</Button>
      </ModalFooter>
    </>
  )
}
