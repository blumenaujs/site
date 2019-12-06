import React, { Children, useRef } from 'react'
import propTypes from 'prop-types'
import Header from '@/components/Header'

import Styled from './styled'
import Footer from '../Footer'
import useLayout from './useLayout'
import { useMount, useUnmount } from 'react-use'

const renderChild = current => (child, index) =>
  React.cloneElement(child, { visible: current === index })

const Layout = ({ children }) => {
  const ref = useRef()
  const [handleWheel, currentSection] = useLayout(children.length)

  useMount(() => {
    ref.current.addEventListener('wheel', handleWheel)
  })

  useUnmount(() => {
    ref.current.removeEvent('wheel', handleWheel)
  })

  return (
    <Styled.Container ref={ref}>
      <Header />
      {Children.map(children, renderChild(currentSection))}
      <Footer />
    </Styled.Container>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  isDark: propTypes.bool
}

Layout.Content = Styled.Content

export default Layout
