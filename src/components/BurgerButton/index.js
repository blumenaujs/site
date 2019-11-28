import React from 'react'
import propTypes from 'prop-types'
import Styled from './styled'

const BurgerButton = ({ isOpen, onClick }) => (
  <Styled.BurgerButton onClick={onClick} isOpen={isOpen}>
    <div />
  </Styled.BurgerButton>
)

BurgerButton.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
}

export default BurgerButton
