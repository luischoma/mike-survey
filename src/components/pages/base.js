import React, { useState } from 'react'

import './base.scss';

import {
  Header,
  Footer
} from '../atoms'

import { SURVEY_QUESTIONS, initialState } from '../../survey-config/survey-config';

import { setLocalStorage, loadLocalStorage } from '../../services/local-storage/local-storage';

import { usePopup } from '../hooks/use-popup';
import { useStep } from '../hooks/use-step';
import { useSummary } from '../hooks/use-summary';

const initialStep = () => {
  const localStorage = loadLocalStorage()
  if (localStorage && localStorage.step) return localStorage.step

  return 1
}

export const Base = () => {
  const { step, callbacks } = useStep(initialStep())
  const { popupActive, setPopupActive, onClose } = usePopup()
  const [state, setState] = useState(initialState())
  const { canSave } = useSummary(state)

  const Component = SURVEY_QUESTIONS[step].component


  const isLastStep = () => {
    return step === Object.keys(SURVEY_QUESTIONS).length
  }

  const shouldFinish = (index) => {
    return isLastStep() && callbacks.length === index + 1
  }

  const saveAndFinish = () => {
    if (!canSave) return;
    setLocalStorage(state)
    onClose()
  }

  const handleClickOutsideContainer = () => {
    setLocalStorage({ step: step, ...state })
    setPopupActive(false)
  }

  return (
    popupActive &&
    <div onClick={() => handleClickOutsideContainer()} className="popup-container">
      <div onClick={(e) => e.stopPropagation()} className="popup">
        <div className="base">
          <div className="base__header">
            <Header handleClose={onClose} actualPage={step} lastPage={Object.keys(SURVEY_QUESTIONS).length} />
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
                    handleClick={shouldFinish(index) ? saveAndFinish : callbacks[index]}
                    label={SURVEY_QUESTIONS[step].footerLabels[index]}
                    buttonStatus={SURVEY_QUESTIONS[step].footerStatus[index]} />
                )
              })}
            </Footer>
          </div>
        </div >
      </div>
    </div>
  )
}