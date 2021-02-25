import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  font-weight: bold;
  width: 100%;

  > input {
    background-color: ${(props) => props.theme.colors.white};
    border: ${(props) => `1px solid ${props.theme.colors.borderGray}`};
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    transition: 180ms ease-in-out;
  }
`
