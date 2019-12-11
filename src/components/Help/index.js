import React from 'react'
import QueueAnim from 'rc-queue-anim'
import { Text, Title } from '@/components'

import Styled from './styled'
import { PagSeguroIcon } from './PagSeguroIcon'

const Help = () => (
  <QueueAnim duration={600} type='left' delay={600}>
    <div key={1}>
      <Title>Ajude o BlumenauJS</Title>
      <Text>
        Nós somos uma organização sem fins lucrativos. Todos os custos com meetups, eventos, domínio, camisas e materiais da organização, são custeados com a ajuda dos nossos parceiros e membros da comunidade. Se sentir no coração, nos mande uma contribuição, toda ajuda é bem-vinda.
    </Text>
      <Styled.Link key={1}>
        <PagSeguroIcon />
      </Styled.Link>
    </div>
  </QueueAnim>
)

export { Help }
