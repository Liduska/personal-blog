import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Content from './Content'

const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="container mx-auto">
      <div class="mx-auto w-full max-w-xl mt-8">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Img sizes={image} />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <h1>{title}</h1>
            <PageContent className="content" content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
