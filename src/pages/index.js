import React from 'react'

import {
  Layout,
  SEO,
  GlobalStyle,
  Banner,
  About,
  Join,
  Meetup,
  Help
} from '@/components'

import { SectionsProvider } from '@/contexts/SectionContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Home = () => (
  <ThemeProvider>
    <SectionsProvider>
      <GlobalStyle />
      <SEO title="BlumenauJS" />
      <Layout>
        <Layout.Section isDark={true} label="Início">
          <Banner />
        </Layout.Section>

        <Layout.Section label="Sobre nós">
          <About />
        </Layout.Section>

        <Layout.Section isDark={true} label="Comunidade">
          <Join />
        </Layout.Section>

        <Layout.Section label="Meetup">
          <Meetup />
        </Layout.Section>

        <Layout.Section isLast={true} isDark={true} label="Ajude">
          <Help />
        </Layout.Section>
      </Layout>
    </SectionsProvider>
  </ThemeProvider>
)

export default Home
