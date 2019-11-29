import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { scaleUp } from '@/css/animations'
import { md } from '@/css/media-query'

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  
  ${md(css`
    display: none;
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

export default { IconsContainer, SocialLink }
