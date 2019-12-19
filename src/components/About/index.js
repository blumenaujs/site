import React from 'react'
import QueueAnim from 'rc-queue-anim'

import { Title, Text } from '@/components'

const About = () => (
  <QueueAnim type='left' delay={400} duration={800}>
    <div key={1}>
      <Title >Sobre nós</Title>
      <Text >
        Fundada em 2018 a BlumenauJS é a primeira comunidade JavaScript em Blumenau.
        <br />
        Nosso objetivo é fomentar uma cultura de desenvolvimento de software, visando ajudar os desenvolvedores da região.
        <br />
        Juntos sabemos que podemos tornar Blumenau um polo de referência nacional em tecnologia.
      </Text>
    </div>
  </QueueAnim>
)

export { About }
