import React from 'react'
import QueueAnim from 'rc-queue-anim'

import Styled from './styled'

const Banner = () => (
  <QueueAnim duration={600} type='bottom' delay={800}>
    <Styled.Container key={1}>
      <Styled.Text>Primeira comunidade de JavaScript em Blumenau</Styled.Text>
    </Styled.Container>
  </QueueAnim>
)

export { Banner }
