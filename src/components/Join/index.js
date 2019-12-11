import React from 'react'
import { Title, Text } from '@/components'

import Styled from './styled'
import { WhatsIcon } from './WhatsIcon'
import { SlackIcon } from './SlackIcon'
import { DiscordIcon } from './DiscordIcon'

const Join = () => (
  <div>
    <Title>Faça parte</Title>
    <Text>O BlumenauJS está presente em diversas plataformas, venha interagir em um dos canais de comunicação!</Text>
    <Styled.LinksContainer>
      <Styled.Link href='' target='_blank'>
        <WhatsIcon />
      </Styled.Link>

      <Styled.Link href='' target='_blank'>
        <SlackIcon />
      </Styled.Link>

      <Styled.Link href='' target='_blank'>
        <DiscordIcon />
      </Styled.Link>

    </Styled.LinksContainer>
  </div>
)

export { Join }
