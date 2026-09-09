import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'Frontend Development',
      description: 'Interactive, responsive, and high-performance interfaces built with modern frameworks.',
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>
      )
    },
    {
      title: 'Backend Development',
      description: "Robust API's, micro-services, and scalable backend systems built for performance.",
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
          <line x1="6" x2="6.01" y1="6" y2="6"/>
          <line x1="6" x2="6.01" y1="18" y2="18"/>
        </svg>
      )
    },
    {
      title: 'Database Engineering',
      description: 'Optimized SQL & NoSQL Databases designed for scale reliability & speed.',
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
        </svg>
      )
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud-native infrastructure, CI/CD pipelines, automation and scalable deployments.',
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848A5.25 5.25 0 0010.5 3.75 5.25 5.25 0 005.25 7.5H3a3 3 0 00-3 3v4.5z"/>
        </svg>
      )
    },
    {
      title: 'Third-party Integration',
      description: "Seamless integration with payment gateways, CRMs, analytics & external API's.",
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
        </svg>
      )
    },
    {
      title: 'Security & Compliance',
      description: 'Secure Coding, data protection authentication, and enterprise security standards.',
      icon: (
        <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" className="w-full h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      )
    }
  ];

  return (
    <div class="mt-[-25px] md:mt-[-45px] lg:mt-[-25px]">
    <section className="relative py-8 md:py-12 px-4 bg-[#0F172A] ">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sky-400 text-xs md:text-base font-semibold tracking-[0.25em] md:tracking-[0.25em] uppercase mb-3 md:mb-5">
          Our Expertise
        </p>
<h2 className="text-xl md:text-3xl lg:text-[2.70rem] font-bold mb-6 md:mb-12 !leading-[1.1] max-w-4xl mx-auto px-2">
  Engineering <span className="text-sky-400">Scalable, Secure, &amp; Future-Ready</span> Applications
</h2>

        <div className="expertise-grid">
          {cards.map((card, idx) => (
            <ExpertiseCard
              key={idx}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
