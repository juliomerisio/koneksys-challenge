import * as PapaParse from 'papaparse'
import { head, mergeAll, tail } from 'ramda'
import React from 'react'

import { nonEmpty } from './nonEmpty'

type CSVData = Array<Record<string, unknown>>

interface UseParseCSVProps {
  onSuccess: (data: Array<CSVData>) => void
  onError: (errors: Array<string>) => void
}

export const useParseCSV = ({ onSuccess, onError }: UseParseCSVProps) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader: FileReader = new FileReader()
    const { files } = event.target

    const allowedMimeTypes = ['text/csv']

    if (!files) return

    const file = files[0]

    const fileInfo = {
      name: file.name,
      size: file.size,
      type: file.type,
    }

    if (!allowedMimeTypes.includes(fileInfo.type)) {
      onError([
        `Accept type not respected: got '${fileInfo.type}' but not in text/csv`,
      ])

      return
    }

    reader.onload = (_event: Event) => {
      const csvData = PapaParse.parse(reader.result as string, {
        error: (err) => onError([err.message]),
        encoding: 'UTF-8',
      })

      if (Array.isArray(csvData?.data)) {
        const columns = head<Array<string>>(csvData?.data)
        const rows = tail(csvData?.data)

        if (!columns) return

        const indexNextedValues = (
          acc: Array<CSVData>,
          value: string,
          index: number
        ) => mergeAll([acc, { [columns[index]]: value }])

        const parser = rows.reduce((acc, value) => {
          const parseNested = value.reduce(indexNextedValues, [])

          return [...acc, parseNested]
        }, [])

        const findErrors = parser
          .map(nonEmpty)
          .find((errors: Array<string>) => errors.length > 0)

        onSuccess(parser)
        onError(findErrors)
      }
    }

    reader.readAsText(file, 'UTF-8')
  }
}
