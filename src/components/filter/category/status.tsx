import { AVAILABLE_STATUS } from '@/constants/contants'
import { StatusProps } from '@/types/types'
import FilterButton from '../filterButton'
import css from './status.module.scss'

export default function Status({ setStatus, setPageNumber }: StatusProps) {
  return (
    <div className={css.status}>
      <div className={css.status_title}>Status</div>
      <div className={css.status_filters}>
        {AVAILABLE_STATUS.map((status, index) => (
          <FilterButton
            key={index}
            index={index}
            name="status"
            action={setStatus}
            setPageNumber={setPageNumber}
            input={status}
          />
        ))}
      </div>
    </div>
  )
}
