import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import css from './home.module.scss'

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css['main-container']}>
        <Image
          src={logo}
          alt="Rick And Morty Logo"
          width={400}
          height={400}
          className={css.logo}
        />
        <div className={css.characters}>
          <Link href="/characters">
            <div className={css.characters_image} />
            <div className={css.characters_text}>Characters</div>
          </Link>
        </div>
        <div className={css.episodes}>
          <Link href="/episodes">
            <div className={css.episodes_image} />
            <div className={css.episodes_text}>Episodes</div>
          </Link>
        </div>
        <div className={css.locations}>
          <Link href="/locations">
            <div className={css.locations_image} />
            <div className={css.locations_text}>Locations</div>
          </Link>
        </div>
      </div>
    </main>
  )
}
