import React, { useState } from 'react';
import InquiryForm from './Form';


export default function CollaborationSection() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    
    <div className="mt-0 md:mt-[-50px] lg:mt-[-300px] mx-auto ">
    <section id="collaboration-section" className=" pt-8 mx-auto overflow-visible pb-12 md:py-20 px-4 bg-[#0F172A] mx-auto mt-0 md:mt-[-380px] lg:mt-[-280px] mb-[-50px] md:mb-6 lg:mb-0">

      <div className="max-w-[950px] mx-auto">
        <h2 className="relative  mb-6 md:mb-6 lg:mb-[50px] font-semibold text-[20px] md:text-[22px] lg:text-[32px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[0px] text-center text-[#04A3DA]">Let’s Work Together</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          
          {/* I'm a Client Card */}
          <div className="collab-card collab-card-anim rounded-2xl p-5 md:p-7 gap-1 shadow-lg border border-[#BDBDBDB0] flex flex-col items-center text-center">
            <div className="collab-icon w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center mb-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#04A3DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] md:w-[26.67px] md:h-[22.67px]">
                <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                <path d="M3 12h18"></path>
              </svg>
            </div>
            <h3 className="mb-3 md:mb-4 font-bold text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] tracking-[-0.5px] text-center text-white">I'm a Client</h3>
            <p className="mb-4 md:mb-6 font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] tracking-[-0.5px] text-center text-[#E7E8EA]">Looking to build a product or need development services?</p>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="collab-btn inline-flex items-center gap-2 text-white font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm"
            >
              Start Your Project
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </button>
          </div>

          {/* I'm a Partner Card */}
          <div className="collab-card collab-card-anim mt-0 md:mt-1 gap-1 rounded-2xl p-5 md:p-7 shadow-lg border border-[#BDBDBDB0] flex flex-col items-center text-center">
            <div className="collab-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#04A3DA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </div>
            <h3 className="mb-3 md:mb-4 font-bold text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] tracking-[-0.5px] text-center text-white">I'm a Partner</h3>
            <p className="mb-4 md:mb-6 font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] tracking-[-0.5px] text-center text-[#E7E8EA]">Have complementary services? Let's explore collaboration.</p>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="collab-btn inline-flex items-center gap-2 text-white font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm"
            >
              Explore Partnership
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </button>
          </div>

          {/* I'm a Service Provider Card */}
          <div className="collab-card collab-card-anim rounded-2xl p-5 md:p-7 shadow-lg border border-[#BDBDBDB0] flex flex-col items-center text-center">
            <div className="collab-icon w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[22px] h-[22px] md:w-[26px] md:h-[26px]" viewBox="0 0 24 24" fill="none" stroke="#04A3DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4v16h16"/>
                <path d="M7 15l4-4 3 2 4-5"/>
              </svg>
            </div>
            <h3 className="mb-3 md:mb-4 font-bold text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] tracking-[-0.5px] text-center text-white">I'm a Service Provider</h3>
            <p className="mb-4 md:mb-6 font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[18px] tracking-[-0.5px] text-center text-[#E7E8EA]">Offer tools or services that can support our team?</p>
            <button
              type="button"
              onClick={() => setIsInquiryOpen(true)}
              className="collab-btn inline-flex items-center gap-2 text-white font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm"
            >
              Submit Proposal
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </button>
          </div>
        </div>
      </div>

      <InquiryForm isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </section>
    </div>
    
  );
}
