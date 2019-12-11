import React, { Children, useRef } from 'react'
import propTypes from 'prop-types'
import { useMount, useUnmount } from 'react-use'

import { Header, Footer } from '@/components'
import { useSection } from '@/contexts/SectionContext'

import Styled from './styled'
import { Section } from './Section'

const renderChild = current => (child, index) =>
  React.cloneElement(child, { visible: current === index })

const linkFromChild = ({ props }, index) => ({
  label: props.label,
  section: index
})

const createLinks = children => Children.map(children, linkFromChild)

const Layout = ({ children }) => {
  const ref = useRef()
  const [handleWheel, currentSection] = useSection(children.length)

  useMount(() => {
    ref.current.addEventListener('wheel', handleWheel)
  })

  useUnmount(() => {
    ref.current.removeEvent('wheel', handleWheel)
  })

  return (
    <Styled.Container ref={ref}>
      <Header links={createLinks(children)} />
      {Children.map(children, renderChild(currentSection))}
      <Footer />
    </Styled.Container>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  isDark: propTypes.bool
}

Layout.Section = Section

export { Layout }
