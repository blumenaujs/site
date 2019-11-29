import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { fromBottom } from '@/css/animations'
import { lg } from '@/css/media-query'

const Link = styled.a`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.75rem;
  margin: 1.5rem 0;
  transform: translateY(0px);
  opacity: 0;

  ${({ isOpen, index }) => isOpen && css`
    animation: ${fromBottom} 200ms ease-in-out forwards;
    animation-delay: ${50 * index}ms;
  `}

  ${lg(css`
    cursor: pointer;
    opacity: 1;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 .75rem;

      &:after{
        transform:scale(0);
        content:'';
        position:absolute;
        height:.05rem;
        width:100%;
        bottom:-.1rem;
        left:0;
        transition: 200ms ease-in;
        background:white;
      }

      &:hover:after {
        transform:scale(1);
      }
  `)}
`

export default Link
