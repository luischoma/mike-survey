import React from 'react'

import { Footer } from '..'
import { render } from '@testing-library/react'

describe('When Footer is rendered', () => {
  it('renders footer tag', () => {
    const component = render(<Footer />)

    component.getByRole('footer')
  })
})