import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, TextInput } from '../atoms'
import { BaseInput } from '../molecules/base-input'

export const StepOne = ({ state, handleChange }) => {

  return (
    <div>
      <PageDescription description="we want to know you better!" descriptionHelper="this survey won't take more than 5 minutes." />
      <PageTitle title="your identity" />
      <BaseInput>
        <TextInput textLabel="name" optional value={state.name} handleChange={(event) => { handleChange([event.target.value, state.email]) }} />
      </BaseInput>
      <BaseInput>
        <TextInput textLabel="email" optional value={state.email} handleChange={(event) => { handleChange([state.name, event.target.value]) }} />
      </BaseInput>
    </div>
  )

}

StepOne.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func
}
