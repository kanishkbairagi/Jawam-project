import React from 'react'
import Hero from './components/Hero'
import OurTechnology from './components/OurTechnology'
import OurServe from './components/OurServe'
import IndustriesSection from './components/IndustriesSection'
import Results from './components/Results'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import './modern.css'

export default function Modern() {
  return (
    <div id="modern" className=" min-h-screen text-white mb-0 md:mb-[-30px] lg:mb-[10px] font-sans  ">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Our Technology Section */}
      <OurTechnology />

      {/* 3. Our Services Section */}
      <OurServe />

      {/* 4. Industries We Serve Section */}
      <IndustriesSection />

      {/* 5. Building Trust Through Results Section */}
      <Results />

      {/* 6. Words of Praise (Testimonials) Section */}
      <Testimonial />

      {/* 7. Call To Action Section */}
      <CTA />
    </div>
  )
}
