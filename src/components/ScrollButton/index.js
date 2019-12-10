import React from 'react'
import propTypes from 'prop-types'

import Styled from './styled'
import MouseIcon from './MouseIcon'

const ScrollButton = ({ label }) => (
  <Styled.Container>
    <Styled.IconContainer>
      <MouseIcon />
      <Styled.Scroll />
    </Styled.IconContainer>
    <Styled.Label>{label}</Styled.Label>
  </Styled.Container>
)

ScrollButton.propTypes = {
  label: propTypes.string.isRequired
}

export { ScrollButton }
