import React from 'react'

import { Label } from './styles'

interface TextFieldProps {}

export const TextField: React.FC<TextFieldProps> = () => {
  // const ref = useRef<HTMLInputElement | null>(null)

  return (
    <Label>
      Something
      <input />
    </Label>
  )
}
