import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { getFontFamily } from '@/contexts/ThemeContext'

const Footer = styled.footer`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.isLast && css`
    justify-content: space-between;
  `}
`

const IconsContainer = styled.div` 
  display: flex;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 12px;
  }
`

const Email = styled.span`
  font-family: ${getFontFamily};
  font-size: 18px;
  font-weight: 500;
  color: white;
`

export default { Footer, IconsContainer, Email }
