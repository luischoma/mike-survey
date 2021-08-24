import React from 'react'
import PropTypes from 'prop-types'

import './page-title.scss'

export const PageTitle = ({ title }) => {
  return (
    <p className="page-title">
      {title}
    </p>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}