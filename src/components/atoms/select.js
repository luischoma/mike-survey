import React from 'react'
import PropTypes from 'prop-types'

import './select.scss'

export const Select = ({ textLabel, value, options, handleChange }) => {
  return (
    <>
      <label htmlFor={textLabel} className="label">{textLabel}:</label>
      <div className="select-container">
        <select value={value} onChange={handleChange} className="select">
          {
            options.map((option) => {
              return (
                <option key={option} className="select__option">{option}</option>
              )
            })
          }
        </select>
      </div>
    </>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  textLabel: PropTypes.string
}