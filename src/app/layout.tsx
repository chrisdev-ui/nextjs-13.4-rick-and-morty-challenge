import '@/styles/globals.scss'
import { Nunito } from 'next/font/google'
import localFont from 'next/font/local'

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'latin-ext'],
  style: ['italic', 'normal'],
  display: 'swap',
  variable: '--font-nunito'
})

const getSchwifty = localFont({
  src: '../../public/fonts/get_schwifty.ttf',
  display: 'swap',
  variable: '--font-ram'
})

export const metadata = {
  title: 'Rick And Morty Challenge',
  description:
    'Nextjs application built with Typescript for Fincaraiz Challenge'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${getSchwifty.variable}`}>
        {children}
      </body>
    </html>
  )
}
