import React from 'react'

import { Checkbox } from '..'
import { render, fireEvent } from '@testing-library/react'

const onClick = jest.fn()

describe('When Checkbox is rendered', () => {
  it('renders buton box and label', () => {
    const component = render(<Checkbox label="test" onClick={onClick} />)

    component.getByText('test')
    component.getByRole('button')
  })

  describe('and box is clicked', () => {
    it('calls onClick callback', async () => {
      const component = render(<Checkbox label="test" onClick={onClick} />)

      await fireEvent.click(component.getByText('test'))

      expect(onClick).toHaveBeenCalled()
    })
  })

  describe('and is not checked', () => {
    it('has unchecked style', () => {
      const component = render(<Checkbox label="test" onClick={onClick} />)

      expect(component.getElementsByClassName('checkbox__data--unchecked').length).toBe(1)
    })
  })

  describe('and is checked', () => {
    it('has checked style', () => {
      const component = render(<Checkbox label="test" onClick={onClick} isChecked />)

      expect(component.getElementsByClassName('checkbox__data--checked').length).toBe(1)
    })
  })

})