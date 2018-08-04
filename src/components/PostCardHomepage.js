import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostCard = ({ post }) => (
  <Link
    to={post.fields.slug}
    className="block no-underline h-72 w-72 my-4 mx-auto sm:m-4"
  >
    <Img
      sizes={post.frontmatter.cover_image.childImageSharp.sizes}
      className="h-72 w-full gatsby-bg-image"
    />
    <div className="homepage__post-card">
      <div className="m-4 text-white">
        <div className="font-serif text-xl font-thin mb-4 pb-4 border-b border-white">
          {post.frontmatter.title}
        </div>
        <p className="text-sm">{post.frontmatter.date}</p>
      </div>
    </div>
  </Link>
)

export default PostCard
