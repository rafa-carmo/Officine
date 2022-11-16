import { render, screen, waitFor } from '@testing-library/react'

import { UserAvatar } from '.'

describe('render UserAvatar', () => {
  it('should render a UserAvatar with Image', async () => {
    render(
      <UserAvatar
        name="User"
        email="Email@email.com"
        avatar="/images/avatar.jpeg"
      />
    )
    await waitFor(() => {
      expect(screen.findByRole('img')).toBeTruthy()
    })
  })

  it('should render a UserAvatar with svg icon', async () => {
    render(<UserAvatar name="User" email="Email@email.com" />)
    await waitFor(() => {
      expect(screen.findByRole('img')).toBeTruthy()
    })
  })

  it('should test popover is closed', async () => {
    render(<UserAvatar name="User" email="Email@email.com" />)
    const user = screen.queryByText('User')
    expect(user).toBeNull()
  })
  it('should test open popover with click', async () => {
    render(<UserAvatar name="User" email="Email@email.com" />)
    const button = await screen.findByRole('button')
    await waitFor(() => {
      button.click()
      expect(screen.findByText('User')).toBeTruthy()
    })
  })
})
