/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { space, SpaceProps, variant } from 'styled-system'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpaceProps {
  variant?: keyof typeof variants['variants']
}

const variants = {
  variants: {
    accent: {
      backgroundColor: 'accent',
      color: 'white',
      borderColor: 'transparent',
      '&:focus': {
        color: 'white',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: 'white',
        backgroundColor: 'blackOpacity',
        borderColor: 'transparent',
      },
    },
    border: {
      border: '1px solid',
      borderColor: 'borderGray',
      color: 'black',
      '&:focus': {
        color: 'black',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        color: 'white',
        backgroundColor: 'blackOpacity',
        borderColor: 'transparent',
      },
    },
    icon: {
      color: 'black',
      '&:hover': {
        backgroundColor: 'lightGray',
      },
    },
  },
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  height: 37px;
  border-radius: 8px;

  font-size: 14px;
  ${variant(variants)}

  ${space}
`

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

Button.defaultProps = {
  variant: 'accent',
}
