import React from 'react'
import PropTypes from 'prop-types'

import './checkbox.scss'

export const Checkbox = ({ onClick, label, isChecked = false }) => {
  return (
    <div className="checkbox">
      <button onClick={onClick} className='checkbox__data'>
        <div className={`${isChecked ? 'checkbox__data--checked' : 'checkbox__data--unchecked'}`}></div>
      </button>
      <label className="checkbox__label">{label}</label>
    </div>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}