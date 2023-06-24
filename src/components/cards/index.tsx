import Card from '@/components/card'
import { CardsProps } from '@/types/types'

export default function Cards({ results }: CardsProps) {
  return results && results.length ? (
    <>
      {results.map((cardInfo) => (
        <Card key={cardInfo.id} {...cardInfo} />
      ))}
    </>
  ) : (
    <>{`No Characters Found :(`}</>
  )
}
