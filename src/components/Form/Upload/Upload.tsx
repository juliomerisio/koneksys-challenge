import { useLogger } from '../../../hooks'
import { useParseCSV } from '../../../utils/csvParser'
import { Container } from './Upload.styled'

export const Upload = () => {
  const logger = useLogger('Upload')

  const onParseCSV = useParseCSV({
    onSuccess: (data) => logger.info('data', data),
    onError: (errors) => logger.info('errors', errors),
  })

  return (
    <Container>
      <input id='my-file' type='file' onChange={onParseCSV} />
      <label htmlFor='my-file'>Select a File</label>
    </Container>
  )
}
