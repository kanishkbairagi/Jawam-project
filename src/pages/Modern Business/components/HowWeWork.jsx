import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover the Opportunity',
    description: 'We start by understanding your vision, audience, challenges, and growth objectives before defining what needs to be built.',
  },
  {
    number: '02',
    title: 'Shape the Right Solution',
    description: 'Ideas become a practical strategy. We map user journeys, technology, features, and priorities into a solution designed for long-term value.',
  },
  {
    number: '03',
    title: 'Build With Precision',
    description: 'Our team transforms the plan into a functional digital product through focused development, collaboration, and continuous refinement.',
  },
  {
    number: '04',
    title: 'Validate Every Detail',
    description: 'We challenge the product before your users do. From functionality and responsiveness to security and performance, we test it from every angle.',
  },
  {
    number: '05',
    title: 'Launch With Confidence',
    description: 'Once everything is ready, we take your product live with a carefully managed deployment process and a foundation prepared for future growth.',
  },
  {
    number: '06',
    title: 'Grow Beyond Launch',
    description: 'Launching is only the beginning. We monitor, maintain, optimize, and evolve your solution as your business and customers move forward.',
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-4 mb-8 md:mb-8 lg:mb-0 md:py-6 lg:py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <style>{`

      `}</style>
      <div className="max-w-[1150px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
     
          <h2 className="font-bold text-[24px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-tight text-white tracking-[-0.5px]">
            How We Turn Ideas Into <span className="text-[#04A3DA]">Impact</span>
          </h2>
          <p className="mt-3 text-[#E7E8EA] text-[14px] sm:text-[16px] md:text-[17px] max-w-[620px] mx-auto leading-relaxed">
            From your first idea to a solution that performs in the real world, we make every step purposeful, measurable, and built around your business.
          </p>
        </div>

        {/* 6 Process Cards Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 mt-[-20px] md:mt-[-40px] lg:mt-[-35px] md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4  lg:gap-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="card-float-hover group relative overflow-hidden rounded-[10px]  border border-white/20 p-5 md:p-7 lg:p-5 flex flex-col justify-between transition-all duration-300 ease-out hover:bg-[#15233E]/80 hover:border-[#04A3DA]/60 hover:shadow-[0_12px_30px_-8px_rgba(4,163,218,0.22)] backdrop-blur-sm"
            >
              {/* Subtle top hover highlight accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#04A3DA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Step Number */}
                <div className="text-[25px] md:text-[28px] lg:text-[32px] font-bold text-[#04A3DA] tracking-tight mb-2 ms:mb-4 lg:mb-4">
                  {item.number}
                </div>

                {/* Step Title */}
                <h3 className="text-white text-[16px] md:text-[20px] lg:text-[20px] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#B4BAC5] group-hover:text-[#E7E8EA] text-[14px] sm:text-[15px] leading-[22px] sm:leading-[24px] transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}