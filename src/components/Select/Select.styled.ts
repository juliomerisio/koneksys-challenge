import styled, { css } from 'styled-components'

export const Loader = styled.span`
  display: flex;
  justify-content: center;
`

export const Current = styled.button<{ isActive: boolean }>`
  width: inherit;
  border-radius: 8px;
  transition: color 0.25s, background-color 0.25s;
  svg {
  }
  &:hover {
    ${(props) => props.theme && css``}
  }
  &:disabled {
    pointer-events: none;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:hover {
      }
    `}
`

export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eee;
  input {
    border: 0;
    background-color: transparent;

    &::placeholder {
    }
  }
`

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  svg {
  }
  span:last-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const List = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110px;
  left: 0;
  z-index: 15;
  padding-bottom: 0.5rem;
  width: inherit;
  max-height: 410px;
  overflow: hidden;
  transition: top 1s cubic-bezier(0.19, 1, 0.22, 1);

  ${(props) =>
    props.isOpen &&
    css`
      top: 58px;
    `}
  li {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: inherit;
  border-radius: 0.8rem;
  transition: color 0.25s, background-color 0.25s;
  &:hover {
    ${(props) => props.theme && css``}
  }
`

export const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 267px;
  width: 100%;
  ${List} {
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  }
`
