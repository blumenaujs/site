import React from 'react'
import { Global, css } from '@emotion/core'

const style = css`
  html, body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle = () => (
  <Global styles={style} />
)

export default GlobalStyle
