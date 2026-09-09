import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Models that anticipate demand, churn, or risk before it happens.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M21 12V6.75H15.75"/>
        </svg>
      )
    },
    {
      title: 'Natural Language Processing',
      description: 'Chatbots, sentiment analysis, document processing, and text classification.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
        </svg>
      )
    },
    {
      title: 'Computer Vision',
      description: 'Image recognition, object detection, and quality inspection systems.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized product, content, or service recommendations at scale.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
        </svg>
      )
    },
    {
      title: 'MLOps & Model Deployment',
      description: 'Production pipelines for training, versioning, and monitoring models.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848A5.25 5.25 0 0010.5 3.75 5.25 5.25 0 005.25 7.5H3a3 3 0 00-3 3v4.5z"/>
        </svg>
      )
    },
    {
      title: 'Generative AI Integration',
      description: 'Custom LLM-powered features like copilots, summarization, and content generation.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
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
  Engineering <span className="text-sky-400">Scalable, Secure, &amp; Future-Ready</span> AI Systems
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