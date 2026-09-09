import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Goals from './components/Goals'
import Leadership from './components/Leadership'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import './about.css'

export default function About() {
  return (
    <main id="about" className=" min-h-screen lg:mb-[-50px] ">
      <Hero />
      <OurStory />
      <Goals />
      <Leadership />
      <FAQ />
      <CTA />
    </main>
  )
}
