import { keyframes } from '@emotion/core'

export const fromBottom = keyframes`
from {
  opacity: 0;
  transform: translateY(20px);
}

to {
  opacity: 1;
  transform: translateY(0px);
}`

export const scaleUp = keyframes`
from {
  transform: scale(0);
}

to {
  transform: scale(1);
}`
