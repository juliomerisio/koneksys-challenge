import { selector } from 'recoil'

import { CSVAtom, FavoritePlayerAtom, TitleAtom } from './atoms'

export const selectorCSV = selector({
  key: 'selectorCSV',
  get: ({ get }) => {
    const csvJSON = get(CSVAtom)
    const name = get(TitleAtom)
    const favorite = get(FavoritePlayerAtom)

    const active = csvJSON.data.data.filter(
      (player) => player?.Status === 'Active'
    )?.length

    const injured = csvJSON.data.data.filter(
      (player) => player?.Status === 'Injured'
    )?.length

    const practice = csvJSON.data.data.filter(
      (player) => player?.Status === 'Practice'
    )?.length

    const suspended = csvJSON.data.data.filter(
      (player) => player?.Status === 'Suspended'
    )?.length

    return {
      suspended,
      practice,
      injured,
      active,
      name,
      fileName: csvJSON.data.fileInfo.name,
      favorite,
    }
  },
})
