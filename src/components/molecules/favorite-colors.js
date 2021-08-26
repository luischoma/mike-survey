import React, { useState } from 'react'

import './favorite-colors.scss';

import { Checkbox } from '../atoms';

const initialColorsState = {
  yellow: false,
  green: false,
  black: false,
  red: false,
  pink: false,
  blue: false,
  orange: false,
  white: false,
}

export const FavoriteColors = () => {
  const [colors, setColors] = useState({ ...initialColorsState })

  const handleInputChange = (color) => {
    setColors({
      ...colors, [color]: !colors[color]
    })
  }

  return (
    <div className="favorite-colors">
      <label className="favorite-colors__label">favorite colors:</label>
      <div className="favorite-colors__options">

        {
          Object.keys(colors).map(color => {
            return (
              <Checkbox key={color}
                label={color} isChecked={colors[color]}
                onClick={() => handleInputChange(color)} />
            )
          })
        }
      </div>
    </div>
  )
}