import React from 'react';
import Hero from './components/Hero';
import ProblemRoadblocks from './components/ProblemRoadblocks';
import BeforeAfter from './components/BeforeAfter';
import Capabilities from './components/Capabilities';
import SolutionArchitecture from './components/SolutionArchitecture';
import CallToAction from './components/CallToAction';
import './style.css';

export default function ThirdPartyIntegration() {
  return (
    <main id="service-page" className="min-h-screen text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Problem We Solve / Roadblocks */}
      <ProblemRoadblocks />

      {/* 3. From Challenges to Confidence (Before / After Comparison & Quote) */}
      <BeforeAfter />

      {/* 4. Capabilities (What We Can Build) */}
      <Capabilities />

      {/* 5. Solution Architecture / FAQs */}
      <SolutionArchitecture />

      {/* 6. Call To Action Banner */}
      <CallToAction />
    </main>
  );
}
