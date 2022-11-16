import { render, screen } from '@testing-library/react'

import { MinimalCard } from '.'

describe('render MinimalCard', () => {
  it('should render a MinimalCard', () => {
    render(<MinimalCard title="Teste" value={0} percentage={1} />)
  })
})
