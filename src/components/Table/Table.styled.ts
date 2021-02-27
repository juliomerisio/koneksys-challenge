import styled from 'styled-components'

export const Row = styled.div<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;

  font-size: 12px;
  border-radius: 8px;

  border: ${(props) =>
    props.isActive
      ? `1px solid ${props.theme.colors.favorite}`
      : '1px solid #eee'};

  background: ${(props) =>
    props.isActive ? props.theme.colors.lightGray : 'unset'};

  span {
    padding: 0 10px;
    max-width: 80px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:last-child {
    max-width: unset;

    overflow: visible;
  }
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
    padding: 0 10px;
    max-width: 80px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span:last-child {
    max-width: unset;

    overflow: visible;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`
export const RowsContainer = styled.div<{
  isDashboard: boolean
}>`
  width: 100%;
  max-height: ${(props) => (props.isDashboard ? '540px' : '183px')};

  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`
