import React from 'react'
import propTypes from 'prop-types'
import Header from '@/components/Header'
import { useDebouncedCallback } from 'use-debounce'

import Styled from './styled'
import Footer from '../Footer'
import { useThemeContext } from '../../contexts/ThemeContext'

const Layout = ({ children }) => {
  const { isDark, toggleDarkMode } = useThemeContext()
  const [debouncedCallback] = useDebouncedCallback(
    () => {
      console.log`Handling`
      toggleDarkMode(!isDark)
    },
    100
  )

  return (
    <Styled.Container onWheel={debouncedCallback}>
      <Header />
      <Styled.Content>
        {children}
      </Styled.Content>
      <Footer />
    </Styled.Container>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  isDark: propTypes.bool
}

export default Layout
