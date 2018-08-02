import React from 'react'
import { Link } from 'gatsby'

const NavItem = ({ to, children }) => (
  <li className="mx-2 mb-2 md:mb-0">
    <Link
      className="no-underline text-black text-sm font-bold antialiased hover:text-grey-darker uppercase transition-linear"
      to={to}
    >
      {children}
    </Link>
  </li>
)

const Navbar = () => (
  <header className="mb-2 md:mb-4 lg:mb-8">
    <div className="text-center my-10">
      <a
        className="no-underline font-handwritten text-5xl text-grey-darkest hover:text-grey-darker mb-6"
        href="/"
      >
        Liduše píše
      </a>
    </div>
    <nav className="relative mx-auto container flex flex-col items-center justify-center text-center z-10 border-t border-b">
      <ul className="list-reset flex flex-col md:flex-row justify-center items-center py-4">
        <NavItem to="/">homepage</NavItem>
        <NavItem to="/blog">blog</NavItem>
        <NavItem to="/kdopak-to-pise">kdopak to píše</NavItem>
      </ul>
    </nav>
  </header>
)

export default Navbar
