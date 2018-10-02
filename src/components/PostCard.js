import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import _ from 'lodash'

const PostCard = ({ post }) => (
  <Link
    to={post.fields.slug}
    className="block mx-auto my-4 max-w-lg w-full lg:flex no-underline"
  >
    <div className="relative h-48 lg:h-72 lg:w-96 flex-none bg-cover bg-center text-center overflow-hidden">
      <Img
        fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        className="h-72 w-full gatsby-bg-image"
      />
    </div>
    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p className="text-sm text-grey-dark flex items-center">
          {post.frontmatter.date}
        </p>
        <div className="text-black font-bold text-xl mb-2">
          {post.frontmatter.title}
        </div>
        <p className="text-grey-darker text-base">
          {_.truncate(post.frontmatter.description, {
            length: 335,
            separator: ' ',
          })}
        </p>
      </div>
    </div>
  </Link>
)

export default PostCard
