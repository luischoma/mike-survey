import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './base.scss';

import {
  Header,
  Footer
} from '../atoms'

import { SURVEY_QUESTIONS, INITIAL_STATE } from '../../survey-config/survey-config';

import { useStep } from '../hooks/use-step';

export const Base = ({ handleClose }) => {
  const { step, callbacks } = useStep()

  const Component = SURVEY_QUESTIONS[step].component

  const [state, setState] = useState(INITIAL_STATE)

  const isLastStep = () => {
    return step === Object.keys(SURVEY_QUESTIONS).length
  }

  return (
    <div className="base">
      <div className="base__header">
        <Header handleClose={handleClose} actualPage={step} lastPage={Object.keys(SURVEY_QUESTIONS).length} />
      </div>

      <div className="base__content">
        {<Component
          state={isLastStep() ? state : state[step]}
          handleChange={(params) => { setState({ ...state, [step]: { ...params } }) }}
          mainText={SURVEY_QUESTIONS[step].mainText}
          helperText={SURVEY_QUESTIONS[step].helperText}
          title={SURVEY_QUESTIONS[step].title}
        />}
      </div>

      <div className="base__footer">
        <Footer>
          {SURVEY_QUESTIONS[step].footer.map((Button, index) => {
            return (
              <Button
                key={index}
                handleClick={callbacks[index]}
                label={SURVEY_QUESTIONS[step].footerLabels[index]}
                buttonStatus={SURVEY_QUESTIONS[step].footerStatus[index]} />
            )
          })}
        </Footer>
      </div>
    </div >
  )
}

Base.propTypes = {
  handleClose: PropTypes.func
}