import loader from '@/assets/loader.gif'
import Image from 'next/image'
import css from './index.module.scss'
export default function Loading() {
  return (
    <div className={css.loader_container}>
      <Image src={loader} alt="Loader..." />
    </div>
  )
}
