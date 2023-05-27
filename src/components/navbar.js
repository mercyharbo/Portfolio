import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  RiHome4Fill,
  RiHome4Line,
  RiRssFill,
  RiRssLine,
  RiStarSFill,
  RiUser3Fill,
  RiUser3Line,
} from 'react-icons/ri'
import {
  MdWorkOutline,
  MdMessage,
  MdOutlineMessage,
  MdWork,
} from 'react-icons/md'
import { HiDocumentDownload } from 'react-icons/hi'

export default function Navbar({ navRef }) {
  const router = useRouter()

  return (
    <nav
      ref={navRef}
      className='flex justify-between items-center bg-[#ded9f0] shadow-2xl rounded-lg lg:gap-5 lg:w-[50%] lg:px-10 lg:my-10 lg:h-[55px] md:w-[70%] 
      md:h-[60px] md:px-10 sm:w-full sm:h-[60px] sm:px-5 z-20'
    >
      <Link href='/'>
        {router.pathname === '/' ? (
          <RiHome4Fill size={30} color='#6245d7' />
        ) : (
          <RiHome4Line size={30} color='#6245d7' />
        )}{' '}
      </Link>

      <Link href='/about'>
        {router.pathname === '/about' ? (
          <RiUser3Fill size={30} color='#6245d7' />
        ) : (
          <RiUser3Line size={30} color='#6245d7' />
        )}
      </Link>

      <Link href='/projects'>
        {router.pathname === '/projects' ? (
          <MdWork size={30} color='#6245d7' />
        ) : (
          <MdWorkOutline size={30} color='#6245d7' />
        )}
      </Link>

      <Link href='/blogs'>
        {router.pathname === '/blogs' ? (
          <RiRssFill size={30} color='#6245d7' />
        ) : (
          <RiRssLine size={30} color='#6245d7' />
        )}
      </Link>

      <Link href='/contact'>
        {router.pathname === '/contact' ? (
          <MdMessage size={30} color='#6245d7' />
        ) : (
          <MdOutlineMessage size={30} color='#6245d7' />
        )}{' '}
      </Link>

      <Link
        href={'/ridwan-afolabi-resume.pdf'}
        download={'/ridwan-afolabi-resume.pdf'}
      >
        <HiDocumentDownload size={30} color='#6245d7' />
      </Link>
    </nav>
  )
}
