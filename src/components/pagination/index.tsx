import { PaginationProps } from '@/types/types'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import css from './index.module.scss'

export default function Pagination({
  pageNumber,
  info,
  setPageNumber
}: PaginationProps) {
  const updatePage = (data: { selected: number }) => {
    setPageNumber(data.selected + 1)
  }

  const [width, setWidth] = useState(window.innerWidth)
  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    info?.pages && (
      <div className={css.pagination} data-testid="searching-pagination">
        <ReactPaginate
          className={css.paginate}
          nextLabel="Next"
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          previousLabel="Prev"
          previousClassName={css.paginate_previous}
          nextClassName={css.paginate_next}
          activeClassName={css.paginate_active}
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          pageCount={info?.pages || 1}
          onPageChange={updatePage}
          pageLinkClassName={css.paginate_link}
          disabledClassName={css.paginate_disabled}
        />
      </div>
    )
  )
}
