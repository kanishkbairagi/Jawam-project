import React from 'react';
import ProcessStep from './ProcessStep';

export default function Process() {
  const steps = [
    {
      index: 1,
      label: 'Discovery',
      isStaticGlow: true,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      )
    },
    {
      index: 2,
      label: 'UI/UX Design',
      isStaticGlow: false,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
        </svg>
      )
    },
    {
      index: 3,
      label: 'Development',
      isStaticGlow: false,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
    {
      index: 4,
      label: 'Testing',
      isStaticGlow: false,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12" />
        </svg>
      )
    },
    {
      index: 5,
      label: 'Deployment',
      isStaticGlow: false,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
        </svg>
      )
    },
    {
      index: 6,
      label: 'Maintenance',
      isStaticGlow: false,
      icon: (
        <svg className="w-7 h-7 text-sky-500" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    }
  ];

  return (
    <div class="mt-[-80px] md:mt-[-100px] lg:mt-[-80px] mb-14 md:mb-0 lg:mb-0 max-w-full md:max-w-[700px] md:mx-auto lg:max-w-full">
    <section 
      className="relative pt-0 md:pt-10 lg:pt-10 px-4 mt-[-25px] md:mt-0 lg:my-0" 
      
    >
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Outer card: dark navy background with blue radial glow and rounded border */}
        <div 
          className="relative px-8 py-12 md:px-16 text-center"
          style={{
            background: 'radial-gradient(ellipse 90% 130% at 50% 45%, rgba(0,180,216,0.22) 0%, rgba(10,50,100,0.65) 40%, #050e1c 100%)',
            borderTop: '1px solid rgba(0,180,216,0.30)',
            borderLeft: '1px solid rgba(0,180,216,0.18)',
            borderRight: '1px solid rgba(0,180,216,0.18)',
            borderBottom: '1px solid transparent',
            borderRadius: '32px',
            borderBottomRightRadius: '48px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            paddingBottom: '56px',
            overflow: 'hidden'
          }}
        >
          {/* Glowing Blobs */}
          <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[80px]"></div>
          <div className="pointer-events-none absolute -left-10 bottom-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-[60px]"></div>

          {/* HOW IT WORKS? label */}
          <p className="relative z-10 text-sky-400 text-sm font-bold tracking-[0.22em] uppercase mb-8">
            HOW IT WORKS?
          </p>

          {/* Heading */}
          <h2 className="relative z-10 text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold mb-6 leading-tight">
           Our DevOps Delivery <span className="text-sky-400">Process</span>
          </h2>

          {/* Steps row */}
          <div className="process-steps-grid relative z-10">
            {steps.map((step) => (
              <ProcessStep
                key={step.index}
                index={step.index}
                label={step.label}
                isStaticGlow={step.isStaticGlow}
                icon={step.icon}
              />
            ))}
          </div>

          {/* Extra wide bottom glow that bleeds beyond the card */}
          <div 
            className="pointer-events-none absolute -bottom-10 left-1/2" 
            style={{
              transform: 'translateX(-50%)',
              width: '110%',
              height: '80px',
              background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.12) 0%, transparent 70%)',
              filter: 'blur(20px)',
              zIndex: 25
            }}
          ></div>
        </div>
      </div>
    </section>
    </div>
  );
}