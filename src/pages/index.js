import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostCardHomepage from '../components/PostCardHomepage'
import Instagram from '../components/Instagram'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="container mx-auto">
          <div className="sm:flex sm:-mx-4 justify-center">
            {posts.map(({ node: post }) => (
              <PostCardHomepage key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/blog"
              className="no-underline inline-block border text-black py-4 px-12 my-10 transition-linear hover:bg-black hover:text-white"
            >
              Všechny příběhy
            </Link>
          </div>
          <h2 className="text-center my-8">Instagram</h2>
          <Instagram />
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "D. MMMM YYYY", locale: "cs")
            cover_image {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
