import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'Native App Development',
      description: 'iOS (Swift) and Android (Kotlin) apps built for performance and platform-specific best practices.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <rect x="7" y="2" width="10" height="20" rx="2" ry="2"/>
          <line x1="11" y1="18" x2="13" y2="18"/>
        </svg>
      )
    },
    {
      title: 'Cross-Platform Development',
      description: 'React Native and Flutter apps that ship faster without sacrificing native feel.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: 'UI/UX for Mobile',
      description: 'Interfaces designed around mobile-first behavior — thumb zones, load states, offline handling.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
      )
    },
    {
      title: 'API & Backend Integration',
      description: 'Connecting your app to existing systems, third-party services, and real-time data sources.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
        </svg>
      )
    },
    {
      title: 'App Store Deployment',
      description: 'Handling submission, compliance, and store listing optimization for Apple App Store and Google Play.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      )
    },
    {
      title: 'Maintenance & Updates',
      description: 'Ongoing support to keep your app compatible with new OS versions, devices, and security requirements.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-[-25px] md:mt-[-45px] lg:mt-[-25px]">
      <section className="relative py-8 md:py-12 px-4 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sky-400 text-xs md:text-base font-semibold tracking-[0.25em] uppercase mb-3 md:mb-5">
            Our Expertise
          </p>
     <h2 className="text-xl md:text-3xl lg:text-[2.70rem] font-bold mb-6 md:mb-12 !leading-[1.1] max-w-4xl mx-auto px-2">
  Building <span className="text-sky-400">Fast, Reliable, & Native-Feeling</span> Mobile Apps
</h2>

          <div className="expertise-grid">
            {cards.map((card, idx) => (
              <ExpertiseCard key={idx} title={card.title} description={card.description} icon={card.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}