import { Icon, Button } from 'components'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { CSVAtom } from '../Wizard/Steps/UploadData'
import { WizardAtom } from '../Wizard/Wizard'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`

interface ModalHeaderProps {
  onClose: VoidFunction
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  const set = useSetRecoilState(WizardAtom)

  const setCSVAtom = useSetRecoilState(CSVAtom)

  const handleCloseModal = () => {
    set({
      active: ['Upload Data'],
      actual: 'Upload Data',
      hasError: [],
    })

    setCSVAtom({
      data: {
        fileInfo: {
          name: '',
          type: '',
          size: 0,
        },
        data: [],
      },
      errors: [],
    })
    onClose()
  }

  return (
    <StyledHeader>
      <h2>My Team Importer</h2>
      <Button variant='icon' onClick={handleCloseModal}>
        <Icon icon='FaTimes' size={18} />
      </Button>
    </StyledHeader>
  )
}
