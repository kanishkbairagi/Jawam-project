import React from 'react';
import OutcomeCard from './OutcomeCard';

export default function BusinessOutcomes() {
  const outcomes = [
    {
      text: 'Native-Quality Mobile Experience',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="7" y="2" width="10" height="20" rx="2" ry="2"/>
          <line x1="11" y1="18" x2="13" y2="18"/>
        </svg>
      )
    },
    {
      text: 'Cross-Platform Cost & Time Savings',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M21 12V6.75H15.75"/>
        </svg>
      )
    },
    {
      text: 'Faster Development Cycles',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        </svg>
      )
    },
    {
      text: 'Smooth Offline & Real-Time Performance',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      )
    },
    {
      text: 'Secure & Reliable Mobile Platform',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
        </svg>
      )
    },
    {
      text: 'Seamless App Store Deployment',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
      )
    },
    {
      text: 'Optimized User Experience',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
        </svg>
      )
    },
    {
      text: 'Scalable Backend Integration',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
          <line x1="6" x2="6.01" y1="6" y2="6"/>
          <line x1="6" x2="6.01" y1="18" y2="18"/>
        </svg>
      )
    },
    {
      text: 'Push Notification & Engagement Ready',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
      )
    },
    {
      text: 'Future-Ready Mobile Architecture',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-[-45px] md:mt-0 lg:mt-0">
      <section className="outcome-section pt-12 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center relative" style={{ zIndex: 50 }}>
          <p
            style={{
              color: '#00e5ff',
              fontSize: '0.85rem',
              fontWeight: 900,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem',
              textShadow: '0 0 20px rgba(0,229,255,0.9), 0 0 40px rgba(0,229,255,0.4)',
              position: 'relative',
              zIndex: 60
            }}
          >
            BUSINESS OUTCOMES
          </p>

          <div className="outcome-grid mb-12 mt-[20px] md:mt-0 lg:mt-0">
            {outcomes.map((outcome, idx) => (
              <OutcomeCard key={idx} text={outcome.text} icon={outcome.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}