import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from './button'

const TEST_NAME = 'Test button name'

describe('Button component', () => {
  test('renders with correct text and click', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>{TEST_NAME}</Button>)
    const button = screen.getByText(TEST_NAME)

    expect(button).toBeDefined()
    expect(button).toHaveTextContent(TEST_NAME)

    fireEvent.click(screen.getByText(TEST_NAME))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
