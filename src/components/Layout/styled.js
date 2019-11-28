import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { xs } from '@/css/media-query'
import { black } from '@/css/colors'

const getBackground = ({ isDark }) => isDark ? black : '#FAFAFA'

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
