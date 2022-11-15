import { render, screen, waitFor } from '@testing-library/react'
import { debug } from 'console'

import { UserAvatar } from '.'

describe('render UserAvatar', () => {
  it('should render a UserAvatar with Image', async () => {
    render(<UserAvatar avatar="/images/avatar.jpeg" />)
    await waitFor(() => {
      expect(screen.findByRole('img')).toBeTruthy()
    })
  })

  it('should render a UserAvatar with svg icon', async () => {
    render(<UserAvatar />)
    await waitFor(() => {
      expect(screen.findByRole('img')).toBeTruthy()
    })
  })
})
