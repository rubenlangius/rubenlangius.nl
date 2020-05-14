import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Box, Grid, Text, Container, Link } from 'theme-ui'

const FooterLink = ({ to, children, ...props }) => (
  <Link as={to ? GatsbyLink : 'a'} variant="ui" to={to} {...props}>
    {children}
  </Link>
)

FooterLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

const Footer = (props) => {
  return (
    <Box as="footer" bg="muted" py={5} {...props}>
      <Container>
        <Grid
          gap={[4, 3]}
          columns={['repeat(2, minmax(max-content, 8rem))', '1fr 1fr 3fr']}
          sx={{ justifyContent: ['center', 'start'] }}
        >
          <Box>
            <Text variant="section-heading" mb={3}>
              Site
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>

              {/* <li>
                <FooterLink to="/projects">Projects</FooterLink>
              </li>

              <li>
                <FooterLink to="/blog">Blog</FooterLink>
              </li>

              <li>
                <FooterLink to="/colophon">Colophon</FooterLink>
              </li>

              <li>
                <FooterLink to="/uses">Uses</FooterLink>
              </li>

              <li>
                <FooterLink href="/rss.xml">RSS</FooterLink>
              </li> */}
            </Box>
          </Box>

          <Box>
            <Text variant="section-heading" mb={3}>
              Links
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink href="https://github.com/rubenlangius">
                  GitHub
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://www.linkedin.com/in/ruben-langius-19aa8b112/">
                  LinkedIn
                </FooterLink>
              </li>
            </Box>
          </Box>

          {/* <Box sx={{ display: ['none', 'block'] }}>
            <Text variant="section-heading" mb={3}>
              Random quote
            </Text>

            <Link
              variant="ui"
              as={GatsbyLink}
              href="https://twitter.com/secretGeek/status/7269997868?s=20"
              sx={{ fontSize: 5, fontWeight: 'bold', lineHeight: 'heading' }}
            >
              There are 2 hard problems in computer science:
            </Link>

            <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
              cache invalidation, naming things, and off-by-1 errors.
            </Text>
          </Box> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
