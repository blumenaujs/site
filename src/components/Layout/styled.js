import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md, lg, xl } from '@/css/media-query'
import { getSecondaryColor } from '@/contexts/ThemeContext'

const Container = styled.div`
  width: 100vw;  
  height: 100vh;
  box-sizing: border-box;
  background: ${getSecondaryColor};
  padding: 1.5rem;
  transition: 200ms;
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
`

export default { Container, Content }
