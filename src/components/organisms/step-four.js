import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle } from '../atoms'
import { BaseInput, Summary } from '../molecules'

export const StepFour = ({ state, title, mainText, helperText }) => {

  return (
    <div className="summary">
      <PageDescription description={mainText} descriptionHelper={helperText} />
      <PageTitle title={title} />
      <BaseInput>
        <Summary state={state} />
      </BaseInput>
    </div>
  )

}

StepFour.propTypes = {
  state: PropTypes.object,
  title: PropTypes.string,
  mainText: PropTypes.string,
  helperText: PropTypes.string
}