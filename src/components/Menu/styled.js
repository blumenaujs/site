import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { fromBottom, scaleUp } from '@/css/animations'

const Menu = styled.div`
  background: #fafafa;
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-avaliable;
  overflow: hidden;
  top: 0;
  left: 0;
  flex-flow: column wrap;
  align-items: center;
  padding: 48px;
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
`

const Link = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin: 24px 0;
  transform: translateY(0px);
  opacity: 0;

  ${({ isOpen, index }) => isOpen && css`
    animation: ${fromBottom} 200ms ease-in-out forwards;
    animation-delay: ${50 * index}ms;
  `}
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
  flex-flow: column wrap;
  align-items: center;
  flex-grow: 2;
  box-sizing: border-box;

`

const Icon = styled.a`
  margin: 0 16px;
  width: 32px;
  transform: scale(0);

  ${({ isOpen, index }) => isOpen && css`
    animation: ${scaleUp} 100ms ease-in-out forwards;
    animation-delay: ${100 * index}ms;
  `}
`

export default { Menu, Link, IconsContainer, Icon, ItemsContainer }
