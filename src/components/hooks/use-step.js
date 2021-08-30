import { useState } from 'react';

import { SURVEY_QUESTIONS } from '../../survey-config/survey-config';

export const useStep = ((initialStep) => {
  const [step, setStep] = useState(initialStep)

  const onPrevClick = () => {
    if (step > 1) setStep(step - 1)
  }

  const onNextClick = () => {
    const maxSteps = Object.keys(SURVEY_QUESTIONS).length

    if (step < maxSteps) setStep(step + 1)
  }

  const prevClickCallback = () => {
    return onPrevClick()
  }

  const nextClickCallback = () => {
    return onNextClick()
  }

  return { step, callbacks: [prevClickCallback, nextClickCallback] };
})