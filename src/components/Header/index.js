import React from 'react'
import propTypes from 'prop-types'

import { Logo, Menu } from '@/components'

import Styled from './styled'

const Header = ({ links }) => (
  <Styled.Header>
    <Logo />
    <Menu links={links} />
  </Styled.Header>
)

Header.propTypes = {
  links: propTypes.array.isRequired
}

export { Header }
