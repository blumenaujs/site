import React from 'react'
import BurgerButton from '../BurgerButton'
import Link from '../Link'
import Styled from './styled'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import FacebookIcon from './FacebookIcon'

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
        <Styled.IconsContainer>
          <Styled.SocialLink target='_blank' href='' index={1} isOpen={isOpen}>
            <FacebookIcon />
          </Styled.SocialLink>

          <Styled.SocialLink target='_blank' href='https://www.instagram.com/blumenaujs/' index={2} isOpen={isOpen}>
            <InstagramIcon />
          </Styled.SocialLink>

          <Styled.SocialLink target='_blank' href='https://www.linkedin.com/company/blumenaujs/?viewAsMember=false' index={3} isOpen={isOpen}>
            <LinkedinIcon />
          </Styled.SocialLink>

        </Styled.IconsContainer>
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

      </Styled.Menu>
    </div>
  )
}

export default Menu
