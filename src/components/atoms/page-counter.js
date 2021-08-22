import React from 'react'
import PropTypes from 'prop-types'

import './page-counter.scss'

export const PageCounter = ({ actualPage, lastPage }) => {
  return (
    <div className="page-counter">
      <p className="page-counter__actual-page">
        step {actualPage}
      </p>
      {lastPage && <p className="page-counter__last-page">/{lastPage}</p>}
    </div>
  )
}

PageCounter.propTypes = {
  actualPage: PropTypes.string.isRequired,
  lastPage: PropTypes.string,
}