import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { Box } from 'rebass'
import * as Heading from './Headings'
import { UnorderedList, OrderedList } from './Lists'
import { Paragraph, BlockQuote, HorizontalRule } from './TypographicElements'
import { Code, InlineCode } from './Code'
import { Image } from './Embeds'
import { verticalRhythm } from './markdownStyles'

const components = {
  h1: Heading.One,
  h2: Heading.Two,
  h3: Heading.Three,
  h4: Heading.Four,
  h5: Heading.Five,
  h6: Heading.Six,
  ul: UnorderedList,
  ol: OrderedList,
  p: Paragraph,
  blockquote: BlockQuote,
  hr: HorizontalRule,
  code: Code,
  inlineCode: InlineCode,
  img: Image,
}

const MarkdownContent = ({ children, ...props }) => (
  <MDXProvider components={components}>
    <Box
      sx={{
        ...verticalRhythm,

        'b, strong, em, small, code': {
          lineHeight: 'solid',
        },

        'sup, sub': {
          verticalAlign: 'baseline',
          position: 'relative',
          top: '-0.4em',
        },

        sub: {
          top: '0.4em',
        },
      }}
      {...props}
    >
      {children}
    </Box>
  </MDXProvider>
)

MarkdownContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownContent
