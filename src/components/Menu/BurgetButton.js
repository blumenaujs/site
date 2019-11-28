import React from 'react'
import Styled from './styled'

const BurgerButton = () => {
  const [state, setState] = React.useState(false)

  return (
    <Styled.BurgerButton onClick={() => { setState(!state) }} className={state ? '-open' : ''}>
      <div></div>
    </Styled.BurgerButton>
  )
}

export default BurgerButton
