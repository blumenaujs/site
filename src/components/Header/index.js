import React from 'react'

import { Logo, Menu } from '@/components'

import Styled from './styled'

const Header = () => (
  <Styled.Header>
    <Logo />
    <Menu />
  </Styled.Header>
)

export { Header }
