import React, { useEffect, useCallback, useRef } from 'react'

import { FullScreen } from './Modal.styled'

interface ModalProps {
  isOpen: boolean
  onClose: VoidFunction
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, onClose, children } = props

  const modal = useRef<HTMLDivElement | null>(null)

  const handleKeyUp = useCallback(
    (keyboardEvent: KeyboardEvent) => {
      const keys: { [key: number]: VoidFunction } = {
        27: () => {
          keyboardEvent.preventDefault()
          onClose()
          window.removeEventListener('keyup', handleKeyUp, false)
        },
      }

      if (keys[keyboardEvent.keyCode]) {
        keys[keyboardEvent.keyCode]()
      }
    },
    [onClose]
  )

  const handleOutsideClick = useCallback(
    (e) => {
      if (modal?.current?.parentNode === e.target) {
        onClose()
        document.removeEventListener('click', handleOutsideClick, false)
      }
    },
    [onClose]
  )

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false)
    document.addEventListener('click', handleOutsideClick, false)

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false)
      document.removeEventListener('click', handleOutsideClick, false)
    }
  }, [handleKeyUp, handleOutsideClick, isOpen])

  return (
    <FullScreen isOpen={isOpen ? 1 : 0} data-testid='modal'>
      <div ref={modal}>{children}</div>
    </FullScreen>
  )
}
