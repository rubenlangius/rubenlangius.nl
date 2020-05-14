import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useThemeUI, Box, Flex } from 'theme-ui'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyles from './GlobalStyles'

const Head = () => {
  const { theme } = useThemeUI()

  return (
    <Helmet defaultTitle="Ruben Langius" titleTemplate={`%s • Ruben Langius`}>
      <html lang="en" />

      <meta name="description" content="My portfolio" />
      {/* theming */}
      <meta name="theme-color" content={theme.colors.muted} />
      <meta name="apple-mobile-web-app-title" content="lowmess" />
      <meta name="application-name" content="lowmess" />
      <meta name="msapplication-TileColor" content={theme.colors.primary} />
      {/* icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.colors.primary}
      />
    </Helmet>
  )
}

const Layout = ({ children }) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    <Head />

    <GlobalStyles />

    <Nav mb={5} />

    <Box id="main-content" sx={{ flex: 1, paddingY: [null, 3, 4] }}>
      {children}
    </Box>

    <Footer mt={5} />
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
