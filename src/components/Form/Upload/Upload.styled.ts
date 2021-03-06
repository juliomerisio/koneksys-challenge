import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.borderGray};
  margin-top: 23px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    padding: 14px 0;
    cursor: pointer;
  }

  label {
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.accent};
    width: 100%;
    height: 100%;
    font-size: 1em;
    transition: all 0.4s;
    cursor: pointer;
    padding: 8px 16px;
  }

  input:hover + label,
  input:focus + label,
  label:hover,
  label:focus {
    background: ${(props) => props.theme.colors.accent};
    color: white;
  }
`
