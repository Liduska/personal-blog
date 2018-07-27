import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <header className="mb-2 md:mb-4 lg:mb-8">
    <nav className="relative mx-auto h-64 flex flex-col items-center justify-center text-center z-10 bg-blue-light">
      <a
        className="no-underline font-bold font-handwritten text-5xl text-white hover:text-primary-dark transition-linear mb-6"
        href="/"
      >
        Liduše píše
      </a>
      <p className="text-center text-sm text-white font-mono antialiased">
        subtitle
      </p>
      <ul className="mt-8 mb-2 list-reset flex flex-col md:flex-row justify-center items-center py-4">
        <li className="mx-2 mb-2 md:mb-0">
          <a
            className="no-underline text-white text-sm font-normal font-bold antialiased hover:text-primary-dark uppercase transition-linear"
            href="/blog"
          >
            blog
          </a>
        </li>
        <li className="mx-2 mb-2 md:mb-0">
          <a
            className="no-underline text-white text-sm font-normal font-bold antialiased hover:text-primary-dark uppercase transition-linear"
            href="/kdopak-to-pise"
          >
            kdopak to píše
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
