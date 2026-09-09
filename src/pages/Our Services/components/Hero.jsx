import { Link } from 'react-router-dom';
import '../services.css';
import services from '../../../assets/optimized/services.mp4'
import mobileServicesPoster from '../../../assets/mobile-optimized/mobileservices.webp'
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia'

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    // Wait a beat so the Cards section's own layout (grid height measurement,
    // scroll-linked morph progress) settles before we scroll to it — jumping
    // immediately via the native #anchor lands mid-layout-shift and clips
    // the heading, since that section's height depends on effects that run
    // just after mount.
    setTimeout(() => {
      const el = document.getElementById('services-cards');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <section className="relative  lg:h-[600px] lg:mt-0 mt-0 md:mt-[-30px] md:mb-0 lg:mb-0 flex items-center justify-center px-4 sm:px-6 md:px-6 lg:px-8  pt-[300px] md:pt-[85px] lg:pt-0 overflow-hidden text-white ">

      {/* Background video */}
      <ResponsiveHeroMedia
        className="absolute inset-0 w-full h-full md:h-full lg:h-full object-cover z-0"
        video={services}
        mobilePoster={mobileServicesPoster}
        desktopFallback={mobileServicesPoster}
        prioritizeVideo
      />
      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-[#0F172A]/70 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full lg:mt-[130px]">
<div className="max-w-6xl mx-auto text-center w-full md:mt-[45px] mt-0 lg:mt-0">
  <button
    className="hero-badge inline-flex items-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-3 mt-0 sm:mt-[-25px] mb-4 sm:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 sm:px-4 md:px-4 lg:px-6 py-1 sm:py-0.5 md:py-1 lg:py-2 shadow-sm"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
    <span className="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]">
      Our Services
    </span>
  </button>
</div>

        <h1 className="hero-animate hero-delay-1 text-left mt-[-5px] md:mt-0 lg:mt-0 md:text-center lg:text-center lg:max-w-[900px] mx-auto font-extrabold text-[30px] sm:text-[40px] md:text-[52px] lg:text-[60px] leading-[38px] md:max-w-[600px] sm:leading-[48px] md:leading-[50px] lg:leading-[60px] tracking-[-0.5px] mb-4 sm:mb-6">
          <span className="text-[#04A3DA]">Solutions Designed</span> to Drive your Success
        </h1>

        <p className="hero-animate text-slate-200 hero-delay-2 text-left mt-[-5ox] md:mt-[-0px] lg:mt-0 text-left md:text-center lg:text-center font-normal text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] tracking-[-0.5px] mb-6 sm:mb-8 md:max-w-[600px] md:mx-auto lg:max-w-[850px] lg:mx-auto">
          We design and engineer scalable, intelligent digital products  from custom software and AI to cloud, design and analytics  built to grow with your business.
        </p>

<div className="hero-animate hero-delay-3 mt-[-10px] md:mt-[-15px] lg:mt-0 flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8">
  <a href="#services-cards" onClick={handleExploreClick} className="hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap">
    Explore Services
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
    </svg>
  </a>
  <Link to="/work" className="hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap">
    Work with Us
  </Link>
</div>
      </div>
    </section>
  );
}
