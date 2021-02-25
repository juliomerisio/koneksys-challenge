import { Container } from './Upload.styled'

export const Upload = () => {
  return (
    <Container>
      <input id='my-file' type='file' />
      <label htmlFor='my-file'>Select a File</label>
    </Container>
  )
}
