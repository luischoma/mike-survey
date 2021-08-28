import React from 'react'
import PropTypes from 'prop-types'

import { useSummary } from '../hooks/use-summary'

import {
  ListRow
} from '../atoms'

import './summary.scss'

export const Summary = ({ state = {} }) => {
  let parsedSummary = {}

  const parseSummary = useSummary()
  if (state) { parsedSummary = parseSummary(state) }

  return (
    <ul className="summary">
      {
        Object.keys(parsedSummary).map(item => {
          return (
            <ListRow key={item} label={item} data={parsedSummary[item]} />
          )
        })
      }
    </ul>
  )
}


Summary.propTypes = {
  state: PropTypes.object,

}
