import React, { useContext } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import propTypes from 'prop-types'
import { useSetState } from 'react-use'

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
  const { currentSection, setSection, toggleIsLast } = useSectionsContext()

  const fowardToNextSection = () => {
    const isLastSection = currentSection === length - 1
    const nextSection = isLastSection ? 0 : currentSection + 1
    const theNextIsLastSection = nextSection === length - 1

    toggleIsLast(theNextIsLastSection)
    setSection(nextSection)
  }

  const backToPreviousSection = () => {
    const isFirst = currentSection === 0
    const previousSection = isFirst ? length - 1 : currentSection - 1

    toggleIsLast(isFirst)
    setSection(previousSection)
  }

  const handleCallback = event => {
    if (event.deltaY > 0) {
      fowardToNextSection()
    } else {
      backToPreviousSection()
    }
  }

  const [debouncedCallback] = useDebouncedCallback(handleCallback, 100)

  return [debouncedCallback, currentSection]
}
