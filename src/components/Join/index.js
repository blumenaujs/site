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
      <QueueAnim component={Styled.LinksContainer} duration={800} type='scale' delay={400}>

        <Styled.Link key={1} href='https://chat.whatsapp.com/CaAfrllxOlC9KEkWf98qb5' target='_blank'>
          <WhatsIcon />
        </Styled.Link>

        <Styled.Link key={2} href='https://join.slack.com/t/blumenaujs/shared_invite/enQtNTIxNDQ5MjUwODM2LWZjOTZmNWU3NWEwZDAzNGIyM2MwZDEwZjcyMjY3NmQyY2I3NjZkNDZkMzUyZWJiMzllMDBiMmJlOWQ2NjRhNTg' target='_blank'>
          <SlackIcon />
        </Styled.Link>

        <Styled.Link key={3} href='https://discord.gg/JU9ywc' target='_blank'>
          <DiscordIcon />
        </Styled.Link>
      </QueueAnim>
    </div>
  </QueueAnim>
)

export { Join }
