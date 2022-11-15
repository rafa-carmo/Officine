import { render, screen, waitFor } from '@testing-library/react'
import { UserAvatar } from 'components/UserAvatar/'

import { TopMenu } from '.'

describe('render TopMenu', () => {
  it('should render a TopMenu with user', async () => {
    render(<TopMenu user="Usuario" />)
    await waitFor(() => {
      expect(screen.getByText(/Olá, Usuario/)).toBeInTheDocument()
    })
  })
})
