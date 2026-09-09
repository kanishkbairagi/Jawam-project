import React from 'react';
import ExpertiseCard from './ExpertiseCard';

export default function Expertise() {
  const cards = [
    {
      title: 'Smart Contract Development',
      description: 'Secure, gas-optimized contracts for automation and agreements.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
        </svg>
      )
    },
    {
      title: 'DApp Development',
      description: 'Full decentralized applications with Web3 wallet integration.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
        </svg>
      )
    },
    {
      title: 'Tokenization Solutions',
      description: 'Custom token creation for utility, governance, or asset representation.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25m0-9v9l-9-5.25m9-9L3 7.5m9 5.25L3 7.5m0 0v9l9 5.25"/>
        </svg>
      )
    },
    {
      title: 'NFT Platform Development',
      description: 'Minting, marketplace, and royalty infrastructure.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.409 5.409m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M6 20.25h12a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H6A1.5 1.5 0 004.5 6v12.75a1.5 1.5 0 001.5 1.5z"/>
          <path d="M14.25 8.625a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
        </svg>
      )
    },
    {
      title: 'Blockchain Integration',
      description: 'Connecting existing systems to blockchain networks for verification or payments.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
        </svg>
      )
    },
    {
      title: 'Security Audits',
      description: 'Smart contract auditing to catch vulnerabilities before deployment.',
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
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
  Engineering <span className="text-sky-400">Scalable, Secure, &amp; Future-Ready</span> Blockchain Systems
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