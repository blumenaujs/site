import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { scaleUp } from '@/css/animations'
import { lg } from '@/css/media-query'

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
  flex-direction: column-reverse;
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

  ${lg(css`
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

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
`

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 2;
  box-sizing: border-box;

  ${lg(css`  
    background: transparent;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  `)}
`

const SocialLink = styled.a`  
  margin: 0 1rem;
  width: 2rem;
  transform: scale(0);

  ${({ isOpen, index }) => isOpen && css`
    animation: ${scaleUp} 100ms ease-in-out forwards;
    animation-delay: ${100 * index}ms;
  `}
`

export default { Menu, IconsContainer, SocialLink, ItemsContainer }
