import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import ai from '../../../assets/optimized/ai.mp4';
import mobileAiPoster from '../../../assets/mobile-optimized/mobileai.webp';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';


export default function Hero() {
  return (
    <div className="relative overflow-hidden">
<ResponsiveHeroMedia
  className="
    absolute
    inset-x-0
    top-0
    w-full
    h-[520px]
    sm:h-[430px]
    md:h-[600px]
    lg:h-[600px]
    object-cover
    z-0
  "
  video={ai}
  mobilePoster={mobileAiPoster}
  desktopFallback={mobileAiPoster}
  prioritizeVideo
/>

     <div
  className="
    absolute
    inset-x-0
    top-0
    h-[520px]
    sm:h-[430px]
    md:h-[600px]
    lg:h-[600px]
    bg-[#0F172A]/70
    z-0
    pointer-events-none
  "
/>

      {/* ===== Main Content Container ===== */}
      <div className="relative z-10">
        {/* ===== Hero Section ===== */}
        <section className="pt-20 md:pt-28  lg:pt-30 pb-0 sm:pb-0 px-4 sm:px-6 max-w-[1200px] mx-auto text-center lg:mt-[70px] ">
          <button
            className="inline-flex items-center gap-1.5 md:gap-3 mb-4 md:mb-6 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-6 py-1 md:py-2 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="text-[11px] sm:text-[13px] md:text-[16px] font-semibold text-[#4B5563]">
              AI Solutions & Services
            </span>
          </button>

          {/* Main Heading */}
          <h1 className="font-extrabold text-[28px] md:max-w-[600px] md:mx-auto sm:text-[38px] md:text-[40px] lg:text-[60px] leading-[34px] sm:leading-[44px] md:leading-[46px] lg:leading-[60px] tracking-[-0.5px] md:text-center lg:text-center text-left lg:max-w-5xl lg:mx-auto mb-4 md:mb-6 text-white">
            The Future of Business is Intelligent-{' '}
            <span className="text-sky-400 block sm:inline font-extrabold">
              We help you get there
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[13px] md:text-[15px] lg:text-[18px] leading-[19px] sm:leading-[22px] md:leading-[22px] lg:leading-[28px] tracking-[-0.5px] md:text-center lg:text-center text-left text-slate-200 lg:max-w-5xl lg:mx-auto mb-6 md:mb-8">
            At Jawam Infotech, we build AI powered solutions that automate your work, reduce costs, and help you make smarter business decisions. From chatbots to trading tools we bring AI to your Business.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16">
            <Link
              to="https://calendly.com/shainkigupta?hide_event_type_details=1"
              className="inline-flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_4px_20px_rgba(14,165,233,0.35)] transition-all hover:scale-105"
            >
              <Icon icon="solar:calendar-bold" className="text-[15px] md:text-[18px]" style={{ color: "#FFFFFF" }} />
              <span>Schedule a Call</span>
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-4 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
