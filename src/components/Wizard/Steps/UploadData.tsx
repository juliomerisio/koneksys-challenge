import React from 'react'
import styled from 'styled-components'

import { Button } from '../../Button'
import { Upload } from '../../Form/Upload/Upload'
import { ModalFooter } from '../../Modal/ModalFooter'
import { useWizardSteps } from './useWizardSteps'

export const Container = styled.div`
  height: 100%;
  padding: 0 32px;
`

export const UploadData = () => {
  const { onNext } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Player status',
  })

  return (
    <>
      <Container>
        <label htmlFor='table'>My Team Importer</label>
        <Upload />
      </Container>

      <ModalFooter>
        <Button onClick={onNext}>Continue</Button>
      </ModalFooter>
    </>
  )
}
