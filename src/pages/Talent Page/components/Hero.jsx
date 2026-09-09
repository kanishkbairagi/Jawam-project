import { Link } from 'react-router-dom';
import talent from '../../../assets/optimized/talent.mp4';
import talentPoster from '../../../assets/posters/talent.webp';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-28 md:mb-[-60px] mb-0 lg:mb-0 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
{/* Background video */}
<ResponsiveHeroMedia
  className="
    absolute
    top-0 left-0 right-0
    w-full
    h-full
    md:h-[450px]
    lg:h-full
    object-cover
    z-0
  "
  video={talent}
  poster={talentPoster}
/>

{/* Dark overlay — match video height on tablet */}
<div
  className="
    absolute
    top-0 left-0 right-0
    h-full
    md:h-[450px]
    lg:h-full
    bg-[#0F172A]/60
    z-0
    pointer-events-none
  "
/>

      <section className="relative z-10 flex flex-col items-center justify-center px-4 max-w-6xl mx-auto text-center">

        <button
          className="hero-pill px-4 md:px-6 mx-auto mb-6 h-[28px] md:h-[42px] flex items-center justify-center gap-1.5 md:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white transition whitespace-nowrap w-fit shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span className="text-[10px] md:text-[16px] font-semibold text-[#4B5563]">Looking for Talent</span>
        </button>

        <h1 className="max-w-full lg:max-w-[800px] md:max-w-full font-extrabold text-[36px] sm:text-[48px] md:text-[50px] lg:text-[55px] leading-[44px] sm:leading-[56px] lg:leading-[60px] tracking-[-0.5px] text-white mb-6 text-center px-1">
          Hire Top Tech Talent,{' '}
          <span className="font-extrabold text-[#04A3DA]">On Demand</span>
        </h1>

        <p className="max-w-full lg:max-w-[700px] hero-description font-normal text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] tracking-[-0.5px] text-slate-200 text-center mb-8">
          Access pre vetted developers, designers, AI engineers, and dedicated teams tailored to your business needs.
        </p>

        <div className="hero-buttons-fix">
          <a href="https://calendly.com/shainkigupta?hide_event_type_details=1" className="hero-btn-primary text-sm md:text-xs lg:text-sm px-6 py-3 md:px-4 md:py-2 lg:px-6 lg:py-1">
            Book a Discover Call
            <svg className="w-4 h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </a>
          <Link to="/contact-us" className="hero-btn-secondary text-sm md:text-xs lg:text-sm px-6 py-3 md:px-4 md:py-2 lg:px-6 lg:py-2">
            Contact Us
          </Link>
        </div>

      </section>
    </div>
  );
}
