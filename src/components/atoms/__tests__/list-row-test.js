import React from 'react'

import { ListRow } from '..'
import { render } from '@testing-library/react'

describe('When ListRow is rendered', () => {
  const component = render(<ListRow label='testLabel' data='testData' />)

  it('renders a li tag', () => {
    component.getByRole('li')
  })

  it('renders label and data', () => {
    component.getByText('testLabel')
    component.getByText('testData')
  })
})