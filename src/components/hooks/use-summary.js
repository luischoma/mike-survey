export const useSummary = () => {

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

  return parseSummary
}