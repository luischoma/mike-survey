import React from 'react'
import PropTypes from 'prop-types'

import './favorite-colors.scss';

import { Checkbox } from '../atoms';

export const FavoriteColors = ({ value, handleChange }) => {
  return (
    <div className="favorite-colors">
      <label className="favorite-colors__label">favorite colors:</label>
      <div className="favorite-colors__options">
        {
          Object.keys(value).map(color => {
            return (
              <Checkbox
                key={color}
                label={color}
                isChecked={value[color]}
                onClick={() => handleChange(color)}
              />
            )
          })
        }
      </div>
    </div>
  )
}


FavoriteColors.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.object
}