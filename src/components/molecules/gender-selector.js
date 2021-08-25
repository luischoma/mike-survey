import React, { useState } from 'react'

import './gender-selector.scss';

import { RadioInput } from '../atoms';

const POSSIBLE_GENDERS = ['man', 'woman', 'transgender', 'non-binary', 'prefer not to respond']

export const GenderSelector = () => {
  const [genderState, setGender] = useState()

  const handleInputChange = (gender) => {
    setGender(gender)
  }

  return (
    <div className="gender-selector">
      {
        POSSIBLE_GENDERS.map(gender => {
          return (
            <RadioInput key={gender}
              label={gender} isChecked={gender === genderState}
              onClick={() => handleInputChange(gender)} />
          )
        })
      }
    </div>
  )
}