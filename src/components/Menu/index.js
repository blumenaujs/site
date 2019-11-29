import React from 'react'
import BurgerButton from '../BurgerButton'
import SocialLinks from '../SocialLinks'
import Link from '../Link'
import Styled from './styled'

const links = [
  {
    label: 'Sobre nós',
    path: '/'
  },
  {
    label: 'Comunidade',
    path: '/'
  },
  {
    label: 'Meetup',
    path: '/'
  },
  {
    label: 'Blog',
    path: '/'
  },
  {
    label: 'Ajude',
    path: '/',
    isButton: true
  }
]

const Menu = () => {
  const [isOpen, toggleMenu] = React.useState(false)

  return (
    <div>
      <BurgerButton onClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
      <Styled.Menu isOpen={isOpen}>
        <Styled.ItemsContainer>
          {links.map((link, index) => (
            <Link
              isOpen={isOpen}
              isButton={link.isButton}
              key={index}
              index={index}
            >
              {link.label}
            </Link>
          ))}
        </Styled.ItemsContainer>

        <SocialLinks isOpen={isOpen} />
      </Styled.Menu>
    </div>
  )
}

export default Menu
