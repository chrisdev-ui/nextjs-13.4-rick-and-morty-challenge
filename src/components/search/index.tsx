import { SearchProps } from '@/types/types'
import { ChangeEvent, FormEvent } from 'react'
import css from './index.module.scss'

export default function Search({ setSearch, setPageNumber }: SearchProps) {
  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1)
    setSearch(e.target.value)
  }
  const searchBtn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={searchBtn} className={css.search_bar}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search by something..."
        onChange={inputChange}
      />
      <button type="submit" className={css.search_btn}>
        <span />
      </button>
    </form>
  )
}
