import React from 'react'
import propTypes from 'prop-types'
import Styled from './styled'

const Layout = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout
