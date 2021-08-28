import React from 'react'
import PropTypes from 'prop-types'

import { PageDescription, PageTitle, TextInput } from '../atoms'
import { FavoriteColors, BaseInput } from '../molecules'

export const StepThree = ({ state, handleChange, title, mainText, helperText }) => {
  return (
    <div>
      <PageDescription description={mainText} descriptionHelper={helperText} />
      <PageTitle title={title} />
      <BaseInput>
        <TextInput
          textLabel="favorite book"
          value={state.book}
          handleChange={(event) => {
            handleChange({ book: event.target.value, colors: state.colors })
          }} />
      </BaseInput>
      <BaseInput>
        <FavoriteColors
          colors={state.colors}
          handleChange={(color) => handleChange(
            { book: state.book, colors: { ...state.colors, [color]: !state.colors[color] } }
          )} />
      </BaseInput>
    </div>
  )

}

StepThree.propTypes = {
  state: PropTypes.object,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  mainText: PropTypes.string,
  helperText: PropTypes.string
}