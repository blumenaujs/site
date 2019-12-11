import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { md } from '@/css/media-query'

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  ${md(css`
    margin-top: 48px;
  `)}
`

const Link = styled.a`
  text-decoration: none;
  border: 0;
  background: 0;
  padding: 0;
  margin:0;
  cursor: pointer;
  &:not(:first-of-type){
    margin-left: 12px;
  }
`

export default { Link, LinksContainer }
