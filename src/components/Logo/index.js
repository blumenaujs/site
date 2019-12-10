import React from 'react'
import Styled from './styled'
import MobileLogo from './MobileLogo'
import DesktopLogo from './DesktopLogo'

const Logo = () => (
  <>
    <Styled.MobileContainer>
      <MobileLogo />
    </Styled.MobileContainer>
    <Styled.DesktopContainer>
      <DesktopLogo />
    </Styled.DesktopContainer>
  </>
)

export { Logo }
