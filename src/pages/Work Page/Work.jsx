import React from 'react';
import './work.css';
import HeroSection from './components/HeroSection';
import CollaborationSection from './components/CollaborationSection';
import WhoWeWorkWithSection from './components/WhoWeWorkWithSection';
import Tools from './components/Tools';
import DreamTeamSection from './components/DreamTeamSection';

export default function Work() {
  return (
    <main id="kam" className="mb-[50px] lg:mt-0">
      <HeroSection />
      <CollaborationSection />
      <WhoWeWorkWithSection />
      <Tools />
      <DreamTeamSection />
    </main>
  );
}
