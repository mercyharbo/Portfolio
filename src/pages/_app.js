import { motion, AnimatePresence } from 'framer-motion'

import Navbar from '@/components/navbar'
import '@/styles/globals.css'

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
}

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        variants={pageVariants}
        transition={{ duration: 0.3 }}
        className='flex flex-col items-center'
      >
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
