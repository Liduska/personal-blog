import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(({ node: post }) => (
      <PostCard key={post.id} post={post} />
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} ${
      totalCount === 1 ? 'článek' : totalCount < 5 ? 'články' : 'článků'
    } v kategorii „${tag}”`

    return (
      <Layout>
        <section className="container mx-auto">
          <Helmet title={`${tag} | ${title}`} />
          <h1 className="text-center mt-12 mb-8">{tagHeader}</h1>
          {postLinks}
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "D. MMMM YYYY", locale: "cs")
            cover_image {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
