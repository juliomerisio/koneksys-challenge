import { Button, ModalFooter } from 'components'
import { useLogger, useResetValues, useWizardSteps } from 'hooks'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { CSVAtom, DashboardDataAtom, ModalAtom } from 'store/atoms'
import { selectorCSV } from 'store/selectors'
import styled from 'styled-components'

import { Container } from './UploadData'

export const Complete = () => {
  const logger = useLogger('Complete')
  const reset = useResetValues()

  const getCSVAtom = useRecoilValue(CSVAtom)
  const getDashboardData = useRecoilValue(selectorCSV)

  const setIsModalOpen = useSetRecoilState(ModalAtom)
  const setDashboardData = useSetRecoilState(DashboardDataAtom)

  const { onPrevious } = useWizardSteps({
    previous: 'Favorite',
    next: 'Complete',
  })

  const handleFinish = () => {
    setDashboardData(getCSVAtom.data.data)
    setIsModalOpen(false)
    reset()
  }

  logger.info('Data', getDashboardData)

  return (
    <>
      <Container>
        <label htmlFor='table'>Summary</label>

        <Review>
          <div>
            <span>
              <small>Data</small> <strong>{getDashboardData.fileName}</strong>
            </span>
            <span>
              <small>Team</small> <strong>{getDashboardData.name}</strong>
            </span>
            <span>
              <small>Favorite Player</small>{' '}
              <strong>{getDashboardData.favorite}</strong>
            </span>
          </div>

          <div>
            <span>
              <small>Active</small> <strong>{getDashboardData.active}</strong>
            </span>
            <span>
              <small>Injured</small> <strong>{getDashboardData.injured}</strong>
            </span>
            <span>
              <small>Practice Squad</small>{' '}
              <strong>{getDashboardData.practice}</strong>
            </span>
            <span>
              <small>Suspended</small>{' '}
              <strong>{getDashboardData.suspended}</strong>
            </span>
          </div>
        </Review>
      </Container>

      <ModalFooter>
        <Button variant='border' onClick={onPrevious}>
          Back
        </Button>
        <Button variant='accent' onClick={handleFinish}>
          Continue
        </Button>
      </ModalFooter>
    </>
  )
}

const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:first-child {
    margin-top: 27px;
  }
  > div {
    display: flex;
    width: 100%;
    margin-bottom: 31px;
    > span {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      strong {
        font-weight: 500;
      }
      small {
        font-weight: 300;
      }
    }
  }
`
