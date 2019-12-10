import React from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import GlobalStyle from '@/components/GlobalStyle'
import { ThemeProvider } from '../contexts/ThemeContext'
import { Banner } from '@/components/Banner'
import { SectionsProvider } from '../contexts/SectionContext'

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
