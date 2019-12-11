import React from 'react'
import propTypes from 'prop-types'
import { useThemeContext } from '@/contexts/ThemeContext'
import { useSectionsContext } from '@/contexts/SectionContext'

import Styled from './styled'

const Section = ({ visible, isDark, isLast, children }) => {
  const { toggleDarkMode } = useThemeContext()
  const { toggleIsLast } = useSectionsContext()

  React.useEffect(() => {
    if (visible) {
      toggleDarkMode(isDark)
      toggleIsLast(isLast)
    }
  }, [visible])

  return <Styled.Content visible={visible}>{children}</Styled.Content>
}

Section.propTypes = {
  children: propTypes.node.isRequired,
  visible: propTypes.bool,
  isDark: propTypes.bool,
  isLast: propTypes.bool
}

export { Section }
