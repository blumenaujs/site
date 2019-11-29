import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md } from '@/css/media-query'

const Menu = styled.div`
  background: #fafafa;
  position: fixed;
  width: 100vw;
  max-height: 100vh;
  max-height: -webkit-fill-avaliable;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 200ms, opacity 200ms linear;

  ${({ isOpen }) => isOpen && css`
    visibility: visible;
    opacity: 1;
    transition: opacity 200ms linear;
  `}

  ${md(css`
    position: relative;
    padding: 0;
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `)}
`

const ItemsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
  box-sizing: border-box;

  ${md(css`  
    background: transparent;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  `)}
`

export default { Menu, ItemsContainer }
