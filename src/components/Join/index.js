import React from 'react'
import QueueAnim from 'rc-queue-anim'

import { Title, Text } from '@/components'

import Styled from './styled'
import { WhatsIcon } from './WhatsIcon'
import { SlackIcon } from './SlackIcon'
import { DiscordIcon } from './DiscordIcon'

const Join = () => (
  <QueueAnim duration={600} type='right' delay={400}>
    <div key={1}>
      <Title>Faça parte</Title>
      <Text>O BlumenauJS está presente em diversas plataformas, venha interagir em um dos canais de comunicação!</Text>

      <Styled.Link href='https://chat.whatsapp.com/CaAfrllxOlC9KEkWf98qb5' target='_blank'>
        <WhatsIcon />
      </Styled.Link>

      <Styled.Link href='https://join.slack.com/t/blumenaujs/shared_invite/enQtNTIxNDQ5MjUwODM2LWZjOTZmNWU3NWEwZDAzNGIyM2MwZDEwZjcyMjY3NmQyY2I3NjZkNDZkMzUyZWJiMzllMDBiMmJlOWQ2NjRhNTg' target='_blank'>
        <SlackIcon />
      </Styled.Link>

      <Styled.Link href='https://discord.gg/qccyVyK' target='_blank'>
        <DiscordIcon />
      </Styled.Link>
    </div>
  </QueueAnim>
)

export { Join }
