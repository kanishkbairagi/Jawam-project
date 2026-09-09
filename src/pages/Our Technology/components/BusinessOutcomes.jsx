import React from 'react';
import OutcomeCard from './OutcomeCard';

export default function BusinessOutcomes() {
  const outcomes = [
    {
      text: 'Scalable Full Stack Application',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M21 12V6.75H15.75"/>
        </svg>
      )
    },
    {
      text: 'Cloud-Ready Infrastructure',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848A5.25 5.25 0 0010.5 3.75 5.25 5.25 0 005.25 7.5H3a3 3 0 00-3 3v4.5z"/>
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
      text: 'Real-Time & High-Performances Systems',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      )
    },
    {
      text: 'Secure & Reliable Platform',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
        </svg>
      )
    },
    {
      text: 'Future-Ready Digital Products',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
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
      text: 'AI-Ready & Data-Driven Platforms',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      text: 'AI-Ready & Data-Driven Platforms',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      )
    },
    {
      text: 'Automation-Driven Workflows',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-[-45px] md:mt-0 lg:mt-[">
    <section className="outcome-section pt-12 pb-20 px-4 ">
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
            <OutcomeCard
              key={idx}
              text={outcome.text}
              icon={outcome.icon}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

