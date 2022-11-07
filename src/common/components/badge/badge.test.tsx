import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Badge from './badge'

const TEST_NAME = 'Test badge name'

describe('Badge component', () => {
  test('renders badge with correct text', () => {
    render(<Badge>{TEST_NAME}</Badge>)
    const badge = screen.getByText(TEST_NAME)

    expect(badge).toBeDefined()
    expect(badge).toHaveTextContent(TEST_NAME)
    expect(badge).toHaveClass('badge-container')
  })

  test('renders badge with selected state', () => {
    render(<Badge isSelected>{TEST_NAME}</Badge>)
    const badge = screen.getByText(TEST_NAME)

    expect(badge).toBeDefined()
    expect(badge).toHaveTextContent(TEST_NAME)
    expect(badge).toHaveClass('badge-container badge-container_selected')
  })

  test('renders badge with onclick state', () => {
    const onClick = vi.fn()
    render(<Badge onClick={onClick}>{TEST_NAME}</Badge>)

    fireEvent.click(screen.getByText(TEST_NAME))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
