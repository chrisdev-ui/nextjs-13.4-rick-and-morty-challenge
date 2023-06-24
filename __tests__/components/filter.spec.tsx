import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Filter from '../../src/components/filter'

Object.defineProperty(window, 'location', {
  writable: true,
  value: { reload: jest.fn() }
})

jest.spyOn(window.location, 'reload').mockImplementation(() => {})

describe('Filter', () => {
  // Tests that clicking 'Clear Filters' button resets all filters and reloads the page
  it('Should validate if when user clicks clear filters button reset all filters and reloads the page', () => {
    render(
      <Filter
        setPageNumber={jest.fn()}
        setStatus={jest.fn()}
        setSpecies={jest.fn()}
        setGender={jest.fn()}
      />
    )
    expect(screen.getByTestId('clear-filters')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('clear-filters'))
    expect(window.location.reload).toHaveBeenCalledTimes(1)
  })
})
