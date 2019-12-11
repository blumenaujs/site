import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md, lg, xl } from '@/css/media-query'
import { getSecondaryColor } from '@/contexts/ThemeContext'

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: hidden;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  background: ${getSecondaryColor};
  padding: 1.5rem;
  transition: 300ms ease;
  display: flex; 
  flex-direction: column;

  ${md(css`
    padding: 2rem;
  `)}

  ${lg(css`
    padding: 4.5rem 6rem;
  `)}

  ${xl(css`
    padding: 4.5rem 10rem;
  `)}
`

const Content = styled.div`
  flex-grow: 2;
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: center;
`

export default { Container, Content }
