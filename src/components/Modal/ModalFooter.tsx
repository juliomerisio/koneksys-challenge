import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 32px 16px;
  margin-top: 8px;
  > button:nth-child(2) {
    margin-left: 16px;
  }
`

interface ModalFooterProps {}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>
}
