import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md } from '@/css/media-query'
import { black } from '@/css/colors'
import { getPrimaryColor } from '@/contexts/ThemeContext'

const BurgerButton = styled.button`
  margin: 0;
  padding: 0;
  display: block;
  background: 0;
  border: 0;
  outline: 0;
  position: fixed;
  top: 32px;
  right: 24px;
  z-index: 999;

  &::after, 
  &::before, 
  div {
    background-color: ${getPrimaryColor};
    content: ' ';
    display: block;
    height: 2px;
    width: 26px;
    margin: 6px 0;
    transition: all .2s ease-in-out;
  }

  ${({ isOpen }) => isOpen && css`
    &::after,
    &::before,
    > div {
      background: ${black};
    }

    &::before {
      transform: translateY(8px) rotate(135deg);
    }

    &::after {
      transform: translateY(-8px) rotate(-135deg);
    }

    > div {
      transform: scale(0);
    }
  `}

  ${md(css`
    display: none;
  `)}
`

export default { BurgerButton }
