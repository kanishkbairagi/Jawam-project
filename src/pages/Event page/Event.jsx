import React, { useState } from 'react';
import './event.css';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import SecondaryNav from './components/SecondaryNav';
import OverviewSection from './components/OverviewSection';
import JourneyNumbers from './components/JourneyNumbers';
import JourneyCards from './components/JourneyCards';
import TeamReflection from './components/TeamReflection';
import JourneyContinues from './components/JourneyContinues';
import PhotosSection from './components/PhotosSection';
import VideosSection from './components/VideosSection';
import HighlightsSection from './components/HighlightsSection';
import KeyLearningSection from './components/KeyLearningSection';

const Event = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'overview':   return <OverviewSection />;
      case 'photos':     return <PhotosSection />;
      case 'videos':     return <VideosSection />;
      case 'highlights': return <HighlightsSection />;
      case 'key-learning': return <KeyLearningSection />;
      default:           return <OverviewSection />;
    }
  };

  return (
    <main id="evemt">
      <HeroSection />
      <TimelineSection />
      <SecondaryNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Only this section swaps based on the active tab */}
      {renderActiveSection()}

      {/* These sections are always visible */}
      <JourneyNumbers />
      <JourneyCards />
      <TeamReflection />
      <JourneyContinues />
    </main>
  );
};

export default Event;
