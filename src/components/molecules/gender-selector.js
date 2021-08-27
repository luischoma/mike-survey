import React from 'react'
import PropTypes from 'prop-types'

import './gender-selector.scss';

import { RadioInput } from '../atoms';

const POSSIBLE_GENDERS = ['man', 'woman', 'transgender', 'non-binary', 'prefer not to respond']

export const GenderSelector = ({ handleChange, value }) => {
  return (
    <div className="gender-selector">
      <label className="gender-selector__label">gender:</label>
      <div className="gender-selector__options">
        {
          POSSIBLE_GENDERS.map(gender => {
            return (
              <RadioInput key={gender}
                label={gender} isChecked={gender === value}
                onClick={() => handleChange(gender)} />
            )
          })
        }
      </div>
    </div>
  )
}

GenderSelector.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string
}