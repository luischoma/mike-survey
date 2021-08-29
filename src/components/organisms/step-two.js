import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, Select } from '../atoms'
import { BaseInput, GenderSelector } from '../molecules/'

import './steps.scss'

export const StepTwo = ({ state, handleChange, title, mainText, helperText }) => {
  return (
    <div>
      <div className="step__description" >
        <PageDescription description={mainText} descriptionHelper={helperText} />
      </div>
      <PageTitle title={title} />
      <BaseInput>
        <Select
          textLabel="age"
          value={state.age}
          options={Array.from(Array(65).keys())}
          handleChange={(event) => handleChange({ age: event.target.value, gender: state.gender })}
        />
      </BaseInput>
      <BaseInput>
        <GenderSelector value={state.gender} handleChange={(value) => handleChange({ age: state.age, gender: value })} />
      </BaseInput>
    </div>
  )
}

StepTwo.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  mainText: PropTypes.string,
  helperText: PropTypes.string
}
