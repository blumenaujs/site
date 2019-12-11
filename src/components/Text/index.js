import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { md, sm } from '@/css/media-query'
import { getPrimaryColor, getFontFamily } from '@/contexts/ThemeContext'

const Text = styled.p`
  font-family: ${getFontFamily};
  color: ${getPrimaryColor};
  font-size: 18px;
  line-height: 26px;

  ${sm(css`
    font-size: 22px;
    line-height: 32px;
  `)}

  ${md(css`
    font-size: 26px;
  `)}
`

export { Text }
