import React from 'react'

import { Text } from '@/components'

import Styled from './styled'
import meetupImage from './meetup.png'

const Meetup = () => {
  return (
    <div>
      <Styled.Image src={meetupImage} alt='Foto meetup BlumenauJS' />
      <div>
        <Styled.Title>Meetup</Styled.Title>
        <Text>
          O meetup do BlumenauJS ocorre a cada 30 dias e desde a primeira edição conta com o apoio de diversas empresas de Blumenau e região. Sempre rola aquele brinde, cerveja, chopp e ótimas talks. Fique atento às nossas redes sociais, pra ficar por dentro de todos os meetups.
        </Text>
      </div>
    </div>
  )
}

export { Meetup }
