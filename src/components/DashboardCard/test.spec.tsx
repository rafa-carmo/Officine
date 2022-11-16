import { render, screen, waitFor } from '@testing-library/react'

import { DashboardCard } from '.'

describe('render DashboardCard', () => {
  it('should render a DashboardCard', () => {
    render(<DashboardCard>Hello Test</DashboardCard>)
    expect(screen.findAllByText(/hello test/)).toBeInTheDocument()
  })
  it('Should render a DashboardCard with scroll', async () => {
    render(<DashboardCard scroll>Hello Test</DashboardCard>)
    const section = await screen.findByRole('section')
    expect(section).toHaveAttribute('class', 'overflow-y-auto')
  })

  it('Should render a Dashboard with text normal size', async () => {
    // test normal size of title
    render(
      <DashboardCard title="Teste Title" titleSize="normal">
        Hello Test
      </DashboardCard>
    )
    const header = await screen.findByRole('heading')
    await waitFor(() => {
      expect(header).toHaveClass('text-lg')
    })
  })
  it('Should render a Dashboard with text normal size', async () => {
    // test normal size of title
    render(
      <DashboardCard title="Teste Title" titleSize="large">
        Hello Test
      </DashboardCard>
    )
    const header = await screen.findByRole('heading')
    await waitFor(() => {
      expect(header).toHaveClass('text-2xl')
    })
  })
})
