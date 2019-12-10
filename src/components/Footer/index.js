import React from 'react'
import ScrollButton from '../ScrollButton'
import Styled from './styled'
import { useSectionsContext } from '@/contexts/SectionContext'

const isFirst = section => section === 0

const Footer = () => {
  const { isLast, currentSection } = useSectionsContext()

  const label = isFirst(currentSection)
    ? 'deslize para saber mais'
    : 'continue deslizando'

  return (
    <Styled.Footer>
      {!isLast && <ScrollButton label={label} />}
    </Styled.Footer>
  )
}

export default Footer
