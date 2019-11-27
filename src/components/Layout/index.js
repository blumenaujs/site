import React from 'react'
import propTypes from 'prop-types'

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout
