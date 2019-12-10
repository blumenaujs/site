import React, { useContext } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import propTypes from 'prop-types'
import { useSetState } from 'react-use'
import { useThemeContext } from './ThemeContext'

export const SectionsContext = React.createContext({})

export const SectionsProvider = ({ children }) => {
  const [{ isLast, currentSection }, setState] = useSetState({
    currentSection: 0,
    isLast: false
  })

  const setSection = section => {
    setState({ currentSection: section })
  }

  const toggleIsLast = isLast => {
    setState({ isLast })
  }

  return (
    <SectionsContext.Provider
      value={{
        setSection,
        toggleIsLast,
        isLast,
        currentSection
      }}
    >
      {children}
    </SectionsContext.Provider>
  )
}

SectionsProvider.propTypes = {
  children: propTypes.node.isRequired
}

export const useSectionsContext = () => useContext(SectionsContext)

export const useSection = length => {
  const { isDark, toggleDarkMode } = useThemeContext()
  const { currentSection, setSection, toggleIsLast } = useSectionsContext()

  const fowardToNextSection = () => {
    const isLastSection = currentSection === length - 1
    const nextSection = isLastSection ? 0 : currentSection + 1

    setSection(nextSection)
  }

  const backToPreviousSection = () => {
    const isFirst = currentSection === 0
    const previousSection = isFirst ? length - 1 : currentSection - 1

    setSection(previousSection)
  }

  const handleCallback = event => {
    const theNextIsLast = currentSection + 1 === length - 1

    toggleDarkMode(!isDark)
    toggleIsLast(theNextIsLast)

    if (event.deltaY > 0) {
      fowardToNextSection()
    } else {
      backToPreviousSection()
    }
  }

  const [debouncedCallback] = useDebouncedCallback(handleCallback, 100)

  return [debouncedCallback, currentSection]
}
