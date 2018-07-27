import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Liduše píše" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
