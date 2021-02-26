import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'

import { WizardAtom } from '../Wizard'
import { Complete } from './Complete'
import { Favorite } from './Favorite'
import { PlayerStatus } from './PlayerStatus'
import { UploadData } from './UploadData'

export const Steps = () => {
  const get = useRecoilValue(WizardAtom)

  return <>{steps[get.actual]}</>
}

const steps: { [key: string]: ReactElement } = {
  'Upload Data': <UploadData />,
  'Player status': <PlayerStatus />,
  Favorite: <Favorite />,
  Complete: <Complete />,
}
