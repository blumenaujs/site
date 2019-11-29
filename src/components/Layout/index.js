import React from 'react'
import propTypes from 'prop-types'
import Header from '@/components/Header'

import Styled from './styled'
import { useThemeContext } from '@/contexts/ThemeContext'

const Layout = ({ children }) => {
  const { isDark } = useThemeContext()

  return (
    <Styled.Container isDark={isDark}>
      <Header />
      {children}
    </Styled.Container>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  isDark: propTypes.bool
}

export default Layout
