import React from 'react'
import propTypes from 'prop-types'

export const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  const [isDark, toggleDarkMode] = React.useState(true)

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDarkMode
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: propTypes.node.isRequired
}

export const useThemeContext = () => React.useContext(ThemeContext)
