'use client'

import logo from '@/assets/logo.png'
import Cards from '@/components/cards'
import Filter from '@/components/filter'
import Footer from '@/components/footer'
import Loading from '@/components/loading'
import Search from '@/components/search'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import css from './characters.module.scss'

const Pagination = dynamic(() => import('@/components/pagination'), {
  ssr: false
})

export default function Characters() {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [status, setStatus] = useState<string>('')
  const [gender, setGender] = useState<string>('')
  const [species, setSpecies] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState({
    info: { pages: 0, count: 0 },
    results: []
  })
  const [search, setSearch] = useState<string>('')
  const { info, results } = data

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(api)
        const data = await response.json()
        setData(data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [api])

  return (
    <main className={css.main}>
      <div className={`container ${css.main_container}`}>
        <div className={css.header} data-testid="header-logo">
          <Link href="/">
            <Image src={logo} alt="" width={400} height={400} priority />
          </Link>
        </div>
        <div className={css.content_wrapper}>
          <div className={css.search_wrapper}>
            <Search setSearch={setSearch} setPageNumber={setPageNumber} />
            <div className={css.info}>
              {info && info.count ? <>{info.count}</> : '0'} Characters
            </div>
          </div>
          <div className={css.characters_wrapper}>
            <Filter
              setPageNumber={setPageNumber}
              setStatus={setStatus}
              setSpecies={setSpecies}
              setGender={setGender}
            />
            <div className={css.characters_container}>
              <div className={css.characters_container_cards}>
                {loading ? <Loading /> : <Cards results={results} />}
              </div>
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
