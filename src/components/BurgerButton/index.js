import React from 'react'
import QueueAnim from 'rc-queue-anim'

import propTypes from 'prop-types'
import Styled from './styled'

const BurgerButton = ({ isOpen, onClick }) => (
  <QueueAnim duration={800} type={['right']} delay={400}>
    <Styled.BurgerButton key='1' onClick={onClick} isOpen={isOpen}>
      <div />
    </Styled.BurgerButton>
  </QueueAnim>
)

BurgerButton.propTypes = {
  isOpen: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
}

export { BurgerButton }
