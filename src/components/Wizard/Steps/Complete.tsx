import React from 'react'
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { useLogger } from '../../../hooks'
import { CSVData } from '../../../hooks/useParseCSV'
import { ModalAtom } from '../../../pages/Dashboard'
import { useResetValues } from '../../../pages/useResetValues'
import { Button } from '../../Button'
import { ModalFooter } from '../../Modal/ModalFooter'
import { FavoriteAtom } from './Favorite'
import { Container, CSVAtom, TitleAtom } from './UploadData'
import { useWizardSteps } from './useWizardSteps'

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

const selectorCSV = selector({
  key: 'selectorCSV',
  get: ({ get }) => {
    const csvJSON = get(CSVAtom)
    const name = get(TitleAtom)
    const favorite = get(FavoriteAtom)

    const active = csvJSON.data.data.filter(
      (player) => player?.Status === 'Active'
    )?.length

    const injured = csvJSON.data.data.filter(
      (player) => player?.Status === 'Injured'
    )?.length

    const practice = csvJSON.data.data.filter(
      (player) => player?.Status === 'Practice'
    )?.length

    const suspended = csvJSON.data.data.filter(
      (player) => player?.Status === 'Suspended'
    )?.length

    return {
      suspended,
      practice,
      injured,
      active,
      name,
      fileName: csvJSON.data.fileInfo.name,
      favorite,
    }
  },
})

export const DashboardDataAtom = atom<CSVData['data']>({
  key: 'DashboardDataAtom',
  default: [],
})

export const Complete = () => {
  const logger = useLogger('Complete')
  const get = useRecoilValue(selectorCSV)
  const reset = useResetValues()

  const setModalIsOpen = useSetRecoilState(ModalAtom)

  const getCSVAtom = useRecoilValue(CSVAtom)

  const setDashboardData = useSetRecoilState(DashboardDataAtom)

  const { onPrevious } = useWizardSteps({
    previous: 'Favorite',
    next: 'Complete',
  })

  const handleFinish = () => {
    setDashboardData(getCSVAtom.data.data)
    setModalIsOpen(false)
    reset()
  }

  logger.info('Data', get)

  return (
    <>
      <Container>
        <label htmlFor='table'>Summary</label>

        <Review>
          <div>
            <span>
              <small>Data</small> <strong>{get.fileName}</strong>
            </span>
            <span>
              <small>Team</small> <strong>{get.name}</strong>
            </span>
            <span>
              <small>Favorite Player</small> <strong>{get.favorite}</strong>
            </span>
          </div>

          <div>
            <span>
              <small>Active</small> <strong>{get.active}</strong>
            </span>
            <span>
              <small>Injured</small> <strong>{get.injured}</strong>
            </span>
            <span>
              <small>Practice Squad</small> <strong>{get.practice}</strong>
            </span>
            <span>
              <small>Suspended</small> <strong>{get.suspended}</strong>
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
