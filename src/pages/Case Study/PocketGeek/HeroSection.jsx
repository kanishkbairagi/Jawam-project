import { Link } from 'react-router-dom';
import caseVideo from '../../../assets/optimized/case.mp4';
import casePoster from '../../../assets/posters/case.jpg';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

export default function HeroSection() {
  const handleExploreResults = (e) => {
    e.preventDefault();
    const el = document.getElementById('result-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden lg:mb-[220px] mb-0 md:mb-0 flex flex-col items-center justify-center pt-28 md:pt-0 lg:pt-36 pb-16 md:pb-10 lg:pb-10">
{/* Background Video */}
<ResponsiveHeroMedia
  className="
    absolute
    top-0
    left-0
    right-0
    w-full
    h-full
    md:h-[520px]
    lg:h-full
    object-cover
    z-0
  "
  video={caseVideo}
  poster={casePoster}
/>

{/* Dark Overlay */}
<div
  className="
    absolute
    top-0
    left-0
    right-0
    h-full
    md:h-[520px]
    lg:h-full
    bg-[#0F172A]/70
    z-0
    pointer-events-none
  "
/>

      <section
        className="relative px-4 max-w-[1100px] mx-auto z-10 w-full"
        id="hero-section"
      >
        <div className="flex flex-col items-center text-center">
          <button
            type="button"
            className="px-4 md:px-6 h-[32px] md:h-[40px] flex items-center justify-center gap-1.5 md:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white transition whitespace-nowrap w-fit shadow-sm mb-4"
            id="hel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 md:w-8 md:h-8 lg:w-5 lg:h-5 text-[#3b82f6]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <span className="text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-[#4B5563]">
              Case Study
            </span>
          </button>

          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-[70px] tracking-[-0.5px] text-center mb-4 text-white">
            Pocket Geek <span className="text-[#04A3DA]">Mobile Diagnostics App</span>
          </h1>

          <div className="mt-0 md:mt-[-25px] lg:mt-0">
            <p className="font-normal text-base md:text-[18px] leading-relaxed tracking-[-0.5px] text-center text-[#E7E8EA] mb-8 max-w-[800px]">
              Mobile Device Diagnostics &amp; Support Application for Android &amp; iOS
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#result-section"
              onClick={handleExploreResults}
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all"
            >
              Explore Results
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-slate-900 text-xs sm:text-sm font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
