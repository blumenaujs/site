import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { md, sm } from '@/css/media-query'
import { getPrimaryColor, getFontFamily } from '@/contexts/ThemeContext'

const Title = styled.h1`
  font-family: ${getFontFamily};
  color: ${getPrimaryColor};
  font-size: 32px;
  font-weight: bold;

  ${sm(css`
    font-size: 42px;
  `)}

  ${md(css`
    font-size: 48px;
    line-height: 56px;
  `)}
`

export { Title }
