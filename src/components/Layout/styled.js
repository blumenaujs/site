import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md, lg, xl } from '@/css/media-query'
import { black } from '@/css/colors'

const getBackground = ({ isDark }) => isDark ? black : '#FAFAFA'

const Container = styled.div`
  width: 100vw;  
  height: 100vh;
  box-sizing: border-box;
  background: ${getBackground};
  padding: 1.5rem;
  
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

export default { Container }
