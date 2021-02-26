import React, { InputHTMLAttributes } from 'react'

import { Label } from './styles'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { label } = props
  // const ref = useRef<HTMLInputElement | null>(null)

  return (
    <Label>
      {label && <span>{label}</span>}
      <input {...props} />
    </Label>
  )
}
