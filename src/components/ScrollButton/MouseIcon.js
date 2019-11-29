import React from 'react'
import { useTheme } from 'emotion-theming'
import { getPrimaryColor } from '@/contexts/ThemeContext'

const MouseIcon = () => {
  const theme = useTheme()
  const color = React.useMemo(() => getPrimaryColor({ theme }), [theme])
  return (
    <svg width='25' height='44' viewBox='0 0 25 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0.5 12.5C0.5 5.87258 5.87258 0.5 12.5 0.5C19.1274 0.5 24.5 5.87258 24.5 12.5V31.5C24.5 38.1274 19.1274 43.5 12.5 43.5C5.87258 43.5 0.5 38.1274 0.5 31.5V12.5Z' stroke={color} />
    </svg>
  )
}

export default MouseIcon
