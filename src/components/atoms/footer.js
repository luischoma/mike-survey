import React from 'react'
import PropTypes from 'prop-types'

import './footer.scss'

export const Footer = ({ children }) => {
  return (
    <footer className="footer">
      {children}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.node,
}