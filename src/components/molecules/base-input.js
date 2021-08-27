import React from 'react'
import PropTypes from 'prop-types'

import './base-input.scss'


export const BaseInput = ({ children }) => {
  return (
    <div className="base__input">
      {children}
    </div>
  )
}

BaseInput.propTypes = {
  children: PropTypes.node
}