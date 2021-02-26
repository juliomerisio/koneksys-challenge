import React from 'react'
import styled from 'styled-components'

import { Button } from '../../Button'
import { ModalFooter } from '../../Modal/ModalFooter'
import { Container } from './UploadData'
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

export const Complete = () => {
  const { onPrevious } = useWizardSteps({
    previous: 'Favorite',
    next: 'Complete',
  })

  return (
    <>
      <Container>
        <label htmlFor='table'>Summary</label>

        <Review>
          <div>
            <span>
              <small>Data</small> <strong>hello</strong>
            </span>
            <span>
              <small>Team</small> <strong>hello</strong>
            </span>
            <span>
              <small>Favorite Player</small> <strong>hello</strong>
            </span>
          </div>

          <div>
            <span>
              <small>Active</small> <strong>hello</strong>
            </span>
            <span>
              <small>Injured</small> <strong>hello</strong>
            </span>
            <span>
              <small>Practice Squad</small> <strong>hello</strong>
            </span>
            <span>
              <small>Suspended</small> <strong>hello</strong>
            </span>
          </div>
        </Review>
      </Container>

      <ModalFooter>
        <Button variant='border' onClick={onPrevious}>
          Back
        </Button>
        <Button variant='accent'>Continue</Button>
      </ModalFooter>
    </>
  )
}
