const theme = {
  title: 'default',
  colors: {
    black: '#1F1F1F',
    white: '#FFFFFF',
    gray: '#FDFDFD',
    lightGray: '#F8F8F8',
    favorite: '#ECBA17',
    lightestGray: '#8C8C8C',
    borderGray: '#E8E8E8',
    accent: '#2F54D0',
    blackOpacity: 'hsla(0, 0%, 12%, 0.2)',
    error: '#FF0000',
  },
  fonts: {
    Poppins: 'Poppins',
    SofiaPro: 'Sofia Pro',
  },
} as const

export type MyTheme = typeof theme

export default theme
