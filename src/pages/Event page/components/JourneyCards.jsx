import React, { useEffect, useRef, useState } from 'react';
import businessMeetings from '../../../assets/Business Meetings.webp';
import internationalDelegates from '../../../assets/International Delegates.webp';
import innovationShowcase from '../../../assets/Innovation Showcase.webp';
import teamJawam from '../../../assets/Team Jawam.webp';
import networkingSessions from '../../../assets/Networking Sessions.webp';

const journeyItems = [
  {
    image: businessMeetings,
    alt: 'Business Meetings',
    title: 'Business Meetings',
    description: 'Meaningful discussions with industry leaders',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v3a2 2 0 001.106 1.789L4 12.798V19a2 2 0 002 2h12a2 2 0 002-2v-6.202l.894-.009A2 2 0 0021 11V8a1 1 0 00-1-1zM9 5h6v2H9V5z" />
    ),
  },
  {
    image: internationalDelegates,
    alt: 'International Delegates',
    title: 'International Delegates',
    description: 'Building relationships with experts from across globe',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
  },
  {
    image: innovationShowcase,
    alt: 'Innovation Showcase',
    title: 'Innovation Showcase',
    description: 'Preparing our expertise and exploring new possibilities',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    image: teamJawam,
    alt: 'Team Jawam',
    title: 'Team Jawam',
    description: 'Celebrating teamwork, dedication, and growth',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
  {
    image: networkingSessions,
    alt: 'Networking Sessions',
    title: 'Networking Sessions',
    description: 'Creating connections that lead to opportunities',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
];

const JourneyCard = ({ item }) => (
  <div className="bg-[linear-gradient(277.37deg,_rgba(230,246,251,0.2)_1.45%,_rgba(177,226,244,0.2)_99.6%)] rounded-2xl border border-[#BDBDBDB0] hover:border-sky-500/40 transition-all group p-3">
    <div className="relative">
      <div className="h-32 sm:h-36 md:h-40 rounded-xl overflow-hidden">
        <img src={item.image} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="absolute -bottom-4 left-3 w-9 h-9 sm:w-11 sm:h-11 bg-sky-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-[#0a1525]">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {item.icon}
        </svg>
      </div>
    </div>
    <div className="pt-6 sm:pt-8 pb-2 px-1">
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-white text-xs sm:text-sm leading-relaxed">{item.description}</p>
    </div>
  </div>
);

const MobileJourneySlider = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isUserInteracting = useRef(false);
  const resumeTimeoutRef = useRef(null);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index];
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  };

  // Auto-advance every 3s, paused while the user is actively touching/dragging
  useEffect(() => {
    const interval = setInterval(() => {
      if (isUserInteracting.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % journeyItems.length;
        scrollToIndex(next);
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Keep activeIndex in sync when the user manually swipes
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = track.children[0]?.offsetWidth || 1;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  const handleTouchStart = () => {
    isUserInteracting.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    // Give auto-slide a short pause after manual interaction before resuming
    resumeTimeoutRef.current = setTimeout(() => {
      isUserInteracting.current = false;
    }, 1500);
  };

  return (
    <div className="sm:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]"
      >
        {journeyItems.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 snap-center px-1">
            <JourneyCard item={item} />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {journeyItems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              scrollToIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-5 bg-sky-400' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const JourneyCards = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 mb-0 ms:mb-[30px] lg:mb-0  max-w-[1000px] mx-auto mt-[-40px] md:mt-[-120px]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 md:mb-12">
          <p className="text-center mb-4 md:mb-6 font-semibold text-sm md:text-base lg:text-[16px] leading-[18px] tracking-[0px] text-center text-[#04A3DA]">WHY CHOOSE JAWAM FOR AI?</p>
          <h2 className="font-bold mt-0 md:mt-[-15px] lg:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight md:leading-[1.2] lg:leading-[48px] tracking-[-0.5px] text-center text-white text-center">
            Moment To define our <span className="text-sky-400">Journey</span>
          </h2>
        </div>

        {/* MOBILE: auto-sliding, swipeable carousel */}
        <div className="mt-[-25px]">
          <MobileJourneySlider />
        </div>

        {/* TABLET/DESKTOP: original wrapped grid, unchanged */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-[-25px]">
          {journeyItems.map((item, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]">
              <JourneyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyCards;
