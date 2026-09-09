import React from 'react';

import events5  from '../../../assets/Events-Images/events5.webp';
import events14  from '../../../assets/Events-Images/events14.webp';
import events15  from '../../../assets/Events-Images/events15.webp';
import events8  from '../../../assets/Events-Images/events8.webp';
import events9  from '../../../assets/Events-Images/events9.webp';
import events13 from '../../../assets/Events-Images/events13.webp';
import events11 from '../../../assets/Events-Images/events11.webp';
import events12 from '../../../assets/Events-Images/events12.webp';

// Left Column: 4 images
const leftColumnImages = [
  { image: events5, caption: "Business Meetings" },
  { image: events14, caption: "Networking Sessions" },
  { image: events15, caption: "Innovation Showcase" },
  { image: events8, caption: "Strategic Partnerships" },
];

// Right Column: 4 images
const rightColumnImages = [
  { image: events9, caption: "Global Delegates" },
  { image: events13, caption: "Knowledge Exchange" },
  { image: events11, caption: "Team Moments" },
  { image: events12, caption: "IndiaSoft Legacy" },
];

// Duplicate for seamless infinite loop
const leftInfinite = [...leftColumnImages, ...leftColumnImages];
const rightInfinite = [...rightColumnImages, ...rightColumnImages];

const PhotosSection = () => {
  return (
    <section className="py-2 md:py-4 lg:py-24 px-4 md:px-6 mt-0 md:mt-[-80px] mb-0 md:mb-[80px] lg:mb-0 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-[#0a1525] border rounded-[50px] border-white/10 rounded-[16px] md:rounded-[20px] lg:rounded-[60px] mx-auto overflow-hidden flex flex-col p-6 md:p-6 lg:p-16">
          <div className="flex flex-col md:flex-row md:items-center lg:flex-row lg:items-center flex-1 gap-6 md:gap-6 lg:gap-10  ">
            
{/* LEFT TEXT PANEL */}
<div className="flex flex-col w-full md:w-[45%] lg:w-[45%] min-w-0 justify-between h-full">
  <div>
    {/* Section Label */}
    <p className="font-semibold text-xs md:text-sm lg:text-[16px] tracking-widest text-[#04A3DA] uppercase mb-6">
      PHOTOS GALLERY
    </p>

    {/* Heading */}
    <h3 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight tracking-[-0.5px] text-white mb-6">
      Capturing <br />
      <span className="text-sky-400">Moments</span> That <br />
      Matter
    </h3>

    {/* Description */}
    <p className="font-normal text-sm md:text-sm lg:text-[18px] leading-relaxed text-white/70 mb-6">
      A collection of memorable moments from our IndiaSoft journey such as business
      meetings, networking sessions, innovation showcases, and team
      experiences.
    </p>

    {/* What You'll Find */}
    <div className="mb-8">
      <p className="text-xs lg:text-sm font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">
        What You'll Find
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm text-white/80">
          Business Meetings
        </span>

        <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm text-white/80">
          Networking
        </span>

        <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm text-white/80">
          Innovation
        </span>

        <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs lg:text-sm text-white/80">
          Team Moments
        </span>
      </div>
    </div>

    {/* Gallery Stats */}
    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
      
      <div>
        <p className="text-xl lg:text-2xl font-bold text-sky-400">
          3+
        </p>
        <p className="text-[10px] lg:text-xs text-white/50 mt-1 uppercase tracking-wide">
          Years
        </p>
      </div>

      <div>
        <p className="text-xl lg:text-2xl font-bold text-white">
          Global
        </p>
        <p className="text-[10px] lg:text-xs text-white/50 mt-1 uppercase tracking-wide">
          Connections
        </p>
      </div>

      <div>
        <p className="text-xl lg:text-2xl font-bold text-white">
          Endless
        </p>
        <p className="text-[10px] lg:text-xs text-white/50 mt-1 uppercase tracking-wide">
          Memories
        </p>
      </div>

    </div>
  </div>
</div>

            {/* DUAL INFINITE ALTERNATING VERTICAL MARQUEE */}
            <div className="w-full md:w-[55%] lg:w-[55%] h-[480px] sm:h-[520px] overflow-hidden rounded-[20px] relative  p-3 sm:p-4 ">
              
              {/* Top & Bottom gradient mask for smooth fading edges */}
              <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#0a1525] to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0a1525] to-transparent z-10 pointer-events-none" />

              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                
                {/* COLUMN 1: down, then up, then down... */}
                <div className="overflow-hidden h-full min-w-0">
                  <div className="flex flex-col gap-4 sm:gap-5 w-full marquee-vertical marquee-vertical-left">
                    {leftInfinite.map((item, idx) => (
                      <div
                        key={idx}
                        className="group relative w-full shrink-0 overflow-hidden rounded-[14px] shadow-lg border border-white/10 aspect-square"
                      >
                        <img
                          src={item.image}
                          alt={item.caption}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* COLUMN 2: up, then down, then up... (always opposite of column 1) */}
                <div className="overflow-hidden h-full min-w-0">
                  <div className="flex flex-col gap-4 sm:gap-5 w-full marquee-vertical marquee-vertical-right">
                    {rightInfinite.map((item, idx) => (
                      <div
                        key={idx}
                        className="group relative w-full shrink-0 overflow-hidden rounded-[14px] shadow-lg border border-white/10 aspect-square"
                      >
                        <img
                          src={item.image}
                          alt={item.caption}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes verticalMarqueeScroll {
          from { transform: translateY(-50%); }
          to { transform: translateY(0%); }
        }

        .marquee-vertical {
          animation-duration: 15s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        /* First pass: -50% -> 0% (moves down). Then reverses each pass. */
        .marquee-vertical-left {
          animation-name: verticalMarqueeScroll;
          animation-direction: alternate;
        }

        /* First pass: 0% -> -30% (moves up). Then reverses each pass — always opposite of left. */
        .marquee-vertical-right {
          animation-name: verticalMarqueeScroll;
          animation-direction: alternate-reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-vertical {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PhotosSection;
