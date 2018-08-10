import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPostTemplate from '../components/BlogPostTemplate'
import { HTMLContent } from '../components/Content'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  const helmet = (
    <Helmet title={post.frontmatter.title}>
      <meta name="description" content={post.frontmatter.description} />
      <meta property="og:description" content={post.frontmatter.description} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={post.frontmatter.cover_image.childImageSharp.fluid.src}
      />
    </Helmet>
  )

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        helmet={helmet}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.cover_image.childImageSharp.fluid}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "D. MMMM YYYY", locale: "cs")
        title
        description
        tags
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1900) {
              src
            }
          }
        }
      }
    }
  }
`
