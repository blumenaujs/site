import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { fromBottom } from '@/css/animations'
import { md, sm } from '@/css/media-query'
import { getPrimaryColor, getSecondaryColor } from '@/contexts/ThemeContext'

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

  ${sm(css`
    font-size: 2.5rem;
  `)}

  ${props => md(css`
    cursor: pointer;
    opacity: 1;
    color: ${getPrimaryColor(props)};
    font-size: 1rem;
    font-weight: 500;
    box-sizing: border-box;
    padding: 1rem;
    transition: 200ms;
    &:hover{
      background: ${getPrimaryColor(props)};
      color: ${getSecondaryColor(props)};
    }

  `)}
`

export default Link
