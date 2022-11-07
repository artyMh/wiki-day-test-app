import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Loader from './loader'

const TEST_NAME = 'Test loader name'

describe('Loader component', () => {
  test('renders loader with correct tex', () => {
    const { container } = render(<Loader>{TEST_NAME}</Loader>)

    const loader = screen.getByRole('spinbutton')
    expect(loader).toBeDefined()
    expect(loader).toHaveTextContent(TEST_NAME)
    expect(loader).toHaveClass('loader-container')
    
    const loaderIcon = container.querySelector('svg[role="img"]')
    expect(loaderIcon).toBeDefined()
    expect(loaderIcon).toHaveClass('fa-spinner')
  })
})
