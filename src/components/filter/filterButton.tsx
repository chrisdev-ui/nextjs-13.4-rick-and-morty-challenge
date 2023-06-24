import { FilterButtonProps } from '@/types/types'
import css from './index.module.scss'

export default function FilterButton({
  input,
  action,
  setPageNumber,
  index,
  name
}: FilterButtonProps) {
  const onClickHandler = () => {
    action(input)
    setPageNumber(1)
  }
  return (
    <div className={css.buttons_form}>
      <input
        type="radio"
        name={name}
        className={css.buttons_form_input}
        id={`${name}-${index}`}
      />
      <label
        onClick={onClickHandler}
        htmlFor={`${name}-${index}`}
        className={css.buttons_form_label}
      >
        {input}
      </label>
    </div>
  )
}
