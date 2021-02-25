import styled from 'styled-components'

import { useLogger } from '../hooks'
import { Radio } from './Form/Radio/Radio'
import Select from './Form/Select/Select'

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
  color: ${(props) => props.theme.colors.lightestGray};
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`
const RowsContainer = styled.div`
  width: 100%;
  max-height: 183px;
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
  const logger = useLogger('Table')

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
          <Select
            selectorName='placeholder'
            data={[{ label: 'test', value: 'test', id: '1' }]}
            currentData={null}
            onChange={(value, item) => logger.info(value, item)}
          />
          <span>
            <Radio />
            Heii
          </span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
          <span>Heii</span>
        </Row>
      </RowsContainer>
    </Container>
  )
}
