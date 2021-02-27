import { useResetRecoilState } from 'recoil'
import { CSVAtom, FavoritePlayerAtom, ModalAtom, WizardAtom } from 'store/atoms'

export const useResetValues = () => {
  const setModalIsOpen = useResetRecoilState(ModalAtom)
  const setCSVAtom = useResetRecoilState(CSVAtom)
  const setWizard = useResetRecoilState(WizardAtom)
  const setFavoritePlayer = useResetRecoilState(FavoritePlayerAtom)

  return () => {
    setWizard()
    setCSVAtom()
    setModalIsOpen()
    setFavoritePlayer()
  }
}
