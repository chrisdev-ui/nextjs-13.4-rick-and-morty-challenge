import css from '@/styles/404.module.scss'
import Link from 'next/link'

export const metadata = {
  title: '404 (Not Found)'
}

const NotFound = () => {
  return (
    <div className={css.not_found_wrapper}>
      <div className={css.not_found_header} />
      <div className={css.not_found_container}>
        <div>
          <span className={css.message}>44</span>
        </div>
        <p className={css.paragraph}>
          The page you are trying to search has been <br /> moved to another
          universe.
        </p>
        <Link href="/">
          <button type="button" className={css.back_button}>
            GET ME HOME
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
