import React from 'react';
import Hero from './components/Hero';
import ProblemRoadblocks from './components/ProblemRoadblocks';
import BeforeAfter from './components/BeforeAfter';
import SolutionArchitecture from './components/SolutionArchitecture';
import Capabilities from './components/Capabilities';
import CallToAction from './components/CallToAction';
import './software.css';

export default function SoftwareDevelopment() {
  return (
    <main id="saftware" className="min-h-screen  text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Problem We Solve / Roadblocks */}
      <ProblemRoadblocks />

      {/* 3. From Challenges to Confidence (Before / After Comparison & Quote) */}
      <BeforeAfter />

      {/* 4. Solution Architecture (How Your Software Comes Together) */}
        <Capabilities />

      {/* 5. Capabilities (What We Can Build) */}
      <SolutionArchitecture />

      {/* Sections crossed out in Figma (Built for Business, FAQ) are excluded */}

      {/* 6. Call To Action Banner */}
        <CallToAction /> 
    </main>
  );
}
