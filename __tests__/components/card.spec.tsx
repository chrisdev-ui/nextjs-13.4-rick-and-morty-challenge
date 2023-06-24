import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Card from '../../src/components/card'

describe('Card', () => {
  // Tests that the component renders with all props
  it('Should render card properly with all props', () => {
    const props = {
      id: '1',
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)'
      },
      location: {
        name: 'Earth (Replacement Dimension)'
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    }
    render(<Card {...props} />)
    const cardWrapper = screen.getByTestId('character-info-card')
    const imageElement = screen.getByAltText(props.name)
    expect(cardWrapper).toBeInTheDocument()
    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(`# ${props.id}`)).toBeInTheDocument()
    expect(screen.getByText(props.location.name)).toBeInTheDocument()
    expect(screen.getByText(props.origin.name)).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src')
    expect(screen.getByTestId('status-indicator')).toBeInTheDocument()
  })
})
