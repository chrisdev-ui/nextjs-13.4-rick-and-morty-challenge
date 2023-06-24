import { FilterProps } from '@/types/types'
import Gender from './category/gender'
import Species from './category/species'
import Status from './category/status'
import css from './index.module.scss'

export default function Filter({
  setPageNumber,
  setStatus,
  setSpecies,
  setGender
}: FilterProps) {
  const clearFilters = () => {
    setStatus('')
    setGender('')
    setPageNumber(1)
    setSpecies('')
    window.location.reload()
  }

  return (
    <div className={css.filters_wrapper}>
      <div className={css.filters_title}>
        <span>Filters</span>
        <button data-testid="clear-filters" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
      <Gender setPageNumber={setPageNumber} setGender={setGender} />
      <Status setPageNumber={setPageNumber} setStatus={setStatus} />
      <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
    </div>
  )
}
