import React from 'react'
import QueueAnim from 'rc-queue-anim'
import propTypes from 'prop-types'

import {
  BurgerButton,
  SocialLinks,
  Link
} from '@/components'

import Styled from './styled'
import { useSectionsContext } from '@/contexts/SectionContext'

const Menu = ({ links }) => {
  const [isOpen, toggleMenu] = React.useState(false)

  const { setSection } = useSectionsContext()

  const handleLinkClick = section => {
    toggleMenu(false)
    setTimeout(() => setSection(section), 100)
  }

  return (
    <div>
      <BurgerButton
        isOpen={isOpen}
        onClick={() => toggleMenu(!isOpen)}
      />
      <QueueAnim duration={800} type={['right']} delay={400}>

        <Styled.Menu isOpen={isOpen} key={1}>
          <Styled.ItemsContainer>
            {links.map((link, index) => (
              <Link
                onClick={() => handleLinkClick(link.section)}
                isOpen={isOpen}
                key={index}
                index={index}
              >
                {link.label}
              </Link>
            ))}
          </Styled.ItemsContainer>

          <SocialLinks isOpen={isOpen} />
        </Styled.Menu>
      </QueueAnim>
    </div>
  )
}

Menu.propTypes = {
  links: propTypes.array.isRequired
}

export { Menu }
