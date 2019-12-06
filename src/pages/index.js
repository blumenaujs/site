import React from 'react'

import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import GlobalStyle from '@/components/GlobalStyle'
import { ThemeProvider } from '../contexts/ThemeContext'

const Home = () => (
  <ThemeProvider>
    <GlobalStyle />
    <SEO title='BlumenauJS' />
    <Layout>
      <Layout.Content>Teste 1</Layout.Content>
      <Layout.Content>Teste 2</Layout.Content>
      <Layout.Content>Teste 3</Layout.Content>
      <Layout.Content>Teste 4</Layout.Content>
      <Layout.Content>Teste 5</Layout.Content>
      <Layout.Content>Teste 6</Layout.Content>
      <Layout.Content>Teste 7</Layout.Content>
    </Layout>
  </ThemeProvider>
)

export default Home
