import { Link } from 'react-router-dom';
import staffImg from '../../../assets/staff.webp';
import staff from '../../../assets/optimized/staff.mp4';
import staffPoster from '../../../assets/posters/staff.webp';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';
import './augmentation.css';

export default function HeroSection() {
  return (
    <div className="relative overflow-visible pt-20 md:pt-28 lg:pt-36 pb-4 lg:pb-16">
      {/* Background video — sits behind the entire hero, including under the navbar
          since this component renders at the very top of the page and the navbar
          is fixed/transparent above it. */}
    {/* Background video */}
<div
  className="
    absolute
    top-0 left-0 right-0
    h-[500px]
    md:h-[640px]
    lg:h-full
    overflow-hidden
    z-0
  "
>
  <ResponsiveHeroMedia
    className="absolute inset-0 w-full h-full object-cover"
    video={staff}
    poster={staffPoster}
  />

  <div className="absolute inset-0 bg-[#0F172A]/70 pointer-events-none" />
</div>

      <section className="hero-section overflow-visible relative z-10 px-4 max-w-[1100px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:max-h-[500px] items-center lg:items-center gap-10 lg:gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

            <button
              className="mb-4 px-4 md:px-1 lg:px-4 mx-auto lg:mx-0 h-[28px] md:h-[38px] lg:h-[45px] flex items-center justify-center gap-1.5 md:gap-1 lg:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white transition whitespace-nowrap w-fit shadow-sm
                opacity-0 animate-[fadeInDown_0.6s_ease-out_forwards]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#3B82F6]">
                <path d="M2.25 3a.75.75 0 000 1.5h1.386l2.56 10.24A2.25 2.25 0 008.379 16.5h8.976a2.25 2.25 0 002.18-1.694l1.2-4.8A.75.75 0 0019.008 9H6.53l-.57-2.25H20.25a.75.75 0 000-1.5H5.58l-.3-1.2A1.5 1.5 0 003.826 3H2.25zM9 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              <span className="text-[10px] md:text-[10px] lg:text-[16px] font-semibold text-[#4B5563]">Staff Augmentation Services</span>
            </button>

            <h1
              className="font-extrabold text-[55px] leading-[64px] tracking-[-0.5px] mb-4 text-left text-white
                opacity-0 animate-[fadeInUp_0.7s_ease-out_0.15s_forwards]"
            >
              Scale Your Team with <span className="text-[#04A3DA]">Top Technology Talent</span>
            </h1>

            <p
              className="font-normal text-[18px] leading-[24px] tracking-[-0.5px] text-slate-200 mb-6 text-left
                opacity-0 animate-[fadeInUp_0.7s_ease-out_0.3s_forwards]"
            >
              Accelerate your business growth with flexible and scalable staff augmentation solutions. Whether you need a single developer, a dedicated team, or specialized expertise, Jawam Infotech helps you quickly extend your workforce with highly skilled professionals.
            </p>

            <div
              className="flex flex-row items-center justify-center lg:justify-start gap-1.5 sm:gap-4 w-full
                opacity-0 animate-[fadeInUp_0.7s_ease-out_0.45s_forwards]"
            >
              <Link to="/hire-developers"
                className="group flex-1 min-w-0 sm:flex-initial sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 text-white text-[9px] sm:text-sm md:text-base lg:text-sm font-semibold px-2.5 py-2 sm:px-6 sm:py-3 lg:px-5 lg:py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:shadow-[0_6px_28px_rgba(14,165,233,0.5)] hover:-translate-y-0.5 hover:opacity-95 transition-all duration-300 text-center leading-tight">
                Hire Dedicated Developers
                <svg className="hidden sm:block w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </Link>
              <Link to="/schedule-consultation"
                className="group flex-1 min-w-0 sm:flex-initial sm:w-auto inline-flex items-center justify-center gap-1 sm:gap-2 text-slate-900 text-[9px] sm:text-sm md:text-base lg:text-sm font-semibold px-2.5 py-2 sm:px-6 sm:py-3 lg:px-5 lg:py-2.5 rounded-full bg-white hover:bg-slate-100 hover:-translate-y-0.5 transition-all duration-300 border border-white text-center leading-tight">
                <svg className="hidden sm:block w-4 h-4 lg:w-3.5 lg:h-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M8 2v4M16 2v4"/>
                </svg>
                Schedule a Consultation
              </Link>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 h-full mt-[-5px] md:mt-0
              opacity-0 animate-[fadeInRight_0.8s_ease-out_0.25s_forwards]"
          >
            <img
              src={staffImg}
              alt="Team collaboration"
              className="w-full h-auto max-h-[470px] rounded-2xl shadow-2xl object-cover transition-transform duration-500 ease-out hover:scale-[1.02] animate-[float_5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
