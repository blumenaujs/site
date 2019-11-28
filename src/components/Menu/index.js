import React from 'react'
import BurgerButton from '../BurgerButton'
import Styled from './styled'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import FacebookIcon from './FacebookIcon'

const links = [
  'Sobre nós',
  'Comunidade',
  'Meetup',
  'Blog',
  'Ajude'
]

const Menu = () => {
  const [isOpen, toggleMenu] = React.useState(false)

  return (
    <div>
      <BurgerButton onClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
      <Styled.Menu isOpen={isOpen}>

        <Styled.ItemsContainer>
          {links.map(
            (link, index) => (
              <Styled.Link
                isOpen={isOpen}
                key={index}
                index={index}
              >
                {link}
              </Styled.Link>
            ))}
        </Styled.ItemsContainer>

        <Styled.IconsContainer>
          <Styled.Icon target='_blank' href='' index={1} isOpen={isOpen}>
            <FacebookIcon />
          </Styled.Icon>

          <Styled.Icon target='_blank' href='https://www.instagram.com/blumenaujs/' index={2} isOpen={isOpen}>
            <InstagramIcon />
          </Styled.Icon>

          <Styled.Icon target='_blank' href='https://www.linkedin.com/company/blumenaujs/?viewAsMember=false' index={3} isOpen={isOpen}>
            <LinkedinIcon />
          </Styled.Icon>

        </Styled.IconsContainer>

      </Styled.Menu>
    </div>
  )
}

export default Menu
