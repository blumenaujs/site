import React, { Children, useRef } from 'react'
import propTypes from 'prop-types'
import { useDebouncedCallback } from 'use-debounce'
import { useSwipeable } from 'react-swipeable'
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

  const [previous, forward, currentSection] = useSection(children.length)

  const [debouncedPrevious] = useDebouncedCallback(previous, 200)
  const [debouncedForward] = useDebouncedCallback(forward, 200)

  const handlers = useSwipeable({
    onSwipedDown: debouncedPrevious,
    onSwipedUp: debouncedForward
  })

  const [handleWheel] = useDebouncedCallback(event => {
    if (event.deltaY > 0) {
      forward()
    } else {
      previous()
    }
  }, 100)

  useMount(() => {
    ref.current.addEventListener('mousewheel', handleWheel)
  })

  useUnmount(() => {
    ref.current.removeEventListener('mousewheel', handleWheel)
  })

  return (
    <Styled.Container
      ref={divRef => {
        handlers.ref(divRef)
        ref.current = divRef
      }}
    >
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
