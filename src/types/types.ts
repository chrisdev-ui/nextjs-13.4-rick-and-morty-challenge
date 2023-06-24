export type SearchProps = {
  setSearch: (value: string) => void
  setPageNumber: (value: number) => void
}

export type CardProps = {
  id: string
  name: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  image: string
}

export type CardsProps = {
  results: CardProps[]
}

export type PaginationProps = {
  pageNumber: number
  info: {
    pages: number
  }
  setPageNumber: (value: number) => void
}

export type FilterProps = {
  setPageNumber: (value: number) => void
  setStatus: (value: string) => void
  setGender: (value: string) => void
  setSpecies: (value: string) => void
}

export type FilterButtonProps = {
  input: string
  action: (value: string) => void
  setPageNumber: (value: number) => void
  index: number
  name: string
}

export type StatusProps = Pick<FilterProps, 'setPageNumber' | 'setStatus'>
export type SpeciesProps = Pick<FilterProps, 'setSpecies' | 'setPageNumber'>
export type GenderProps = Pick<FilterProps, 'setGender' | 'setPageNumber'>
