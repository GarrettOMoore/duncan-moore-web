import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from 'src/components/Nav'
import Header from 'src/components/Header'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
