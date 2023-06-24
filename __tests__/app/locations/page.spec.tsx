import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Locations from '../../../src/app/locations/page'

describe('Locations Page', () => {
  it('Should render location page correctly', () => {
    render(<Locations />)
    expect(screen.getByText('Locations are coming soon!')).toBeInTheDocument()
  })
})
