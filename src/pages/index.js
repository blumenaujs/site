import React from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import GlobalStyle from '@/components/GlobalStyle'

const Home = () => (
  <Layout isDark>
    <GlobalStyle />
    <SEO title='BlumenauJS' />
    <button>click</button>
  </Layout>
)

export default Home
