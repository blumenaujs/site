import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { xs } from '@/css/media-query'

const Container = styled.div`
  width: 100vw;  
  height: 100vh;
  box-sizing: border-box;
  
  ${xs(css`
    background: #312D2E;
    padding: 24px;
  `)}
`

export default { Container }
