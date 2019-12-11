import React from 'react'
import { Global, css } from '@emotion/core'

const style = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap');
  html, body {
    width: 100vw;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100vh;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    top: 0;
    bottom: 0;
  }
`

const GlobalStyle = () => (
  <Global styles={style} />
)

export { GlobalStyle }
