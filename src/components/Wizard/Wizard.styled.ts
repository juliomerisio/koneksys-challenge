import styled from 'styled-components'

export const Container = styled.div`
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
