import React from 'react'

import { PageDescription } from '..'
import { render } from '@testing-library/react'

describe('When PageDescription is rendered', () => {
  describe('with both description and helper', () => {
    it('shows full label', () => {
      const component = render(<PageDescription description="test" descriptionHelper="testHelper" />)

      component.getByText('test')
      component.getByText('testHelper')
    })
  })

  describe('with description only', () => {
    it('does not show helper', () => {
      const component = render(<PageDescription description="test" descriptionHelper="testHelper" />)

      expect(component.getElementsByClassName('page-description__helper').length).toBe(0)
    })
  })
})