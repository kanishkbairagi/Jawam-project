import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'Data Pipeline Development',
      description: 'Automated ETL/ELT pipelines that move data reliably from source systems to your warehouse.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      )
    },
    {
      title: 'Data Warehousing',
      description: 'Scalable warehouse design on platforms like Snowflake, BigQuery, or Redshift, built for fast querying.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"/>
        </svg>
      )
    },
    {
      title: 'Data Integration',
      description: 'Connecting APIs, databases, and third-party tools into a single unified data layer.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
        </svg>
      )
    },
    {
      title: 'Data Quality & Governance',
      description: 'Validation rules, monitoring, and lineage tracking so your data stays trustworthy.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
        </svg>
      )
    },
    {
      title: 'Real-Time Data Streaming',
      description: 'Event-driven architectures using Kafka or similar tools for live data processing.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M13 2L4.5 13.5h6L9.5 22 19 10h-6l0-8z"/>
        </svg>
      )
    },
    {
      title: 'Data Migration',
      description: 'Safe, zero-downtime migration from legacy systems to modern cloud data platforms.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="mt-[-25px] md:mt-[-45px] lg:mt-[-25px]">
    <section className="relative py-8 md:py-12 px-4 bg-[#0F172A] ">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sky-400 text-xs md:text-base font-semibold tracking-[0.25em] md:tracking-[0.25em] uppercase mb-3 md:mb-5">
          Our Expertise
        </p>
   <h2 className="text-xl md:text-3xl lg:text-[2.70rem] font-bold mb-6 md:mb-12 !leading-[1.1] max-w-4xl mx-auto px-2">
  Engineering <span className="text-sky-400">Scalable, Secure, &amp; Future-Ready</span> Data Systems
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