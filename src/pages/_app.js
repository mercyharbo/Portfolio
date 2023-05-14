import Navbar from '@/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className='flex flex-col items-center'>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
