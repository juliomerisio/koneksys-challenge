import { useResetRecoilState } from 'recoil'

import { FavoriteAtom } from '../components/Wizard/Steps/Favorite'
import { CSVAtom } from '../components/Wizard/Steps/UploadData'
import { WizardAtom } from '../components/Wizard/Wizard'
import { ModalAtom } from './Dashboard'

export const useResetValues = () => {
  const setOpen = useResetRecoilState(ModalAtom)
  const setCSVAtom = useResetRecoilState(CSVAtom)
  const setWizard = useResetRecoilState(WizardAtom)
  const setFavorite = useResetRecoilState(FavoriteAtom)

  return () => {
    setWizard()
    setCSVAtom()
    setOpen()
    setFavorite()
  }
}
