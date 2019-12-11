import React from 'react'
import QueueAnim from 'rc-queue-anim'

import { ScrollButton } from '@/components'
import { useSectionsContext } from '@/contexts/SectionContext'

import Styled from './styled'

const isFirst = section => section === 0

const Footer = () => {
  const { isLast, currentSection } = useSectionsContext()
  const label = isFirst(currentSection)
    ? 'deslize para saber mais'
    : 'continue deslizando'

  return (
    <Styled.Footer>
      <QueueAnim duration={600} type='bottom' delay={1100}>
        {!isLast && <ScrollButton label={label} key={1} />}
      </QueueAnim>
    </Styled.Footer>

  )
}

export { Footer }
