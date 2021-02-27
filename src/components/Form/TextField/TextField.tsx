import React, { InputHTMLAttributes } from 'react'

import { Label } from './TextField.styled'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { label } = props

  return (
    <Label>
      {label && <span>{label}</span>}
      <input {...props} />
    </Label>
  )
}
