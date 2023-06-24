import { AVAILABLE_GENDERS } from '@/constants/contants'
import { GenderProps } from '@/types/types'
import FilterButton from '../filterButton'
import css from './gender.module.scss'

export default function Gender({ setGender, setPageNumber }: GenderProps) {
  return (
    <div className={css.gender}>
      <div className={css.gender_title}>Gender</div>
      <div className={css.gender_filters}>
        {AVAILABLE_GENDERS.map((gender, index) => (
          <FilterButton
            name="gender"
            index={index}
            key={index}
            setPageNumber={setPageNumber}
            action={setGender}
            input={gender}
          />
        ))}
      </div>
    </div>
  )
}
