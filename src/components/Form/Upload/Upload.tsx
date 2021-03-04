import { useParseCSV } from 'hooks'
import { CSVData } from 'hooks/useParseCSV'

import { Container } from './Upload.styled'

interface UploadProps {
  onSuccess: (data: CSVData) => void
  onError: (errors: Array<string>) => void
  label?: string
}

export const Upload = ({
  onSuccess,
  onError,
  label = 'Select a File',
}: UploadProps) => {
  const onParseCSV = useParseCSV({
    onSuccess,
    onError,
  })

  return (
    <Container>
      <input
        id='my-file'
        type='file'
        onChange={onParseCSV}
        data-cy='file-input'
      />
      <label htmlFor='my-file'>{label}</label>
    </Container>
  )
}
