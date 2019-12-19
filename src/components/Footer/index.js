import React from 'react'

import { ScrollButton } from '@/components'
import { useSectionsContext } from '@/contexts/SectionContext'

import Styled from './styled'

import { FacebookIcon } from './FacebookIcon'
import { InstagramIcon } from './InstagramIcon'
import { LinkedinIcon } from './LinkedinIcon'

const isFirst = section => section === 0

const Footer = () => {
  const { isLast, currentSection } = useSectionsContext()
  const label = isFirst(currentSection)
    ? 'deslize para saber mais'
    : 'continue deslizando'

  return (
    <Styled.Footer isLast={isLast}>
      {!isLast && <ScrollButton label={label} key={1} />}
      {isLast &&
        <>
          <Styled.IconsContainer>
            <FacebookIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </Styled.IconsContainer>
          <Styled.Email>contato@blumenaujs.org</Styled.Email>
        </>
      }
    </Styled.Footer>

  )
}

export { Footer }
