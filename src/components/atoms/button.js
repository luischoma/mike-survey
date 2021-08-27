import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

export const Button = ({ buttonStatus = 'default', label, handleClick }) => {
  return (
    <button
      className={`button button--${buttonStatus}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonStatus: PropTypes.oneOf(['default', 'lightened', 'deactivated', 'special']),
  handleClick: PropTypes.func.isRequired
}