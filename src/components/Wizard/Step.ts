import styled from 'styled-components'
import { variant } from 'styled-system'

const variants = {
  variants: {
    active: {
      backgroundColor: 'accent',
      color: 'white',
    },
    error: {
      backgroundColor: 'error',
      color: 'white',
    },
  },
}

export const Step = styled.div<{ variant: keyof typeof variants['variants'] }>`
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

  svg {
    margin-right: 9px;
  }

  clip-path: polygon(96% 0, 100% 50%, 96% 100%, 0% 100%, 4% 50%, 0% 0%);

  ${variant(variants)}
`
