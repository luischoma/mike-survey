import React from 'react'
import PropTypes from 'prop-types'

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