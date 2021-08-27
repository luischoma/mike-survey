import React, { useState } from 'react'

import './base.scss';

import {
  Header,
  Footer
} from '../atoms'

import { SURVEY_CONFIG } from '../../survey-config/survey-config';

import { useStep } from '../hooks/use-step';

export const initialState = {
  1: {
    name: '',
    email: ''
  },
  2: {
    gender: 'prefer not to respond',
    age: '18'
  }
}

export const Base = () => {
  const { step, callbacks } = useStep()

  const Component = SURVEY_CONFIG[step].component

  const [state, setState] = useState(initialState)

  console.log('stateeeee >>> ', state)
  return (
    <div className="base">
      <div className="base__header">
        <Header actualPage={step} lastPage={Object.keys(SURVEY_CONFIG).length} />
      </div>

      <div className="base__content">
        {<Component state={state[step]} handleChange={(params) => { setState({ ...state, [step]: { ...params } }) }}></Component>}
      </div>

      <div className="base__footer">
        <Footer>
          {SURVEY_CONFIG[step].footer.map((Button, index) => {
            return (
              <Button
                key={index}
                handleClick={callbacks[index]}
                label={SURVEY_CONFIG[step].footerLabels[index]}
                buttonStatus={SURVEY_CONFIG[step].footerStatus[index]} />
            )
          })}
        </Footer>
      </div>
    </div >
  )
}