import { IconBaseProps } from 'react-icons'
import {
  FaCheck,
  FaFootballBall,
  FaStar,
  FaTimes,
  FaUpload,
} from 'react-icons/fa'

export const icons = {
  FaUpload: (props: IconBaseProps) => <FaUpload {...props} />,
  FaFootballBall: (props: IconBaseProps) => <FaFootballBall {...props} />,
  FaStar: (props: IconBaseProps) => <FaStar {...props} />,
  FaCheck: (props: IconBaseProps) => <FaCheck {...props} />,
  FaTimes: (props: IconBaseProps) => <FaTimes {...props} />,
}
