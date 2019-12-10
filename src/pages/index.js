import React from 'react'

import {
  Layout,
  SEO,
  GlobalStyle,
  Banner
} from '@/components'

import { SectionsProvider } from '@/contexts/SectionContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Home = () => (
  <ThemeProvider>
    <SectionsProvider>
      <GlobalStyle />
      <SEO title='BlumenauJS' />
      <Layout>
        <Layout.Content>
          <Banner />
        </Layout.Content>
        <Layout.Content>
          Teste 2
        </Layout.Content>
        <Layout.Content>
          Teste 3
        </Layout.Content>
        <Layout.Content>
          Teste 5
        </Layout.Content>
      </Layout>
    </SectionsProvider>
  </ThemeProvider>
)

export default Home
