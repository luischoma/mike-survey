import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle } from '../atoms'
import { BaseInput, Summary } from '../molecules'

import './steps.scss'

export const StepFour = ({ state, title, mainText, helperText }) => {

  return (
    <div className="summary">
      <div className="step__description" >
        <PageDescription description={mainText} descriptionHelper={helperText} />
      </div>
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