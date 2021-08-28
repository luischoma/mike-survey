import React from 'react'
import PropTypes from 'prop-types'

import './favorite-colors.scss';

import { Checkbox } from '../atoms';

export const FavoriteColors = ({ colors, handleChange }) => {
  return (
    <div className="favorite-colors">
      <label className="favorite-colors__label">favorite colors:</label>
      <div className="favorite-colors__options">

        {
          Object.keys(colors).map(color => {
            return (
              <Checkbox
                key={color}
                label={color}
                isChecked={colors[color]}
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
  colors: PropTypes.object
}