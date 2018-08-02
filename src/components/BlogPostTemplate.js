import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Content from './Content'

const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="container max-w-xl mx-auto px-4 py-8 md:mt-8">
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
      <p className="my-4 leading-loose font-semibold text-grey-darkest">
        {description}
      </p>
      <div className="mx-auto max-w-md py-6">
        {image ? <Img sizes={image} /> : null}
      </div>
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
