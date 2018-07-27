import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ post }) => (
  <Link
    to={post.fields.slug}
    className="block mx-auto my-4 max-w-lg w-full lg:flex no-underline"
  >
    <div
      className="h-48 lg:h-auto lg:w-96 flex-none bg-cover bg-center text-center overflow-hidden"
      style={{ backgroundImage: `url('${post.frontmatter.cover_image}')` }}
      title=""
    />
    <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <p class="text-sm text-grey-dark flex items-center">
          {post.frontmatter.date}
        </p>
        <div className="text-black font-bold text-xl mb-2">
          {post.frontmatter.title}
        </div>
        <p className="text-grey-darker text-base">{post.excerpt}</p>
      </div>
    </div>
  </Link>
)

export default PostCard
