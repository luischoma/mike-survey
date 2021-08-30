import React from 'react'

import { PageCounter } from '..'
import { render } from '@testing-library/react'

describe('When PageCounter is rendered', () => {
  describe('with both actual and last pages', () => {
    it('shows full label', () => {
      const component = render(<PageCounter actualPage="1" lastPage="3" />)

      component.getByText('step 1/3')
    })
  })

  describe('with actual page only', () => {
    it('does not show last page', () => {
      const component = render(<PageCounter actualPage="1" />)

      component.getByText('step 1')
    })
  })
})