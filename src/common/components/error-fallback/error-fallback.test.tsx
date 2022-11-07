import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import ErrorFallback from './error-fallback'

const TEST_ERROR_NAME = 'Test button name'
const TEST_ERROR = new Error(TEST_ERROR_NAME)

describe('ErrorFallback component', () => {
  test('renders with correct text and click', () => {
    const onClick = vi.fn()
    render(<ErrorFallback error={TEST_ERROR} resetErrorBoundary={onClick}></ErrorFallback>)
    const errorFallback = screen.getByRole('alert')

    expect(errorFallback).toBeDefined()
    expect(errorFallback).toHaveTextContent(TEST_ERROR_NAME)

    fireEvent.click(screen.getByText('Refresh page'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
