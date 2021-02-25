import { Icon } from 'components'

import { Step } from './Step'
import { Container } from './Wizard.styled'

export const Wizard = () => {
  return (
    <Container>
      <Step variant='error'>
        <Icon icon='FaUpload' />
        <span>Upload data</span>
      </Step>

      <Step variant='active'>
        <Icon icon='FaFootballBall' />
        <span>Player status</span>
      </Step>

      <Step variant='active'>
        <Icon icon='FaStar' />
        <span>Favorite</span>
      </Step>

      <Step variant='active'>
        <Icon icon='FaCheck' />
        <span>Complete</span>
      </Step>
    </Container>
  )
}
