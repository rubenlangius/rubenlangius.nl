import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Text, Container, Link } from 'theme-ui'
import Layout from '../components/Layout'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

const Dependency = ({ href, ...props }) => {
  const WrapperComponent = (nestedProps) =>
    href ? (
      <Link target="blank" variant="ui" href={href} {...nestedProps} />
    ) : (
      <Text as="span" {...nestedProps} />
    )

  return <WrapperComponent sx={{ fontSize: [2, 4] }} {...props} />
}

Dependency.propTypes = {
  href: PropTypes.string,
}

const Details = (props) => <Text sx={{ fontSize: 0 }} {...props} />

const UsesPage = () => (
  <Layout>
    <Helmet>
      <title>Wishlist</title>
    </Helmet>

    <Header>
      <HeaderName>Wishlist</HeaderName>

      <HeaderTitle>Things that I would like to have</HeaderTitle>
    </Header>

    <Container mt={4}>
      <React.Fragment>
        <Dependency href="https://www.toolnation.nl/gedore-c-2150-60-ph-06-century-schroevendraaierset-6-delig.html">Gedore schroevendraaierset</Dependency>
        <Details>A set of quality screwdrivers is always welcome.</Details>
      </React.Fragment>
    </Container>
  </Layout>
)

export default UsesPage
