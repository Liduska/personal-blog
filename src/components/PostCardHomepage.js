import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => (
  <Link
    to={post.fields.slug}
    className="block no-underline h-64 w-1/3 bg-cover bg-center m-4"
    style={{ backgroundImage: `url('${post.frontmatter.cover_image}')` }}
  >
    <div
      className="h-64 flex flex-col-reverse"
      style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
    >
      <div className="m-4 text-white">
        <div className="font-serif text-white text-xl font-thin mb-4 pb-4 border-b border-white">
          {post.frontmatter.title}
        </div>
        <p class="text-sm">{post.frontmatter.date}</p>
      </div>
    </div>
  </Link>
)

export default PostCard
