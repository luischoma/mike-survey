import React from 'react'
import PropTypes from 'prop-types'

import './list-row.scss'

export const ListRow = ({ label, data, }) => {
  return (
    <li className="row-container">
      <div className="row">
        <p className="row__label">{label}: </p>
        <p className="row__data">{data}</p>
      </div>
    </li >
  )
}

ListRow.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}