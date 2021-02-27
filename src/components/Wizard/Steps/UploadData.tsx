import { Button, Icon, TextField, Upload, ModalFooter } from 'components'
import { debounce } from 'helpers/debounce'
import { useWizardSteps } from 'hooks'
import { CSVData } from 'hooks/useParseCSV'
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { CSVAtom, TitleAtom, WizardAtom } from 'store/atoms'
import styled from 'styled-components'

export const UploadData = () => {
  const [get, set] = useRecoilState(CSVAtom)
  const [getTitle, setTitle] = useRecoilState(TitleAtom)

  const setWizard = useSetRecoilState(WizardAtom)

  const { onNext } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Player status',
  })

  const handleError = (errors: string[]) => {
    set((prev) => ({ ...prev, errors }))

    if (errors?.length > 0) {
      setWizard((prev) => ({
        ...prev,
        active: ['Upload Data'],
        hasError: ['Upload Data'],
      }))
    }
  }

  const handleSuccess = (data: CSVData) => {
    set((prev) => ({ ...prev, data }))

    setWizard((prev) => ({
      ...prev,
      hasError: [],
    }))
  }

  const hasErrors = get.errors?.length > 0

  const hasData = get.data.data?.length > 0

  const hasTitle = getTitle.length

  return (
    <>
      <Container>
        {hasErrors && (
          <>
            <TextField
              defaultValue={get.data.fileInfo.name || 'File format Invalid'}
              aria-disabled
            />
            <span>
              <span>
                <Icon icon='FaTimes' size={10} />
              </span>
              <small>Missing Value</small>
            </span>
            <ErrorMessage>
              One of records has a missing value for one of the columns. Please
              ensure your .csv has complete information.
            </ErrorMessage>
          </>
        )}

        {!hasErrors && hasData && (
          <Section>
            <TextField
              defaultValue={get.data.fileInfo.name}
              aria-disabled
              label='Upload Data'
            />

            <TextField
              aria-disabled
              label='Team Name'
              defaultValue={getTitle}
              onChange={(event) => {
                const { value } = event.target
                debounce({
                  action: setTitle,
                  value,
                  delay: 200,
                })
              }}
            />
          </Section>
        )}

        {!hasErrors && !hasData && (
          <>
            <label htmlFor='table'>Upload Data</label>
            <Upload onSuccess={handleSuccess} onError={handleError} />

            <p style={{ marginTop: '17px' }}>File must be in .csv format</p>
          </>
        )}
      </Container>

      <ModalFooter>
        {hasErrors ? (
          <Upload
            onSuccess={handleSuccess}
            onError={handleError}
            label='Re-Upload File'
          />
        ) : (
          <Button
            onClick={onNext}
            disabled={(hasErrors && !hasData) || !hasTitle}
          >
            Continue
          </Button>
        )}
      </ModalFooter>
    </>
  )
}

export const Container = styled.div`
  height: 100%;
  padding: 0 32px;
  > span {
    display: flex;
    align-items: center;
    margin-top: 18px;

    span {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: red;
      display: flex;
      align-items: center;
      justify-content: center;

      margin-right: 8px;
    }
    svg {
      color: white;
    }
  }
`

const ErrorMessage = styled.p`
  margin-top: 17px;
  font-size: 14px;
  font-weight: 400;
`

const Section = styled.section`
  max-width: 323px;
`
