import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HiOutlineHome } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className='w-full bg-dark/80 backdrop-blur-md py-4 px-8 flex items-center justify-between  sticky top-0 z-50 transition-all duration-300'>
      <div className='flex items-center gap-3'>
        {/* Logo Icon Container */}
        <div className='relative flex items-center justify-center size-9 rounded-full border border-primary'>
          <HiOutlineHome className='text-white size-[18px]' />
        </div>

        {/* Title */}
        <h1 className='text-white text-sm font-medium tracking-tight hover:text-primary transition-colors duration-300 cursor-pointer'>
          Afolabi Ridwan Damilare
        </h1>
      </div>

      {/* Resume Button */}
      <Link href='/Afolabi Ridwan Damilare.pdf' target='_blank'>
        <Button className='rounded-full px-6 h-10 text-sm font-medium transition-all duration-300'>
          View Resume
        </Button>
      </Link>
    </header>
  )
}

export default Header
