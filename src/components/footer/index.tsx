import Link from 'next/link'
import css from './index.module.scss'
export default function Footer() {
  return (
    <footer className={css.footer_container} data-testid="footer">
      <div>
        Challenge developed by{' '}
        <Link href="https://github.com/chrisdev-ui/nextjs-13.4-rick-and-morty-challenge">
          Christian Torres 🖥️
        </Link>
      </div>
    </footer>
  )
}
