import React, { InputHTMLAttributes } from 'react'
import { useTheme } from 'styled-components'
import { MaxWidthProps } from 'styled-system'

import { Icon } from '../../index'
import { Label } from './TextField.styled'

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    MaxWidthProps {
  success?: boolean
  failure?: boolean
}

export const TextField: React.FC<TextFieldProps> = (props) => {
  const { success, failure, maxWidth } = props
  const { colors } = useTheme()

  return (
    <Label maxWidth={maxWidth}>
      <input {...props} />
      {success && <Icon icon='FaCheck' color={colors.accent} />}
      {failure && <Icon icon='FaTimes' size={18} color={colors.error} />}
    </Label>
  )
}
