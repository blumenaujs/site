import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { xs } from '@/css/media-query'

const getBackground = ({ isDark }) => isDark ? '#312D2E' : '#FAFAFA'

const Container = styled.div`
  width: 100vw;  
  height: 100vh;
  box-sizing: border-box;
  background: ${getBackground};
  
  ${xs(css`
    padding: 24px;
  `)}
`

export default { Container }
