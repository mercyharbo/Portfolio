import Hero from '@/components/Hero'
import About from '@/components/About'
// import Blog from '@/components/Blog'
// import Project from '@/components/Project'
import ContactForm from '@/components/ContactForm'



export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center gap-5 mx-auto overflow-hidden xl:w-[90%] md:w-full sm:w-full '>
      <Hero />
      <About />
      {/* <Project  /> */}
      {/* <Blog /> */}
      <ContactForm />
    </main>
  )
}
