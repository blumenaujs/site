import styled from '@emotion/styled'

import { css } from '@emotion/core'
import { Title as RealTitle } from '@/components'
import { lg, xl } from '@/css/media-query'

const Title = styled(RealTitle)`
  margin: 0;
`

export const Image = styled.img`
  float: left;
  margin-right: 24px;
  display: none;

  ${lg(css`
    width: 400px;
    display: block;
  `)}

  ${xl(css`
    width: 500px;
  `)}
`

export default { Title, Image }
