import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { sm } from '@/css/media-query'

const MobileContainer = styled.div`
  display: block;
  ${sm(css`
    display: none;
  `)}
`

const DesktopContainer = styled.div`
  display: none;
  ${sm(css`
    display: block;
  `)}
`

export default { MobileContainer, DesktopContainer }
