import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Full (filled) star icon
const StarIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800] shrink-0"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Empty (unfilled) star icon
const EmptyStarIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-slate-700 fill-slate-700 shrink-0"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Fractional fill star rating icon
const FractionalStarIcon = ({ fillPercent = 70 }) => {
  const clipId = `star-clip-${fillPercent}`;
  const starPath =
    "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20">
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={`${fillPercent}%`} height="100%" />
        </clipPath>
      </defs>
      <path d={starPath} className="fill-slate-700" />
      <path d={starPath} className="fill-[#FFB800]" clipPath={`url(#${clipId})`} />
    </svg>
  );
};

// Renders an honest star row (full + fractional + empty) for any rating out of 5
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const fraction = Math.round((rating - fullStars) * 10) / 10;
  const hasFraction = fraction > 0.04;
  const emptyStars = Math.max(5 - fullStars - (hasFraction ? 1 : 0), 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} />
      ))}
      {hasFraction && <FractionalStarIcon fillPercent={fraction * 100} />}
      {[...Array(emptyStars)].map((_, i) => (
        <EmptyStarIcon key={`empty-${i}`} />
      ))}
    </>
  );
};

// Circular arrow button
const ArrowButton = ({ href = "#", label = "View reviews", className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-[36px] h-[36px] rounded-full bg-[#112A4F] sm:hover:bg-[#183D73] active:bg-[#183D73] text-[#04A3DA] border border-[#1C4576] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer shrink-0 hover:scale-110 active:scale-95 hover:shadow-[0_0_0_4px_rgba(4,163,218,0.15)] ${className}`}
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  </a>
);

// Smooth rating number count-up animation
const RatingCountUp = ({ value, duration = 1400, delay = 0, className = "" }) => {
  const [display, setDisplay] = useState("0.0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    let start = null;

    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        // Smooth cubic ease-out deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * value;
        setDisplay(current.toFixed(1));

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setDisplay(value.toFixed(1));
        }
      };

      frameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isInView, value, duration, delay]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
};

// Direction offsets for staggered entrance
const entranceOffsets = {
  left: { x: -30, y: 0 },
  top: { x: 0, y: -30 },
  right: { x: 30, y: 0 },
  bottomLeft: { x: -30, y: 30 },
  bottomRight: { x: 30, y: 30 },
};

