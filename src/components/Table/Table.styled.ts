import styled from 'styled-components'

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  border: 1px solid #eee;
  font-size: 12px;
  border-radius: 8px;
`

export const Columns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  font-size: 12px;

  font-weight: 400;
  color: ${(props) => props.theme.colors.lightestGray};
  span {
    display: flex;
    justify-content: center;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`
export const RowsContainer = styled.div`
  width: 100%;
  max-height: 183px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`
