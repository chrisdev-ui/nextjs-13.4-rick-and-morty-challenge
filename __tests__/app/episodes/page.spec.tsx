import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Episodes from '../../../src/app/episodes/page'

describe('Episodes Page', () => {
  it('Should render episodes page correctly', () => {
    render(<Episodes />)
    expect(screen.getByText('Episodes are coming soon!')).toBeInTheDocument()
  })
})