const RatingCard = ({ children, className = "", delay = 0, direction = "top" }) => {
  const offset = entranceOffsets[direction] || { x: 0, y: 30 };

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={{ y: -9 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col justify-between bg-[#081832]/95 border border-[#183B6B] sm:hover:border-sky-600 rounded-[20px] sm:rounded-[26px] p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function Ratings() {
  return (
    <section className="w-full py-10 md:py-0 lg:py-10 mb-0 md:mb-16 lg:mb-14 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-[1150px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-7 sm:mb-10"
        >
          <p className="font-semibold text-[#04A3DA] text-[11px] sm:text-[13px] md:text-[14px] uppercase tracking-wider mb-2">
            OUR REPUTATION
          </p>

          <h1 className="font-bold text-[21px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-tight text-white max-w-[850px] mx-auto">
            Highly rated on{" "}
            <span className="text-[#04A3DA]">global review platforms</span>
          </h1>

          <p className="mt-2.5 text-slate-300 text-[12px] sm:text-[15px] md:text-[16px] max-w-[680px] mx-auto leading-relaxed px-1 sm:px-0">
            We are proud to be recognized by our clients across multiple independent review platforms for our quality,
            reliability, and results.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 items-stretch">

          {/* Left Column: Google Card */}
          <RatingCard className="lg:col-span-4 relative" direction="left" delay={0}>
            <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-20 hidden lg:block">
              <svg className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36" viewBox="0 0 24 24" fill="currentColor">
                <path
                  className="text-[#143258]"
                  d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                />
              </svg>
            </div>

            <div className="flex items-center justify-between gap-2 lg:hidden">
              <motion.div
                initial={{ y: 0, x: 0 }}
                animate={{
                  y: [-3, 3, -3],
                  x: [-1, 1.5, -1],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex items-center gap-0.5 text-lg sm:text-3xl font-bold tracking-tight"
              >
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  y: [3, -3, 3],
                  rotate: [3, -3, 3],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 0, x: 0 }}
              animate={{
                y: [-3, 4, -3],
                x: [-1.5, 2, -1.5],
                rotate: [-0.6, 0.8, -0.6],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex items-center gap-0.5 text-lg sm:text-3xl font-bold tracking-tight hidden lg:block origin-left"
            >
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </motion.div>

            <div className="lg:hidden relative z-10 flex items-center justify-between gap-2 mt-4">
              <div className="shrink-0">
                <div className="flex items-baseline gap-1">
                  <RatingCountUp value={4.7} delay={0} className="font-extrabold text-white text-xl sm:text-2xl" />
                  <span className="text-slate-400 font-medium text-xs">/ 5</span>
                </div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <StarRating rating={4.7} />
                </div>
                <p className="text-slate-400 text-[11px] mt-1 font-medium whitespace-nowrap">500+ Reviews</p>
              </div>

              <p className="text-slate-300 leading-snug flex-1 text-xs max-w-[85px] sm:max-w-[130px]">
                Trusted by businesses across the globe.
              </p>

              <ArrowButton href="https://www.google.com/search?q=jawam+infotech+reviews" label="View Google reviews" />
            </div>

            <div className="hidden lg:block relative z-10 space-y-4 mt-4">
              <div>
                <div className="flex items-baseline gap-1">
                  <RatingCountUp value={4.7} delay={0} className="font-extrabold text-white text-3xl sm:text-4xl" />
                  <span className="text-slate-400 font-medium text-base sm:text-lg">/ 5</span>
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <StarRating rating={4.7} />
                </div>

                <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">500+ Reviews</p>
              </div>

              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm max-w-[220px]">
                Trusted by businesses across the globe.
              </p>
            </div>

            <div className="hidden lg:block relative z-10 pt-4">
              <ArrowButton href="https://www.google.com/search?q=jawam+infotech+reviews" label="View Google reviews" />
            </div>
          </RatingCard>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between">

            {/* Top Row: Clutch & GoodFirms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {/* GoodFirms Card */}
              <RatingCard direction="top" delay={0.1}>
                <div className="flex items-center justify-between gap-2">
                  <motion.div
                    initial={{ y: 0, x: 0 }}
                    animate={{
                      y: [3.5, -3.5, 3.5],
                      x: [-1.5, 2, -1.5],
                      rotate: [0.5, -0.6, 0.5],
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="flex items-center gap-2 min-w-0 origin-left"
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{
                        y: [-1.5, 1.5, -1.5],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 2.9,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L4 5V11C4 16.5 7.5 21.3 12 22.5C16.5 21.3 20 16.5 20 11V5L12 2Z" fill="url(#gf-shield-grad)" stroke="#B45309" strokeWidth="0.8" />
                        <path d="M12 6.5L13.5 10H17.5L14.2 12.2L15.5 16L12 13.5L8.5 16L9.8 12.2L6.5 10H10.5L12 6.5Z" fill="white" />
                        <defs>
                          <linearGradient id="gf-shield-grad" x1="12" y1="2" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F59E0B" />
                            <stop offset="1" stopColor="#D97706" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                    <span className="font-bold tracking-tight text-white text-lg sm:text-xl truncate">GoodFirms</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-2, 2.5, -2] }}
                    transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="text-[#1A406B] flex items-end gap-1 h-6 shrink-0"
                  >
                    <span className="w-1.5 h-2.5 bg-current rounded-sm"></span>
                    <span className="w-1.5 h-4 bg-current rounded-sm"></span>
                    <span className="w-1.5 h-6 bg-current rounded-sm"></span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <div className="shrink-0">
                    <div className="flex items-baseline gap-1">
                      <RatingCountUp value={5.0} delay={100} className="font-bold text-white text-xl sm:text-2xl" />
                      <span className="text-slate-400 font-medium text-xs sm:text-sm">/ 5</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <StarRating rating={5.0} />
                    </div>
                    <p className="text-slate-400 text-xs mt-1 font-medium whitespace-nowrap">90+ Reviews</p>
                  </div>

                  <p className="text-slate-300 leading-snug flex-1 text-xs sm:text-[13px] max-w-[130px]">
                    Recognized for innovation and quality.
                  </p>

                  <ArrowButton href="https://www.goodfirms.co/company/jawam-infotech" label="View GoodFirms reviews" />
                </div>
              </RatingCard>

              {/* Clutch Card */}
              <RatingCard direction="right" delay={0.2}>
                <div className="flex items-center justify-between gap-2">
                  <motion.div
                    initial={{ y: 0, x: 0 }}
                    animate={{
                      y: [-4, 3, -4],
                      x: [2, -1.5, 2],
                      rotate: [-0.8, 1, -0.8],
                    }}
                    transition={{
                      duration: 4.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="flex items-center gap-2 min-w-0 origin-left"
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{
                        y: [1.5, -2, 1.5],
                        rotate: [3, -2, 3],
                      }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <path d="M16 8.5C15 7.5 13.6 7 12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C13.6 17 15 16.5 16 15.5" stroke="#12243F" strokeWidth="3.4" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="2.2" fill="#F26522" />
                      </svg>
                    </motion.div>
                    <span className="font-bold tracking-tight text-white text-lg sm:text-xl truncate">
                      Clut<span className="text-[#F26522]">c</span>h
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [2.5, -2.5, 2.5], rotate: [0, 8, 0] }}
                    transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="text-[#1A406B] shrink-0"
                  >
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="12" cy="12" r="4" fill="currentColor" />
                    </svg>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between gap-3 mt-4">
                  <div className="shrink-0">
                    <div className="flex items-baseline gap-1">
                      <RatingCountUp value={5.0} delay={200} className="font-bold text-white text-xl sm:text-2xl" />
                      <span className="text-slate-400 font-medium text-xs sm:text-sm">/ 5</span>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <StarRating rating={5.0} />
                    </div>
                    <p className="text-slate-400 text-xs mt-1 font-medium whitespace-nowrap">120+ Reviews</p>
                  </div>

                  <p className="text-slate-300 leading-snug flex-1 text-xs sm:text-[13px] max-w-[130px]">
                    Top-rated for delivering results.
                  </p>

                  <ArrowButton href="https://clutch.co/profile/jawam-infotech" label="View Clutch reviews" />
                </div>
              </RatingCard>
            </div>

            {/* Bottom Row: Glassdoor & Trustpilot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">

              {/* Glassdoor Card */}
              <RatingCard direction="bottomLeft" delay={0.3}>
                <div className="flex items-center justify-between gap-1.5">
                  <motion.div
                    initial={{ y: 0, x: 0 }}
                    animate={{
                      y: [3, -3.5, 3],
                      x: [-2, 1.5, -2],
                      rotate: [0.8, -0.6, 0.8],
                    }}
                    transition={{
                      duration: 3.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="flex items-center gap-2 min-w-0 origin-left"
                  >
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{
                        y: [-2, 1.5, -2],
                        rotate: [-2.5, 2, -2.5],
                      }}
                      transition={{
                        duration: 3.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#00A368">
                        <path d="M6 7a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4h1l-1 5h3l2-9V7H6zm11 0a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4h1l-1 5h3l2-9V7h-5z" />
                      </svg>
                    </motion.div>
                    <span className="font-bold tracking-tight text-white text-base truncate">Glassdoor</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-2.5, 2, -2.5], rotate: [-2, 2, -2] }}
                    transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                    className="text-[#1A406B] shrink-0"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 4h-2V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4h.35A6 6 0 0 0 11 16.91V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2.09A6 6 0 0 0 17.65 13H18a4 4 0 0 0 4-4V7a3 3 0 0 0-3-3zM4 9V7a1 1 0 0 1 1-1h2v4.88A4 4 0 0 1 4 9zm16 0a4 4 0 0 1-3 1.88V6h2a1 1 0 0 1 1 1z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between gap-2 mt-4 sm:mt-3">
                  <div className="shrink-0">
                    <div className="flex items-baseline gap-1">
                      <RatingCountUp value={4.9} delay={300} className="font-bold text-white text-lg sm:text-xl" />
                      <span className="text-slate-400 font-medium text-xs">/ 5</span>
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      <StarRating rating={4.9} />
                    </div>
                    <p className="text-slate-400 text-[11px] mt-1 font-medium whitespace-nowrap">80+ Reviews</p>
                  </div>

                  <p className="text-slate-300 leading-snug flex-1 text-xs max-w-[85px]">
                    Top-rated company culture.
                  </p>

                  <ArrowButton href="#" label="View Glassdoor reviews" />
                </div>
              </RatingCard>

              {/* Trustpilot Card */}
              <RatingCard direction="bottomRight" delay={0.4}>
                <div className="flex items-center justify-between gap-1.5">
                  <motion.div
                    initial={{ y: 0, x: 0 }}
                    animate={{
                      y: [-3.5, 3.5, -3.5],
                      x: [1.5, -2, 1.5],
                      rotate: [-0.6, 0.8, -0.6],
                    }}
                    transition={{
                      duration: 4.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8,
                    }}
                    className="flex items-center gap-1.5 min-w-0 origin-left"
                  >
                    <motion.svg
                      initial={{ y: 0 }}
                      animate={{
                        y: [1.5, -1.5, 1.5],
                        rotate: [3, -3, 3],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-5 h-5 text-[#00B67A] fill-current shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17l-5.8 3 1.1-6.5L2.5 8.9l6.6-.9z" />
                    </motion.svg>
                    <span className="font-bold text-white tracking-tight truncate text-base">Trustpilot</span>
                  </motion.div>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [2, -2, 2], scale: [1, 1.04, 1] }}
                    transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="text-[#1A406B] shrink-0"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3h-8a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h1v3.5l4-3.5h3a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4zm6 6h-1v5a6 6 0 0 1-6 6h-3v1a3 3 0 0 0 3 3h4l4 3v-3a3 3 0 0 0 2-3v-6a3 3 0 0 0-3-3z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between gap-2 mt-4 sm:mt-3">
                  <div className="shrink-0">
                    <div className="flex items-baseline gap-1">
                      <RatingCountUp value={3.7} delay={400} className="font-bold text-white text-lg sm:text-xl" />
                      <span className="text-slate-400 font-medium text-xs">/ 5</span>
                    </div>
                    <div className="flex items-center gap-0.5 mt-0.5">
                      <StarRating rating={3.7} />
                    </div>
                    <p className="text-slate-400 text-[11px] mt-1 font-medium whitespace-nowrap">100+ Reviews</p>
                  </div>

                  <p className="text-slate-300 leading-snug flex-1 text-xs max-w-[85px]">
                    Real feedback from real clients.
                  </p>

                  <ArrowButton href="https://www.trustpilot.com/review/jawaminfotech.com" label="View Trustpilot reviews" />
                </div>
              </RatingCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
