import { render, screen } from '@testing-library/react'

import { DashboardCard } from '.'

describe('render DashboardCard', () => {
  it('should render a DashboardCard', () => {
    render(<DashboardCard />)
  })
})
