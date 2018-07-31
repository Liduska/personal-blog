import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const PostCard = ({ post }) => (
  <Link to={post.fields.slug} className="block no-underline h-64 sm:w-1/3 m-4">
    <Img
      sizes={post.frontmatter.cover_image.childImageSharp.sizes}
      className="h-64 w-full gatsby-bg-image"
    />
    <div
      className="h-64 flex flex-col-reverse"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
    >
      <div className="m-4 text-white">
        <div className="font-serif text-white text-xl font-thin mb-4 pb-4 border-b border-white">
          {post.frontmatter.title}
        </div>
        <p className="text-sm">{post.frontmatter.date}</p>
      </div>
    </div>
  </Link>
)

export default PostCard
