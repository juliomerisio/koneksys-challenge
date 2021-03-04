import { Icon, Button } from 'components'
import React from 'react'
import styled from 'styled-components'

interface ModalHeaderProps {
  onClose: VoidFunction
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <StyledHeader>
      <h2>My Team Importer</h2>
      <Button variant='icon' onClick={onClose} data-testid='close-modal'>
        <Icon icon='FaTimes' size={18} />
      </Button>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`
