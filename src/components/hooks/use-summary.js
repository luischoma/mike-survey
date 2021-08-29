import { useState, useEffect } from 'react';

export const useSummary = (state) => {
  const [canSave, setCanSave] = useState(false)
  useEffect(() => {
    validateFields()
  }, [state])

  const parseColors = (obj) => {
    const colors = obj.colors

    if (!colors) return;

    const activeColors = Object.keys(colors).filter((cor) => colors[cor])

    return { colors: activeColors }
  }


  const parseSummary = (state) => {
    if (!state) return;
    const flattenedState = Object.assign(...Object.values(state), {})

    const parsedColors = parseColors(flattenedState)

    const parsedSummary = { ...flattenedState, ...parsedColors }

    return parsedSummary
  }

  const validateFields = () => {
    const parsedSummary = parseSummary(state)
    const mandatoryFields = Object.keys(parsedSummary).filter((field) => field !== 'name' && field !== 'email')

    const canSave = mandatoryFields.map((field) => parsedSummary[field]).every(value => Boolean(value))

    canSave ? setCanSave(true) : setCanSave(false)
  }



  return { parseSummary, canSave }
}