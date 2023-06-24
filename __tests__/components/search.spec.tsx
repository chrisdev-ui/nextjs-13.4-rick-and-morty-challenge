import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Search from '../../src/components/search'

describe('Search', () => {
  // Tests that input change updates search value and page number
  it('Should render input and when it changes search value and page number must be updated', () => {
    const setSearch = jest.fn()
    const setPageNumber = jest.fn()
    const { getByPlaceholderText } = render(
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
    )
    const input = getByPlaceholderText('Search by something...')
    fireEvent.change(input, { target: { value: 'test' } })
    expect(setPageNumber).toHaveBeenCalledWith(1)
    expect(setSearch).toHaveBeenCalledWith('test')
  })

  // Tests that empty search value is handled correctly
  it('Should do nothing when search value is set as empty', () => {
    const setSearch = jest.fn()
    const setPageNumber = jest.fn()
    const { getByPlaceholderText } = render(
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
    )
    const input = getByPlaceholderText('Search by something...')
    fireEvent.change(input, { target: { value: '' } })
    expect(setPageNumber).not.toHaveBeenCalledWith(1)
    expect(setSearch).not.toHaveBeenCalledWith('')
  })

  // Tests that search value with only whitespace is handled correctly
  it('test_search_value_with_only_whitespace', () => {
    const setSearch = jest.fn()
    const setPageNumber = jest.fn()
    const { getByPlaceholderText } = render(
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
    )
    const input = getByPlaceholderText('Search by something...')
    fireEvent.change(input, { target: { value: '   ' } })
    expect(setPageNumber).toHaveBeenCalledWith(1)
    expect(setSearch).toHaveBeenCalledWith('   ')
  })
})
