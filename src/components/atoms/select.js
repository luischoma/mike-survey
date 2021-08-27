import React from 'react'
import PropTypes from 'prop-types'

import './select.scss'

export const Select = ({ options, handleChange }) => {
  return (
    <div className="select-container">
      <select onChange={handleChange} className="select">
        {
          options.map((option) => {
            return (
              <option key={option} className="select__option">{option}</option>
            )
          })
        }
      </select>
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func.isRequired
}