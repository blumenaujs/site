import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { getPrimaryColor, getFontFamily } from '@/contexts/ThemeContext'

const scrollAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const Scroll = styled.span`
  height: 10px;
  border-radius: 100px;
  width: 4px;
  background: ${getPrimaryColor};
  position: absolute;
  left: 50%;
  margin-left: -2px;
  top: 6px;
  animation: ${scrollAnimation} 1.5s infinite;
`

const Label = styled.span`
  margin-top: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${getPrimaryColor};
  font-family: ${getFontFamily};
`

export default { IconContainer, Container, Scroll, Label }
