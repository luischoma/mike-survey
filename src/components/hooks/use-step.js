import { useState } from 'react';

import { SURVEY_QUESTIONS } from '../../survey-config/survey-config';

export const useStep = (() => {
  const [step, setStep] = useState(1)

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
    if (step === Object.keys(SURVEY_QUESTIONS).length) return console.log('finished');

    return onNextClick()
  }

  return { step, callbacks: [prevClickCallback, nextClickCallback] };
})