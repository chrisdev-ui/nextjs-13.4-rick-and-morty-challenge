import { CardProps } from '@/types/types'
import Image from 'next/image'
import css from './index.module.scss'

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image
}: CardProps) {
  return (
    <div className={css.card_wrapper} data-testid="character-info-card">
      <div className={css.card}>
        <div className={css.card_number}># {id}</div>
        <div className={css.card_image_container}>
          <Image
            src={image}
            alt={name}
            width={220}
            height={220}
            className={css.card_image}
          />
        </div>
        <div className={css.card_body}>
          <div>
            <div className={css.card_body_name}>{name}</div>
            <div className={css.card_body_genderspecies}>
              <span>{gender}</span>
              <span> - </span>
              <span>{species}</span>
            </div>
            <div className={css.card_body_location}>
              <span>Last known location:</span>
              <div>{location?.name}</div>
            </div>
            <div className={css.card_body_origin}>
              <span>Origin:</span>
              <div>{origin?.name}</div>
            </div>
          </div>
        </div>
      </div>
      {status && status === 'Dead' && (
        <div className={css.dead} data-testid="status-indicator">
          <div className={css.dead_circles}>
            <div className={css.dead_circle1} />
            <div className={css.dead_circle2} />
            <div className={css.dead_status}>{status}</div>
          </div>
        </div>
      )}
      {status && status === 'Alive' && (
        <div className={css.alive} data-testid="status-indicator">
          <div className={css.alive_circles}>
            <div className={css.alive_circle1} />
            <div className={css.alive_circle2} />
            <div className={css.alive_status}>{status}</div>
          </div>
        </div>
      )}
      {status && status !== 'Dead' && status !== 'Alive' && (
        <div className={css.unknown} data-testid="status-indicator">
          <div className={css.unknown_circles}>
            <div className={css.unknown_circle1} />
            <div className={css.unknown_circle2} />
            <div className={css.unknown_status}>{status}</div>
          </div>
        </div>
      )}
    </div>
  )
}
