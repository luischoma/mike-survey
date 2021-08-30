import React from 'react'

import { Header } from '..'
import { render, fireEvent } from '@testing-library/react'

const defaultProps = {
  page: 1,
  lastPage: 3,
  handleClose: jest.fn()
}

describe('When Header is rendered', () => {
  it('renders header tag', () => {
    const component = render(<Header {...defaultProps} />)

    component.getByRole('header')
  })

  describe('and close button is clicked', () => {
    it('calls handleClose callback', async () => {
      const component = render(<Header {...defaultProps} />)

      await fireEvent.click(component.getByRole('button'))

      expect(defaultProps.handleClose).toHaveBeenCalled()
    })
  })
})