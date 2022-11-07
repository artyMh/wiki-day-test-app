import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Modal from './modal'

const TEST_MODAL_TITLE = 'Test modal title'
const TEST_MODAL_TEXT = 'Test modal text'

describe('Modal component', () => {
  test('not renders if not showed', () => {
    const { baseElement } = render(
      <Modal
        show={false}
        onCloseButtonClick={() => {}}
        title={TEST_MODAL_TITLE}
      />)
    
    expect(baseElement?.style.overflowY).toBe('')
    const modal = screen.queryByRole('dialog')

    expect(modal).toBeNull()
  })

  test('renders if showed', () => {
    const { baseElement } = render(
      <Modal
        show={true}
        onCloseButtonClick={() => {}}
        title={TEST_MODAL_TITLE}
      >
        {TEST_MODAL_TEXT}
      </Modal>
    )

    expect(baseElement?.style.overflowY).toBe('hidden')
    expect(screen.queryByRole('dialog')).toBeDefined()
    expect(screen.getByText(TEST_MODAL_TITLE)).toBeDefined()
    expect(screen.getByText(TEST_MODAL_TEXT)).toBeDefined()
  })

  test('renders with show/hide', () => {
    const onClick = vi.fn()
    const { baseElement } = render(
      <Modal
        show={true}
        onCloseButtonClick={onClick}
        title={TEST_MODAL_TITLE}
      >
        {TEST_MODAL_TEXT}
      </Modal>
    )

    expect(screen.getByRole('dialog')).toBeDefined()
    expect(baseElement?.style.overflowY).toBe('hidden')
    fireEvent.click(screen.getByText('Close'))
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(baseElement?.style.overflowY).toBe('unset')
    screen.debug()
  })
})
