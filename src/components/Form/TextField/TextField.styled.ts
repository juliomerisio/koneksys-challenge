import styled from 'styled-components'
import { maxWidth, MaxWidthProps } from 'styled-system'

export const Label = styled.label<MaxWidthProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  font-weight: bold;
  width: 100%;
  margin-bottom: 33px;

  > input {
    background-color: ${(props) => props.theme.colors.white};
    border: ${(props) => `1px solid ${props.theme.colors.borderGray}`};
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    transition: 180ms ease-in-out;
    font-weight: 400;
  }

  svg {
    position: absolute;
    right: 22px;
    top: 14px;
  }

  ${maxWidth}
`
