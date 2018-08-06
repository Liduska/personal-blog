import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import InstagramIcon from '../components/icons/Instagram'
import FacebookIcon from '../components/icons/Facebook'
import LinkedInIcon from '../components/icons/LinkedIn'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet defaultTitle="Liduše píše" titleTemplate="%s - Liduše píše">
      <html lang="cs" />
      <body className="font-serif md:text-lg" />
      <meta name="description" content="Blog Lidmily Maršálkové" />
      <link
        href="https://fonts.googleapis.com/css?family=Caveat&amp;subset=latin-ext"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <footer className="relative mt-8 pt-8 bg-grey-darkest text-white text-center">
      <h2 className="mb-8">Liduše píše</h2>
      <form
        name="subscription"
        method="post"
        data-netlify="true"
        className="flex flex-col mb-3"
      >
        <input type="hidden" name="form-name" value="subscription" />
        <div className="flex flex-col self-center text-sm">
          <div className="sm:flex">
            <input
              className="appearance-none sm:w-full text-grey-darker border border-grey-dark py-2 px-4 mr-4 mb-4 sm:mb-0 leading-tight"
              type="email"
              name="email"
              placeholder="Chci vědět, co Liduše píše"
            />
            <button
              type="submit"
              className="border border-white text-white p-2 transition-linear hover:bg-white hover:text-black"
            >
              Přihlásit&nbsp;odběr
            </button>
          </div>
          <label className="block my-2">
            <input
              name="terms"
              className="mr-2 leading-tight"
              type="checkbox"
            />
            <span className="text-sm">
              Pokud se na lidusepise.cz objeví nový článek, chci o tom vědět.
            </span>
          </label>
        </div>
      </form>
      <div className="flex justify-between items-center py-5">
        <p className="text-sm text-grey-light mx-10">© Lidmila Maršálková</p>
        <div className="flex justify-end mx-10">
          <a
            className="inline-block mx-1"
            href="https://www.instagram.com/lidmilka/"
          >
            <InstagramIcon className="w-8 fill-current text-white hover:text-grey" />
          </a>
          <a
            className="inline-block mx-1"
            href="https://www.facebook.com/copywriterlidmila"
          >
            <FacebookIcon className="w-8 fill-current text-white hover:text-grey" />
          </a>
          <a
            className="inline-block mx-1"
            href="https://www.linkedin.com/in/lmarsalkova/"
          >
            <LinkedInIcon className="w-8 fill-current text-white hover:text-grey" />
          </a>
        </div>
      </div>
    </footer>
  </div>
)

export default TemplateWrapper
