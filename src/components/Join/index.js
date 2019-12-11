import React from 'react'
import QueueAnim from 'rc-queue-anim'

import { Title, Text } from '@/components'

import Styled from './styled'
import { WhatsIcon } from './WhatsIcon'
import { SlackIcon } from './SlackIcon'
import { DiscordIcon } from './DiscordIcon'

const Join = () => (
  <QueueAnim duration={600} type='right' delay={600}>
    <div key={1}>
      <Title>Faça parte</Title>
      <Text>O BlumenauJS está presente em diversas plataformas, venha interagir em um dos canais de comunicação!</Text>
      <QueueAnim component={Styled.LinksContainer} duration={800} type='scale' delay={600}>

        <Styled.Link key={1} href='' target='_blank'>
          <WhatsIcon />
        </Styled.Link>

        <Styled.Link key={2} href='' target='_blank'>
          <SlackIcon />
        </Styled.Link>

        <Styled.Link key={3} href='' target='_blank'>
          <DiscordIcon />
        </Styled.Link>
      </QueueAnim>
    </div>
  </QueueAnim>
)

export { Join }
