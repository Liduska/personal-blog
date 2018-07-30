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
      <div className="">
        <div className="">
          <div className="">
            <h1 className="text-grey-darkest text-4xl font-semibold mb-4 inline-block">
              {title}
            </h1>
            <small className="block text-grey mb-8">{date}</small>
            <p className="my-4 leading-loose font-semibold text-grey-darkest">
              {description}
            </p>
            {image ? <Img sizes={image} /> : null}
            <PostContent content={content} className="content" />
            {tags && tags.length ? (
              <div className="mt-4">
                <h4>Tags</h4>
                <div className="pt-2">
                  {tags.map(tag => (
                    <span
                      key={tag + `tag`}
                      className="bg-grey-lighter px-1 mx-1 text-sm rounded hover:bg-grey-darker"
                    >
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        className="no-underline text-black hover:text-white"
                      >
                        {tag}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
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
