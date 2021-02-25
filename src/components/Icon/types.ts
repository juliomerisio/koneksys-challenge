import { IconBaseProps } from 'react-icons'

import { icons } from './icons'

export interface IconProps extends IconBaseProps {
  icon: keyof typeof icons
}
