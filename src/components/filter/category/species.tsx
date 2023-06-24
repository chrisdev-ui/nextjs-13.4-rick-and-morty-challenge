import { AVAILABLE_SPECIES } from '@/constants/contants'
import { SpeciesProps } from '@/types/types'
import FilterButton from '../filterButton'
import css from './species.module.scss'

export default function Species({ setSpecies, setPageNumber }: SpeciesProps) {
  return (
    <div className={css.species}>
      <div className={css.species_title}>Species</div>
      <div className={css.species_filters}>
        {AVAILABLE_SPECIES.map((specie, index) => (
          <FilterButton
            name="species"
            index={index}
            key={index}
            setPageNumber={setPageNumber}
            action={setSpecies}
            input={specie}
          />
        ))}
      </div>
    </div>
  )
}
