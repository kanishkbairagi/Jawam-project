import React from 'react'
import CTAFeaturesSection from './components/CTAFeaturesSection'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Industries from './components/Industries'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Lines from './components/Lines'
import './aisolutions.css'

export default function AiSolutions() {
  return (
    <main id="solum" className="relative min-h-screen bg-[#0F172A] lg:mb-[30px] md:mb-[-80px] text-white">
      <Lines />
      <div className="relative z-10 space-y-4">
        <Hero />
        <CTAFeaturesSection />
        <Solution />
        <Industries />
        <WhyChoose />
        <HowItWorks />
        <CTA />
      </div>
    </main>
  )
}
