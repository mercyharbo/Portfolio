import About from '@/components/About'
import CTA from '@/components/CTA'
import Experience from '@/components/Experience'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import HomeMotion from '@/components/home-motion'
import ProjectSection from '@/components/project-section'
import Services from '@/components/Services'
import Process from '@/components/Process'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMotion>
        <About />
        <ProjectSection />
        <Services />
        <Process />
        <Experience />
        <FAQ />
        <CTA />
      </HomeMotion>
    </>
  )
}
