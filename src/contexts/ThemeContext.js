import React from 'react'
import propTypes from 'prop-types'
import { ThemeProvider as EmotionProvider } from 'emotion-theming'

export const ThemeContext = React.createContext({})

const fontFamily = '\'Raleway\', sans-serif'

const colors = {
  black: '#312D2E',
  white: '#fafafa'
}

export const ThemeProvider = ({ children }) => {
  const [isDark, toggleDarkMode] = React.useState(true)

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      <EmotionProvider theme={{ isDark, colors, fontFamily }}>
        {children}
      </EmotionProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired
}

export const getPrimaryColor = ({ theme }) => theme.isDark ? theme.colors.white : theme.colors.black
export const getSecondaryColor = ({ theme }) => theme.isDark ? theme.colors.black : theme.colors.white
export const getFontFamily = ({ theme }) => theme.fontFamily

export const useThemeContext = () => React.useContext(ThemeContext)
