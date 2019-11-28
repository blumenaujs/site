import React from 'react'
import BurgerButton from '../BurgerButton'
import Styled from './styled'

const Menu = () => {
  const [isOpen, toggleMenu] = React.useState(false)

  return (
    <div>
      <BurgerButton onClick={() => toggleMenu(!isOpen)} isOpen={isOpen} />
      <Styled.Menu isOpen={isOpen}>
        <Styled.Link>Sobre nós</Styled.Link>
        <Styled.Link>Comunidade</Styled.Link>
        <Styled.Link>Meetup</Styled.Link>
        <Styled.Link>Blog</Styled.Link>
        <Styled.Link>Ajude</Styled.Link>
      </Styled.Menu>
    </div>
  )
}

export default Menu
