import React from 'react'
import QueueAnim from 'rc-queue-anim'

import Styled from './styled'
import MobileLogo from './MobileLogo'
import DesktopLogo from './DesktopLogo'

const Logo = () => (
  <QueueAnim duration={800} type={['left']} delay={400}>
    <Styled.MobileContainer key={1}>
      <MobileLogo />
    </Styled.MobileContainer>
    <Styled.DesktopContainer key={2}>
      <DesktopLogo />
    </Styled.DesktopContainer>
  </QueueAnim>
)

export { Logo }
