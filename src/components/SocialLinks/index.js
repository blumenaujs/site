import React from 'react'
import propTypes from 'prop-types'

import Styled from './styled'
import InstagramIcon from './InstagramIcon'
import LinkedinIcon from './LinkedinIcon'
import FacebookIcon from './FacebookIcon'

const SocialLinks = ({ isOpen }) => (
  <Styled.IconsContainer>
    <Styled.SocialLink target='_blank' rel="noopener noreferrer" href='' index={1} isOpen={isOpen}>
      <FacebookIcon />
    </Styled.SocialLink>

    <Styled.SocialLink target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/blumenaujs/' index={2} isOpen={isOpen}>
      <InstagramIcon />
    </Styled.SocialLink>

    <Styled.SocialLink target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/company/blumenaujs/?viewAsMember=false' index={3} isOpen={isOpen}>
      <LinkedinIcon />
    </Styled.SocialLink>
  </Styled.IconsContainer>
)

SocialLinks.propTypes = {
  isOpen: propTypes.bool.isRequired
}

export { SocialLinks }
