import { useResetRecoilState } from 'recoil'
import { CSVAtom, ModalAtom, WizardAtom } from 'store/atoms'

export const useResetValues = () => {
  const setCSVAtom = useResetRecoilState(CSVAtom)
  const setWizard = useResetRecoilState(WizardAtom)
  const setModalIsOpen = useResetRecoilState(ModalAtom)

  return () => {
    setWizard()
    setCSVAtom()
    setModalIsOpen()
  }
}
