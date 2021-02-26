import { Icon } from 'components'
import { atom, useRecoilValue } from 'recoil'

import { IconProps } from '../Icon/types'
import { Step } from './Step'
import { Container } from './Wizard.styled'

interface WizardAtomState {
  hasError: Array<string>
  active: Array<string>
  actual: string
}

export const WizardAtom = atom<WizardAtomState>({
  default: {
    hasError: [],
    active: ['Upload Data'],
    actual: 'Upload Data',
  },
  key: 'WizardAtom',
})

export const Wizard = () => {
  const get = useRecoilValue(WizardAtom)

  return (
    <Container>
      {stepsConfig.map(({ key, icon }) => (
        <Step
          key={key}
          variant={
            // eslint-disable-next-line no-nested-ternary
            get.hasError.includes(key)
              ? 'error'
              : get.active.includes(key)
              ? 'active'
              : 'default'
          }
        >
          <Icon icon={icon} />
          <span>{key}</span>
        </Step>
      ))}
    </Container>
  )
}

const stepsConfig: Array<{ key: string; icon: IconProps['icon'] }> = [
  {
    key: 'Upload Data',
    icon: 'FaUpload',
  },
  {
    key: 'Player status',
    icon: 'FaFootballBall',
  },
  {
    key: 'Favorite',
    icon: 'FaStar',
  },

  {
    key: 'Complete',
    icon: 'FaCheck',
  },
]
