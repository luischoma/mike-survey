import React from 'react'

import { TextInput } from '..'
import { render, fireEvent } from '@testing-library/react'

const onChange = jest.fn()

describe('When TextInput is rendered', () => {
  it('renders input and label', () => {
    const component = render(<Checkbox textLabel="test" />)

    component.getByText('test')
    component.getByRole('input')
  })

  describe('and input is changed', () => {
    it('calls handleChange callback', async () => {
      const component = render(<Checkbox label="test" handleChange={onChange} />)

      await fireEvent.change(input, { target: { value: '10' } })

      expect(onChange).toHaveBeenCalled()
    })
  })

  describe('and is optional', () => {
    it('renders optional hint', () => {
      const component = render(<Checkbox textLabel="test" optional />)

      expect(component.getElementsByClassName('input__label--optional').length).toBe(1)
    })
  })
})