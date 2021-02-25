import { Icon } from 'components'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 39px;
  > div:nth-child(1) {
    clip-path: polygon(96% 0, 100% 50%, 96% 100%, 0% 100%, 0% 50%, 0% 0%);
  }
  > div:nth-child(4) {
    clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0% 100%, 4% 50%, 0% 0%);
  }
`

const Step = styled.div<{ isActive: boolean }>`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  margin: -2px;

  background: ${(props) => props.theme.colors.lightGray};

  ${(props) =>
    props.isActive &&
    css`
      background: ${props.theme.colors.accent};
      color: ${props.theme.colors.white};
    `}

  svg {
    margin-right: 9px;
  }

  clip-path: polygon(96% 0, 100% 50%, 96% 100%, 0% 100%, 4% 50%, 0% 0%);
`

export const Wizard = () => {
  return (
    <Container>
      <Step isActive>
        <Icon icon='FaUpload' />
        <span>Upload data</span>
      </Step>

      <Step isActive>
        <Icon icon='FaFootballBall' />
        <span>Player status</span>
      </Step>

      <Step isActive>
        <Icon icon='FaStar' />
        <span>Favorite</span>
      </Step>

      <Step isActive>
        <Icon icon='FaCheck' />
        <span>Complete</span>
      </Step>
    </Container>
  )
}
