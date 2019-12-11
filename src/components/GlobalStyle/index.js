import React from 'react'
import { Global, css } from '@emotion/core'

const style = css`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap");
  html,
  body {
    margin: 0;
    padding: 0;
  }

  #gatsby-focus-wrapper {
    flex: 1;
    display: flex;
  }

  #___gatsby {
    width: 100vw;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    max-height: -webkit-fill-available;
  }
`

const GlobalStyle = () => <Global styles={style} />

export { GlobalStyle }
