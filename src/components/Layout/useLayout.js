import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useThemeContext } from '@/contexts/ThemeContext'

const useLayout = length => {
  const { isDark, toggleDarkMode } = useThemeContext()
  const [section, setSection] = useState(0)

  const handleCallback = event => {
    toggleDarkMode(!isDark)
    if (event.deltaY > 0) {
      if (section === length - 1) {
        setSection(0)
      } else {
        setSection(section + 1)
      }
    } else {
      if (section === 0) {
        setSection(length - 1)
      } else {
        setSection(section - 1)
      }
    }
  }

  const [debouncedCallback] = useDebouncedCallback(handleCallback, 100)

  return [debouncedCallback, section]
}

export default useLayout
