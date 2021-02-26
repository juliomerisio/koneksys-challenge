import React from 'react'

import { Label } from './styles'

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {}

export const TextField: React.FC<TextFieldProps> = (props) => {
  // const ref = useRef<HTMLInputElement | null>(null)

  return (
    <Label>
      <input {...props} />
    </Label>
  )
}
