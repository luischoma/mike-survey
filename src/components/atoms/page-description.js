import React from 'react'
import PropTypes from 'prop-types'

import './page-description.scss'

export const PageDescription = ({ description, descriptionHelper }) => {
  return (
    <div className="page-description">
      <p className="page-description__main-description">
        {description}
      </p>
      {descriptionHelper && <p className="page-description__helper">{descriptionHelper}</p>}
    </div>
  )
}

PageDescription.propTypes = {
  description: PropTypes.string.isRequired,
  descriptionHelper: PropTypes.string,
}