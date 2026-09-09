import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'CI/CD Pipeline Engineering',
      description: 'Automated build, test, and deployment pipelines that ship code safely, multiple times a day.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      )
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, cost-efficient infrastructure on AWS, Azure, or GCP, provisioned as code.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848A5.25 5.25 0 0010.5 3.75 5.25 5.25 0 005.25 7.5H3a3 3 0 00-3 3v4.5z"/>
        </svg>
      )
    },
    {
      title: 'Containerization & Orchestration',
      description: 'Docker and Kubernetes setups that make your services portable, resilient, and easy to scale.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      )
    },
    {
      title: 'Infrastructure as Code',
      description: 'Terraform and CloudFormation templates so environments are versioned, repeatable, and auditable.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>
      )
    },
    {
      title: 'Monitoring & Observability',
      description: 'Real-time dashboards, alerting, and logging so issues get caught before they become outages.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      )
    },
    {
      title: 'Security & Compliance',
      description: 'DevSecOps practices baked into the pipeline — secrets management, vulnerability scanning, access control.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
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
  Automating <span className="text-sky-400">Fast, Reliable, & Secure</span> Delivery Pipelines
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