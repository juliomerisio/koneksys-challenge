import styled from 'styled-components'

const Row = styled.div`
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

const Columns = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  font-size: 12px;

  font-weight: 400;
  color: #eee;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const RowsContainer = styled.div`
  width: 100%;
  max-height: 220px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
`
// const columns = [{}]
// const rows = [{}]

export const Table = () => {
  return (
    <Container>
      <Columns>
        <span>Heii</span>
        <span>Heii</span>
        <span>Heii</span>
        <span>Heii</span>
        <span>Heii</span>
      </Columns>
      <RowsContainer>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
        <Row>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
      </RowsContainer>
    </Container>
  )
}
