import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Pagination from '../../src/components/pagination'

describe('Pagination', () => {
  // Tests that the pagination component is rendered with default props
  it('Should render pagination component with default props', () => {
    const { getByTestId } = render(
      <Pagination pageNumber={1} info={{ pages: 1 }} setPageNumber={() => {}} />
    )
    const pagination = getByTestId('searching-pagination')
    expect(pagination).toBeInTheDocument()
  })

  // Tests that the pagination component is rendered with custom props
  it('Should render pagination component with custom props', () => {
    const { getByTestId } = render(
      <Pagination pageNumber={2} info={{ pages: 5 }} setPageNumber={() => {}} />
    )
    const pagination = getByTestId('searching-pagination')
    expect(pagination).toBeInTheDocument()
  })

  // Tests that the next button is clickable and updates the page number
  it('Should render next button and if its clicked updates the current page', () => {
    const setPageNumber = jest.fn()
    const { getByText } = render(
      <Pagination
        pageNumber={1}
        info={{ pages: 5 }}
        setPageNumber={setPageNumber}
      />
    )
    fireEvent.click(getByText('Next'))
    expect(setPageNumber).toHaveBeenCalledWith(2)
  })

  // Tests that the previous button is clickable and updates the page number
  it('Should render previous button and if its clicked updates the current page', () => {
    const setPageNumber = jest.fn()
    const { getByText } = render(
      <Pagination
        pageNumber={2}
        info={{ pages: 5 }}
        setPageNumber={setPageNumber}
      />
    )
    fireEvent.click(getByText('Prev'))
    expect(setPageNumber).toHaveBeenCalledWith(1)
  })

  // Tests that a page number button is clickable and updates the page number
  it('Should page number button is clickable and update page number correctly', () => {
    const setPageNumber = jest.fn()
    const { getByText } = render(
      <Pagination
        pageNumber={1}
        info={{ pages: 5 }}
        setPageNumber={setPageNumber}
      />
    )
    fireEvent.click(getByText('2'))
    expect(setPageNumber).toHaveBeenCalledWith(2)
  })

  // Tests that the pagination component is rendered with no pages
  it('Should not render pagination component if pages values is 0', () => {
    const { queryByTestId } = render(
      <Pagination pageNumber={1} info={{ pages: 0 }} setPageNumber={() => {}} />
    )
    const pagination = queryByTestId('searching-pagination')
    expect(pagination).not.toBeInTheDocument()
  })
})
