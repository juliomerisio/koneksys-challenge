import { useState } from 'react'

import DebugLogger from '../services/DebugLogger'

export default function useLogger(componentName: string): DebugLogger {
  const [logger] = useState(new DebugLogger(componentName))

  return logger
}
