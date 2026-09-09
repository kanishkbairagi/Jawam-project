import { Link } from 'react-router-dom';
import portfolio from '../../../assets/optimized/portfolio.mp4';
import portfolioPoster from '../../../assets/posters/portfolio.jpg';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

const PortfolioHero = () => {
  return (
    <div className="relative overflow-hidden pt-28 md:pt-22 lg:pt-40 pb-16 md:pb-24 flex flex-col items-center justify-center">
    {/* Background Video */}
<ResponsiveHeroMedia
  className="
    absolute
    top-0
    left-0
    right-0
    w-full
    h-full
    md:h-[460px]
    lg:h-full
    object-cover
    z-0
  "
  video={portfolio}
  poster={portfolioPoster}
/>

{/* Dark Overlay */}
<div
  className="
    absolute
    top-0
    left-0
    right-0
    h-full
    md:h-[460px]
    lg:h-full
    bg-[#0F172A]/70
    z-0
    pointer-events-none
  "
/>

      {/* Hero Content */}
      <section className="relative flex flex-col items-center justify-center px-4 max-w-6xl mx-auto text-center z-10">
        <button
          className="px-4 md:px-4 lg:px-6
                     mx-auto mb-6
                     h-[28px] md:h-[38px] lg:h-[40px]
                     flex items-center justify-center
                     gap-1.5 md:gap-1 lg:gap-2
                     bg-[#EEF2F8]
                     rounded-full
                     hover:bg-white
                     transition
                     whitespace-nowrap
                     w-fit
                     shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#3b82f6]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>

          <span className="text-[10px] md:text-[14px] lg:text-[16px] font-semibold text-[#4B5563]">
            Portfolio
          </span>
        </button>

        <h1 className="font-extrabold
                       text-[36px] leading-[44px]
                       md:text-[52px] md:leading-[56px]
                       lg:text-[60px] lg:leading-[64px]
                       tracking-[-0.5px]
                       text-left md:text-center
                       mb-6
                       text-white">
          Transforming <span className="text-[#04A3DA]">Ideas</span> Into Digital{' '}
          <span className="text-[#04A3DA]">Success</span> Stories
        </h1>

        <p className="font-normal text-[15px] leading-[22px] md:text-[17px] md:leading-[25px] lg:text-[18px] lg:leading-[28px] tracking-[-0.5px] text-slate-200 text-left md:text-center mb-8 max-w-md md:max-w-none">
          Company Website Redesign & Digital Experience Enhancement
        </p>

        <div className="flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4 mt-[-10px] md:mt-0">
          {/* Explore Button */}
          <Link to="/products"
             className="inline-flex items-center justify-center gap-2 md:gap-1.5 lg:gap-2
                        text-white
                        text-[12px] md:text-[12px] lg:text-base
                        font-semibold
                        px-4 py-2
                        md:px-5 md:py-2
                        lg:px-7 lg:py-2.5
                        rounded-full
                        bg-gradient-to-r from-[#0ea5e9] to-[#2563eb]
                        shadow-[0_4px_20px_rgba(14,165,233,0.3)]
                        hover:opacity-95 transition-all">
            Explore our Product

            <svg
              className="w-3.5 h-3.5 md:w-[15px] md:h-[15px] lg:w-4 lg:h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </Link>

          {/* Contact Button */}
          <Link to="/contact-us"
             className="inline-flex items-center justify-center
                        text-black
                        text-[12px] md:text-[12px] lg:text-base
                        font-semibold
                        px-4 py-2
                        md:px-5 md:py-2
                        lg:px-7 lg:py-2.5
                        rounded-full
                        bg-white
                        hover:bg-slate-100
                        transition-all
                        border border-black">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioHero;
