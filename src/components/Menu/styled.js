import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const Menu = styled.ul`
  background: #fafafa;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  list-style: none;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 200ms, opacity 200ms linear;

  ${({ isOpen }) => isOpen && css`
    visibility: visible;
    opacity: 1;
    transition: opacity 200ms linear;
  `}
`

const Link = styled.li`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin: 24px 0;
`

export default { Menu, Link }
