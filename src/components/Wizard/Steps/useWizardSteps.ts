import { useSetRecoilState } from 'recoil'

import { WizardAtom } from '../Wizard'

interface WizardStepsProps {
  next: string
  previous: string
}

export const useWizardSteps = ({ next, previous }: WizardStepsProps) => {
  const set = useSetRecoilState(WizardAtom)

  const handlePrevious = () => {
    set((prev) => ({
      ...prev,
      actual: previous,
    }))
  }

  const handleNext = () => {
    set((prev) => ({
      ...prev,
      active: [...prev.active, next],
      actual: next,
    }))
  }

  return {
    onNext: handleNext,
    onPrevious: handlePrevious,
  }
}
