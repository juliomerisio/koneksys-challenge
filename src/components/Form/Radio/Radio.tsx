import React, { InputHTMLAttributes } from 'react'
import { FiCheck } from 'react-icons/fi'

import { Item } from './Radio.styled'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Radio: React.FC<RadioProps> = (props) => {
  const { id } = props

  return (
    <Item>
      <input type='radio' name='radio-group' {...props} />
      <label htmlFor={id}>
        <FiCheck />
      </label>
    </Item>
  )
}
