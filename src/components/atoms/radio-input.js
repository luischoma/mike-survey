import React from 'react'
import PropTypes from 'prop-types'

import './radio-input.scss'

export const RadioInput = ({ onClick, label, isChecked = false }) => {
  return (
    <div className="radio-input">
      <button onClick={onClick} className='radio-input__data'>
        <div className={`${isChecked ? 'radio-input__data--checked' : 'radio-input__data--unchecked'}`}></div>
      </button>
      <label className="radio-input__label">{label}</label>
    </div>
  )
}

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}