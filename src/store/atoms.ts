import { atom } from 'recoil'

import { CSVData } from '../hooks/useParseCSV'

interface WizardAtomState {
  hasError: Array<string>
  active: Array<string>
  actual: string
}

export const WizardAtom = atom<WizardAtomState>({
  key: 'WizardAtom',
  default: {
    hasError: [],
    active: ['Upload Data'],
    actual: 'Upload Data',
  },
})

export const DashboardDataAtom = atom<CSVData['data']>({
  key: 'DashboardDataAtom',
  default: [],
})

export const FavoritePlayerAtom = atom<string>({
  key: 'FavoriteAtom',
  default: '',
})

export const ModalAtom = atom<boolean>({
  key: 'ModalAtom',
  default: false,
})

interface CSVAtomType {
  data: CSVData
  errors: string[]
}

export const CSVAtom = atom<CSVAtomType>({
  key: 'CSVAtom',
  default: {
    data: {
      data: [],
      fileInfo: {
        name: '',
        size: 0,
        type: '',
      },
    },
    errors: [],
  },
})

export const TitleAtom = atom<string>({
  key: 'TitleAtom',
  default: '',
})
