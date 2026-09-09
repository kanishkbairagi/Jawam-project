import React from 'react';
import OutcomeCard from './OutcomeCard';

export default function BusinessOutcomes() {
  const outcomes = [
    {
      text: 'Automated CI/CD Pipelines',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      )
    },
    {
      text: 'Faster, Safer Deployments',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
        </svg>
      )
    },
    {
      text: 'Scalable Cloud Infrastructure',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848A5.25 5.25 0 0010.5 3.75 5.25 5.25 0 005.25 7.5H3a3 3 0 00-3 3v4.5z"/>
        </svg>
      )
    },
    {
      text: 'Reduced Downtime & Faster Recovery',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      )
    },
    {
      text: 'Consistent, Versioned Environments',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      )
    },
    {
      text: 'Real-Time Monitoring & Alerting',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      )
    },
    {
      text: 'Lower Infrastructure Costs',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.552-.44 1.277-.659 2.003-.659.725 0 1.45.22 2.003.659l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      text: 'Security Built Into the Pipeline',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
        </svg>
      )
    },
    {
      text: 'Team-Wide Deployment Confidence',
      icon: (
        <svg className="outcome-icon" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      )
    },
    {
      text: 'Future-Ready DevOps Architecture',
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