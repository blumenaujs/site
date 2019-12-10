import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { getFontFamily } from '@/contexts/ThemeContext'
import { md, sm, lg } from '@/css/media-query'

const Text = styled.h1`
  color: white;
  font-family: ${getFontFamily};
  font-size: 42px;
  font-weight: bold;
  line-height: 60px;


  ${sm(css`
    font-size: 54px;
    line-height: 73px;
  `)}


  ${md(css`
    font-size: 62px;
  `)}


  ${lg(css`
    font-size: 72px;
  `)}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default { Container, Text }
