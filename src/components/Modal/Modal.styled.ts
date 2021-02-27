import styled from 'styled-components'

export const FullScreen = styled.div<{ isOpen: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen === 1 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
  backdrop-filter: blur(2px);
  animation: fadeIn 380ms ease-in-out 1;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 655px;
    width: 100%;
    height: 476px;
    margin: 32px;
    background-color: ${(props) => props.theme.colors.white};
    overflow: hidden;
    border-radius: 16px;
    position: relative;
    cursor: default;
    animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;
    box-shadow: 0 9px 26px #0000003d;

    @keyframes slideIn {
      from {
        transform: translateY(-120px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`
