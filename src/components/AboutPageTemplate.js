import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Content from './Content'

const AboutPageTemplate = ({ title, image, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="container mx-auto">
      <div className="mx-auto max-w-lg mt-16">
        <div className="md:flex items-end md:-mx-3 mb-6">
          <div className="about-image">
            {image ? (
              <Img
                sizes={image}
                outerWrapperClassName="h-full"
                className="h-full"
              />
            ) : null}
          </div>
          <div className="px-3 mb-6 md:mb-0">
            <h1 className="text-xl font-normal">{title}</h1>
            <PageContent className="about" content={content} />
          </div>
        </div>
        <h2 className="text-center font-normal mt-16 mb-8">
          Chcete mi napsat? Směle do toho!
        </h2>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          className="mx-auto w-full max-w-sm pb-8"
        >
          <input name="form-name" value="contact" type="hidden" />

          <div className="flex flex-wrap md:-mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="contact-form-input"
                name="name"
                required
                placeholder="Vaše jméno"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="contact-form-input"
                name="email"
                required
                placeholder="Váš e-mail"
                type="email"
              />
            </div>
            <div className="w-full px-3">
              <textarea
                className="contact-form-input"
                name="message"
                required
                placeholder="Zpráva"
              />
            </div>
          </div>
          <p className="text-center">
            <button type="submit">Odeslat</button>
          </p>
        </form>
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
