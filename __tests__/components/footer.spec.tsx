import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Footer from '../../src/components/footer'

describe('Footer', () => {
  // Tests that the footer container is rendered with the correct class name
  it('Should render footer container with correct class name', () => {
    const { getByTestId } = render(<Footer />)
    const footerContainer = getByTestId('footer')
    expect(footerContainer).toHaveClass('footer_container')
  })

  // Tests that the developer's name is rendered with a link to their GitHub profile
  it('Should render developer name with link to GitHub profile', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Christian Torres/i)
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/chrisdev-ui/nextjs-13.4-rick-and-morty-challenge'
    )
  })
})
