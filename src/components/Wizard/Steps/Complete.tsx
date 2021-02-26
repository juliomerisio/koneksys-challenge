import React from 'react'
import { useSetRecoilState } from 'recoil'

import { Button } from '../../Button'
import { Upload } from '../../Form/Upload/Upload'
import { ModalFooter } from '../../Modal/ModalFooter'
import { WizardAtom } from '../Wizard'
import { Container } from './UploadData'

export const Complete = () => {
  const set = useSetRecoilState(WizardAtom)

  const handlePrevious = () => {
    set((prev) => ({
      ...prev,
      actual: 'Favorite',
    }))
  }

  return (
    <>
      <Container>
        <label htmlFor='table'>Complete</label>
        <Upload />
      </Container>

      <ModalFooter>
        <Button variant='border' onClick={handlePrevious}>
          Back
        </Button>
        <Button variant='accent'>Continue</Button>
      </ModalFooter>
    </>
  )
}
