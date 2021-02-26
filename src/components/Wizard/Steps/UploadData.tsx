import React from 'react'
import { atom, useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { CSVData } from '../../../hooks/useParseCSV'
import { debounce } from '../../../utils/debounce'
import { Button } from '../../Button'
import { TextField } from '../../Form/TextField/TextField'
import { Upload } from '../../Form/Upload/Upload'
import { Icon } from '../../index'
import { ModalFooter } from '../../Modal/ModalFooter'
import { WizardAtom } from '../Wizard'
import { useWizardSteps } from './useWizardSteps'

export const Container = styled.div`
  height: 100%;
  padding: 0 32px;
  p {
    margin-top: 17px;
    font-size: 14px;
    font-weight: 400;
  }
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

interface CSVAtomType {
  data: CSVData
  errors: string[]
}

export const CSVAtom = atom<CSVAtomType>({
  key: 'CSVAtom',
  default: {
    data: {
      data: [],
      fileInfo: {
        name: '',
        size: 0,
        type: '',
      },
    },
    errors: [],
  },
})

export const TitleAtom = atom<string>({
  key: 'TitleAtom',
  default: '',
})

export const UploadData = () => {
  const { onNext } = useWizardSteps({
    previous: 'Upload Data',
    next: 'Player status',
  })

  const [get, set] = useRecoilState(CSVAtom)

  const [getTitle, setTitle] = useRecoilState(TitleAtom)

  const setWizard = useSetRecoilState(WizardAtom)

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
            <TextField defaultValue={get.data.fileInfo.name} aria-disabled />
            <span>
              <span>
                <Icon icon='FaTimes' size={10} />
              </span>
              <small>Missing Value</small>
            </span>
            <p>
              One of records has a missing value for one of the columns. Please
              ensure your .csv has complete information.
            </p>
          </>
        )}

        {!hasErrors && hasData && (
          <>
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
          </>
        )}

        {!hasErrors && !hasData && (
          <>
            <label htmlFor='table'>Upload Data</label>
            <Upload onSuccess={handleSuccess} onError={handleError} />

            <p>File must be in .csv format</p>
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
