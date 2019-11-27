import { css } from '@emotion/core'

export const minWidth = breakpoint => style => css`
  @media screen and (min-width: ${breakpoint}px){
    ${style}
}`

export const maxWidth = breakpoint => style => css`
  @media screen and (max-width: ${breakpoint}px){
    ${style}
}`

export const xs = maxWidth(576)
export const sm = minWidth(576)
export const md = minWidth(768)
export const lg = minWidth(992)
export const xl = minWidth(1200)
