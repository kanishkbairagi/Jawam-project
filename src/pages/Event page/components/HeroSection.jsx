import React from 'react';
import { Link } from 'react-router-dom';
import events from '../../../assets/optimized/events.mp4';
import eventsPoster from '../../../assets/posters/events.jpg';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 lg:pt-30 pb-16 md:pb-24 flex items-center justify-center px-4 md:px-6">
{/* Background Video */}
<ResponsiveHeroMedia
  className="
    absolute
    top-0 left-0 right-0
    w-full
    h-full
    md:h-[600px]
    lg:h-full
    object-cover
    z-0
  "
  video={events}
  poster={eventsPoster}
/>

{/* Overlay */}
<div
  className="
    absolute
    top-0 left-0 right-0
    h-full
    md:h-[600px]
    lg:h-full
    bg-[#0F172A]/70
    z-0
    pointer-events-none
  "
/>

      <style>{`
        @keyframes eventsFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes eventsFadeScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .events-anim-badge {
          opacity: 0;
          animation: eventsFadeScale 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.05s forwards;
        }
        .events-anim-heading {
          opacity: 0;
          animation: eventsFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
        }
        .events-anim-desc {
          opacity: 0;
          animation: eventsFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s forwards;
        }
        .events-anim-buttons {
          opacity: 0;
          animation: eventsFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards;
        }
        .events-btn-primary {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .events-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(4, 163, 218, 0.4);
        }
        .events-btn-primary svg {
          transition: transform 0.3s ease;
        }
        .events-btn-primary:hover svg {
          transform: translateY(2px);
        }
        .events-btn-secondary {
          transition: transform 0.3s ease, background-color 0.3s ease;
        }
        .events-btn-secondary:hover {
          transform: translateY(-2px);
          background-color: #f1f5f9;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="events-anim-badge flex justify-center mb-6 mt-[-20px]">
          <div className="inline-flex items-center gap-1.5 md:gap-1.5 lg:gap-2 rounded-full bg-white px-3 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-1.2 shadow-[0_4px_15px_rgba(255,255,255,0.05)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="text-xs md:text-sm lg:text-lg font-semibold text-[#4B5563]">
              Events
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="events-anim-heading font-extrabold mb-6 md:mb-4 lg:mb-8 text-2xl sm:text-4xl md:text-[40px] lg:text-6xl leading-tight sm:leading-tight md:leading-[1.2] tracking-[-0.5px] text-left md:text-center lg:text-center mt-[-10px] md:mt-0 lg:mt-0 text-white">
          Three Years of Innovation, Collaboration & <span className="text-[#04A3DA]">Global <br /> Connection</span>
        </h1>

        {/* Description */}
        <p className="events-anim-desc font-normal mb-8 text-sm sm:text-base md:text-base lg:text-[18px] leading-relaxed tracking-[-0.5px] text-left md:text-left lg:text-center mx-auto text-slate-200 max-w-[900px]">
          Over the past three years, Jawam Infotech has proudly participated in IndiaSoft, one of the most prestigious international ICT events. Every year has brought new opportunities to connect with global businesses, explore emerging technologies, and showcase our expertise in delivering innovative digital solutions. Our journey has been filled with meaningful conversations, valuable partnerships, inspiring experiences, and countless moments that continue to shape our vision for the future.
        </p>

        <div className="events-anim-buttons flex flex-row items-center mt-[-10px] md:mt-0 justify-center gap-2 sm:gap-3 w-full max-w-lg mx-auto">
          <a href="#overview"
            className="events-btn-primary flex-none sm:flex-none sm:w-auto max-w-[300px] flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#04A3DA] to-[#3B82F6] text-white text-xs sm:text-base md:text-sm lg:text-base font-semibold rounded-full">
            Explore our Journey
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9l6 6 6-6"/>
            </svg>
          </a>
          <Link to="/contact-us"
            className="events-btn-secondary flex-none sm:flex-none sm:w-auto text-center px-2 py-2 sm:px-6 sm:py-3 bg-white text-[#3F4555] text-xs sm:text-base md:text-sm lg:text-base font-semibold rounded-full">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
