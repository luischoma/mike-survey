import React from 'react'
import PropTypes from 'prop-types'

import './text-input.scss'

export const TextInput = ({ textLabel, optional = false, handleChange, value }) => {
  return (
    <div className="input">
      <label htmlFor={textLabel} className="input__label">
        {textLabel}{optional && <p className="input__label--optional">*</p>}:
      </label>
      <input value={value} onChange={handleChange} type="text" id={textLabel} className="input__textfield" />
    </div>
  )
}

TextInput.propTypes = {
  textLabel: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  handleChange: PropTypes.func,
  value: PropTypes.string
}