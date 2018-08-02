import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Content from './Content'

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="container max-w-lg mx-auto p-4 md:p-16 md:mt-16 md:border">
      {helmet || ''}
      <h1 className="text-grey-darkest text-4xl font-semibold mb-4 inline-block">
        {title}
      </h1>
      <div>
        <small className="text-grey mb-8 mr-3">{date}</small>
        {tags && tags.length
          ? tags.map(tag => (
              <Link
                key={tag + `tag`}
                to={`/tags/${kebabCase(tag)}/`}
                className="no-underline inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm text-grey-darker mr-2 rounded hover:bg-grey-darker hover:text-white"
              >
                {tag}
              </Link>
            ))
          : null}
      </div>
      <p className="mt-12 mb-8 leading-loose font-semibold text-grey-darkest">
        {description}
      </p>
      <PostContent content={content} className="content" />
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

export default BlogPostTemplate
