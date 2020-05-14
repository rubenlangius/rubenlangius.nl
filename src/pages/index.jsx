import React from 'react'
import PropTypes from 'prop-types'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
import pluralize from '../utils/pluralize'

const ValueCount = ({ value, singular, plural }) => (
  <React.Fragment>
    {value.toLocaleString()} {pluralize(value, singular, plural)}
  </React.Fragment>
)

ValueCount.propTypes = {
  value: PropTypes.number.isRequired,
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string.isRequired,
}

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Text variant="section-heading" mb={3}>
          Introduction
        </Text>

        {/* The `Text` wrapper makes sure spaces are consistently sized */}
        <Text variant="site-intro" sx={{ display: 'contents' }}>
          <Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
            Hi, I&apos;m Ruben Langius, and I like to build things.
          </Heading>{' '}
          <br />
          <Heading as="h2" variant="site-intro-description">
            Currently, I&rsquo;m helping{' '}
            <Link href="https://belsimpel.nl">Belsimpel</Link> as a lead web
            developer.{' '}
          </Heading>{' '}
          <Text as="p" variant="site-intro-description">
            With a BSc in Artificial Intelligence and my experience as a web
            developer I can train a neural network, design a website, build a
            website, build an app, and if you’re lucky I’ll even write your
            back-end code; Full Stack! Now besides this digital craftsmanship,
            nothing makes me happier then building something physical with my
            own hands, have a look at my latest{' '}
            <Link href="https://www.instagram.com/rubenonaboat/">project.</Link>
          </Text>
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage
