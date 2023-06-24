import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Cards from '../../src/components/cards'

describe('Cards', () => {
  // Tests that Cards component renders with valid props
  it('Should render cards with valid props', () => {
    const results = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
          name: 'Earth'
        },
        location: {
          name: 'Earth'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      }
    ]
    render(<Cards results={results} />)
    const card = screen.getByTestId('character-info-card')
    expect(card).toBeInTheDocument()
  })

  // Tests that Cards component renders with empty results array
  it('Should render cards with empty results array', () => {
    const results = []
    render(<Cards results={results} />)
    const noCharactersFound = screen.getByText(/No Characters Found/i)
    expect(noCharactersFound).toBeInTheDocument()
  })

  // Tests that Cards component renders with undefined results prop
  it('Should render cards with undefined results prop', () => {
    render(<Cards />)
    const noCharactersFound = screen.getByText(/No Characters Found/i)
    expect(noCharactersFound).toBeInTheDocument()
  })

  // Tests that Cards component renders with results array containing one item
  it('Should render a single card with results array containing one item', () => {
    const results = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        origin: {
          name: 'Earth'
        },
        location: {
          name: 'Earth'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      }
    ]
    render(<Cards results={results} />)
    const card = screen.getByTestId('character-info-card')
    expect(card).toBeInTheDocument()
  })
})
