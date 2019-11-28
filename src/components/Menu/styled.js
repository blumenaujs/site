import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { sm } from '@/css/media-query'

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

  &::after, 
  &::before, 
  div {
    background-color: #fff;
    content: ' ';
    display: block;
    height: 2px;
    width: 26px;
    margin: 6px 0;
    transition: all .2s ease-in-out;
  }

  &.-open {
    &::before {
      transform: translateY(8px) rotate(135deg);
    }

    &::after {
      transform: translateY(-8px) rotate(-135deg);
    }

    > div {
      transform: scale(0);
    }
  }

  ${sm(css`
    display: none;
  `)}
`

export default { BurgerButton }
