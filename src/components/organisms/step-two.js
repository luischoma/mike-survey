import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, Select } from '../atoms'
import { BaseInput, GenderSelector } from '../molecules/'

export const StepTwo = ({ state, handleChange }) => {
  return (
    <div>
      <PageDescription description="we want to know you better!" descriptionHelper="this survey won't take more than 5 minutes." />
      <PageTitle title="your identity" />
      <BaseInput>
        <Select value={state.age} options={Array.from(Array(65).keys())} handleChange={(event) => handleChange({ age: event.target.value, gender: state.gender })} />
      </BaseInput>
      <BaseInput>
        <GenderSelector value={state.gender} handleChange={(value) => handleChange({ age: state.age, gender: value })} />
      </BaseInput>
    </div>
  )
}

StepTwo.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func
}
