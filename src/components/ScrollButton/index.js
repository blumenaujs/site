import React from 'react'
import Styled from './styled'
import MouseIcon from './MouseIcon'

const ScrollButton = () => (
  <Styled.Container>
    <Styled.IconContainer>
      <MouseIcon />
      <Styled.Scroll />
    </Styled.IconContainer>
    <Styled.Label>role para saber mais</Styled.Label>
  </Styled.Container>
)

export default ScrollButton
