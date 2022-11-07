import { describe, test, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import Card, { CardProps } from './card'

const TEST_TITLE = 'Test card title'
const TEST_TEXT = 'Test card text'
const TEST_YEAR = 2000
const TEST_IMG_URL = 'test/path/to/image'
const TEST_WIKI_URL = 'https://en.wikipedia.org/wiki/React_(JavaScript_library)'

const testCardProps: CardProps = {
  title: TEST_TITLE,
  text: TEST_TEXT,
  year: TEST_YEAR,
  imageUrl: TEST_IMG_URL,
  wikiUrl: TEST_WIKI_URL
}

describe('Card component', () => {
  test('renders card with correct props', () => {
    render(<Card {...testCardProps}></Card>)

    expect(screen.getByText(TEST_TITLE)).toBeDefined()
    expect(screen.queryByText(TEST_TEXT)).toBeNull()
    expect(screen.getByText(TEST_YEAR)).toBeDefined()
    expect(screen.getByText(TEST_TITLE)).toBeDefined()
    expect(screen.getByText(TEST_TITLE)).toBeDefined()
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  test('renders card hiding year if not present', () => {
    const newProps = {
      ...testCardProps,
      year: undefined
    }
    const { container } = render(<Card {...newProps}></Card>)
    expect(container.querySelector('h4.year')).toBeNull()
  })

  test('should have correct image src', () => {
    render(<Card {...testCardProps}></Card>)
    const imageElement = screen.getByRole('img') as HTMLImageElement
  
    expect(imageElement).toBeDefined()
    expect(imageElement.src).toContain(TEST_IMG_URL)
  })

  test('should have correct wiki link with icon', () => {
    const { container } = render(<Card {...testCardProps}></Card>)
    const wikiHeader = container.querySelector('.wiki-link') as HTMLHeadingElement

    expect(wikiHeader).toBeDefined()
    expect(wikiHeader).toHaveTextContent('Wiki')

    const wikiLink = wikiHeader.querySelector('a') as HTMLAnchorElement
    expect(wikiLink).toBeDefined()
    expect(wikiLink.href).toBe(TEST_WIKI_URL)
  })

  test('should show and hide modal', () => {
    render(<Card {...testCardProps}></Card>)

    expect(screen.queryByRole('dialog')).toBeNull()
    fireEvent.click(screen.getByText('Info'))

    expect(screen.getByRole('dialog')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText(TEST_TEXT)).toBeDefined()
  })
})
