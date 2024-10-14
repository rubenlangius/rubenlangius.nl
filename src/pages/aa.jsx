import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Text, Container, Link } from 'theme-ui'
import Layout from '../components/Layout'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

const Details = (props) => <Text sx={{ fontSize: 0 }} {...props} />

const UsesPage = () => (
  <Layout>
    <Helmet>
      <title>AA-test</title>
    </Helmet>

    <Header>
      <HeaderName>AA</HeaderName>

      <HeaderTitle>AA test</HeaderTitle>
    </Header>

    <Container mt={4}>
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        style="margin: 0 auto"
        src="https://local-first-bias-detection.s3.eu-central-1.amazonaws.com/index.html">
      </iframe>
    </Container>
  </Layout>
)

export default UsesPage
