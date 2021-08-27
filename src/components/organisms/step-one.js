import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, TextInput } from '../atoms'
import { BaseInput } from '../molecules/base-input'

export const StepOne = ({ state, handleChange, title, mainText, helperText }) => {
  return (
    <div>
      <PageDescription description={mainText} descriptionHelper={helperText} />
      <PageTitle title={title} />
      <BaseInput>
        <TextInput
          textLabel="name"
          optional value={state.name}
          handleChange={(event) => {
            handleChange({ name: event.target.value, email: state.email })
          }} />
      </BaseInput>
      <BaseInput>
        <TextInput
          textLabel="email"
          optional value={state.email}
          handleChange={(event) => {
            handleChange({ name: state.name, email: event.target.value })
          }} />
      </BaseInput>
    </div>
  )

}

StepOne.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  mainText: PropTypes.string,
  helperText: PropTypes.string
}