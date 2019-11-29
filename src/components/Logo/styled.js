import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { lg } from '@/css/media-query'

const MobileContainer = styled.div`
  display: block;
  ${lg(css`
    display: none;
  `)}
`

const DesktopContainer = styled.div`
  display: none;
  ${lg(css`
    display: block;
  `)}
`

export default { MobileContainer, DesktopContainer }
