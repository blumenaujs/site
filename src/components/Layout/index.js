import React, { Children, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
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

  const [foward, previous, currentSection] = useSection(children.length)
  const handlers = useSwipeable({ onSwipedUp: previous, onSwipedDown: foward })

  const handleWheel = event => {
    if (event.deltaY) {
      foward()
    } else {
      previous()
    }
  }

  useMount(() => {
    ref.current.addEventListener('wheel', handleWheel)
  })

  useUnmount(() => {
    ref.current.removeEvent('wheel', handleWheel)
  })

  return (
    <div {...handlers} >
      <Styled.Container ref={ref} >
        <Header links={createLinks(children)} />
        {Children.map(children, renderChild(currentSection))}
        <Footer />
      </Styled.Container>
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  isDark: propTypes.bool
}

Layout.Section = Section

export { Layout }
