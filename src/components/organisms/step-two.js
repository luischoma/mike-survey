import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, Select } from '../atoms'
import { BaseInput, GenderSelector } from '../molecules/'

export const StepTwo = ({ state, handleChange, title, mainText, helperText }) => {
  return (
    <div>
      <PageDescription description={mainText} descriptionHelper={helperText} />
      <PageTitle title={title} />
      <BaseInput>
        <Select
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
