import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { WizardAtom } from 'store/atoms'

import { Complete } from './Complete'
import { Favorite } from './Favorite'
import { PlayerStatus } from './PlayerStatus'
import { UploadData } from './UploadData'

export const Steps = () => {
  const getWizard = useRecoilValue(WizardAtom)

  return <>{steps[getWizard.actual]}</>
}

const steps: { [key: string]: ReactElement } = {
  'Upload Data': <UploadData />,
  'Player status': <PlayerStatus />,
  Favorite: <Favorite />,
  Complete: <Complete />,
}
