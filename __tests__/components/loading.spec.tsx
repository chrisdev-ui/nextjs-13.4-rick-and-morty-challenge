import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Loading from '../../src/components/loading'

describe('Loading', () => {
  it('Should render loader container', () => {
    const { container } = render(<Loading />)
    expect(container.firstChild).toHaveClass('loader_container')
  })

  // Tests that the Loading component renders an Image component with a src prop of the 'loader' asset and an alt prop of 'Loader...'
  it('Should render loader with a image loader component', () => {
    const { getByAltText } = render(<Loading />)
    expect(getByAltText('Loader...')).toBeInTheDocument()
    expect(getByAltText('Loader...')).toHaveAttribute('src')
  })
})
