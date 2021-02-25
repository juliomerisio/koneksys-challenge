import { memo } from 'react'

import { icons } from './icons'
import { IconProps } from './types'

const Icon = ({ icon, ...props }: IconProps) => {
  const Component = icons[icon]

  return <Component {...props} />
}
export default memo(Icon)
