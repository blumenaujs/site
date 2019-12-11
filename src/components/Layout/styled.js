import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md, lg, xl } from '@/css/media-query'
import { getSecondaryColor } from '@/contexts/ThemeContext'

const Container = styled.div`
  flex: 1;
  overflow: auto;
  box-sizing: border-box;
  background: ${getSecondaryColor};
  padding: 1.5rem;
  transition: 400ms ease-out;
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
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
`

export default { Container, Content }
