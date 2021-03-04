import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'
import Scrollbar from 'react-smooth-scrollbar'

import {
  Container,
  Current,
  List,
  Button,
  Search,
  Selected,
} from './Select.styled'

export type SelectData = {
  label: string
  value: string
  id: string
}

interface Props {
  selectorName: string
  data: SelectData[]
  currentData: SelectData
  selectPlaceholder?: string
  onChange: (selectorName: string, item: SelectData) => void
}

export const Select: React.FC<Props> = ({
  selectorName,
  data = [],
  currentData = {
    label: '',
    value: '',
    id: '',
  },
  selectPlaceholder,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSearch, setIsSearch] = useState(false)
  const [search, setSearch] = useState<SelectData[]>([])
  const selectRef = useRef<HTMLDivElement | null>(null)
  const [current, setCurrent] = useState<SelectData>(currentData)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectRef.current) {
      if (!selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsSearch(false)
        setSearch([])
      }
    }
  }, [])

  const handleClickSelect = () => setIsOpen(true)

  const handleInputFilter = (value: string) => {
    if (value.length > 0) {
      setIsSearch(true)

      const searchValue = data.filter((country: SelectData) =>
        country.label.toLowerCase().includes(value.toLowerCase())
      )

      setSearch(searchValue)

      return
    }

    setSearch([])
    setIsSearch(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isOpen, handleClickOutside])

  return (
    <Container ref={selectRef} isOpen={isOpen}>
      <Current
        isActive={isOpen}
        onClick={handleClickSelect}
        disabled={data.length === 0}
      >
        <>
          {isOpen ? (
            <Search>
              <input
                type='text'
                placeholder='Placeholder'
                onChange={(event) => handleInputFilter(event.target.value)}
              />
              <FiSearch />
            </Search>
          ) : (
            <Selected>
              {!current && selectPlaceholder}
              <span data-testid='value'>{current?.label}</span>

              <FiChevronDown size={18} />
            </Selected>
          )}
        </>
      </Current>

      <List isOpen={isOpen} aria-label='custom-select'>
        <Scrollbar alwaysShowTracks continuousScrolling={false}>
          {!isSearch ? (
            <>
              {data.map((item: SelectData) => (
                <li key={item.id}>
                  <Button
                    data-testid={`option-${item.id}`}
                    onClick={() => {
                      setCurrent(item)
                      onChange(selectorName, item)
                      setIsOpen(false)
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </>
          ) : (
            <>
              {search.map((item: SelectData) => (
                <li key={item.id}>
                  <Button
                    data-testid={`option-${item.id}`}
                    onClick={() => {
                      onChange(selectorName, item)
                      setIsOpen(false)
                      setIsSearch(false)
                    }}
                  >
                    {item.label}
                  </Button>
                </li>
              ))}
            </>
          )}
        </Scrollbar>
      </List>
    </Container>
  )
}
