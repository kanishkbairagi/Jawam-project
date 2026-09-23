import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-[210px] pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">

        <button
          className="hero-animate hero-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-3 md:mb-4 lg:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm"
        >
          <Layers className="w-5 h-5 text-[#3b82f6]" strokeWidth={2.2} />
          <span className="text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]">
            Full Stack Development Services
          </span>
        </button>

        {/* Main Title */}
        <h1 className="text-2xl md:text-5xl mt-4 md:mt-0 lg:mt-4 lg:text-[50px] text-left md:text-center lg:text-center font-extrabold tracking-tight text-white lg:leading-[55px] mb-4 md:mb-6 lg:mb-6 max-w-3xl">
          Turn Product Vision Into{' '}
          <span className="text-[#04A3DA]">
            End-to-End Scalable Systems
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-left md:text-center lg:text-center lg:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
          From polished user interfaces to high-throughput distributed backends, we deliver complete full-stack web and cloud applications.
        </p>

        {/* Dual CTA Buttons */}
        <div className="hero-animate hero-delay-3 mt-[-17px] md:mt-0 lg:mt-[-15px] flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8">
          <Link
            to="/contact-us"
            className="hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap"
          >
            Talk to Our Experts
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
          <Link
            to="/portfolio"
            className="hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap"
          >
            Explore Our Work
          </Link>
        </div>

      </div>
    </section>
  );
}
