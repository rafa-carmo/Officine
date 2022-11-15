import { render, screen } from '@testing-library/react'

import { Notifications } from '.'

describe('render Notifications', () => {
  it('should render a Notifications', () => {
    render(<Notifications />)
  })
})
