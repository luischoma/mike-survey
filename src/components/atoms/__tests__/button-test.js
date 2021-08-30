import React from 'react'

import { Button } from '..'
import { render, fireEvent } from '@testing-library/react'

const handleClick = jest.fn()

describe('When Button is rendered', () => {
  it('renders correctly', () => {
    const component = render(<Button label="test" />)

    component.getByText('test')
  })

  describe('with buttonStatus prop', () => {
    it('adds class to button', () => {
      const component = render(<Button buttonStatus='lightened' />)

      expect(component.getElementsByClassName('button--lightened').length).toBe(1)

    })
  })

  describe('and is clicked', () => {
    it('calls handleClick callback', async () => {
      const component = render(<Button label="test" handleClick={handleClick} />)

      await fireEvent.click(getByText('test'))

      expect(handleClick).toHaveBeenCalled()
    })
  })
})