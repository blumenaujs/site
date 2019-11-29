import React from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import GlobalStyle from '@/components/GlobalStyle'
import { ThemeProvider } from '../contexts/ThemeContext'

const Home = () => (
  <ThemeProvider>
    <Layout>
      <GlobalStyle />
      <SEO title='BlumenauJS' />
    </Layout>
  </ThemeProvider>
)

export default Home
