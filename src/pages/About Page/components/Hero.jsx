import { Link } from 'react-router-dom'
import about from '../../../assets/optimized/about.mp4'
import mobileAboutPoster from '../../../assets/mobile-optimized/mobileabout.webp'
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia'

export default function Hero() {
  return (
    
    <section className="mb-[50px] md:mb-[70px] lg:mb-[150px] relative lg:h-[600px] flex flex-col items-center justify-center text-center px-4 pt-[90px] lg:pt-[10px] md:pt-[30px] lg:mt-0 pt-[0] overflow-hidden text-white">

      {/* Background video */}
      <ResponsiveHeroMedia
        className="absolute inset-0 w-full md:h-[600px] lg:h-full h-full object-cover z-0"
        video={about}
        mobilePoster={mobileAboutPoster}
        desktopFallback={mobileAboutPoster}
        prioritizeVideo
      />
      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-[#0F172A]/60 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:mt-[90px] mt-0 lg:mt-0 items-center gap-6 lg:mt-[130px]">
<button
  className="hero-animate hero-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-3 md:mb-4 lg:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
  <span className="text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]">
    About Jawam Infotech
  </span>
</button>

<h2 className="hero-animate hero-delay-2 mt-[-20px] lg:max-w-full md:max-w-[700px] md:mt-[-25px] lg:mt-[-20px] font-extrabold text-[30px] md:text-[42px] lg:text-[60px] leading-[35px] md:leading-[48px] lg:leading-[60px] tracking-[-0.5px] lg:text-center text-left md:text-center">
  Trusted by <span className="text-[#04A3DA]">Growing</span> Businesses Across <span className="text-[#04A3DA]">Industries</span>
</h2>

<p className="hero-animate hero-delay-2 text-slate-200  mt-[-10px] md:mt-[-5px] lg:mt-[0px] text-[13px] md:text-[15px] lg:text-[18px] leading-[19px] md:leading-[24px] lg:leading-[28px] lg:mt-[-5px] tracking-[-0.5px] lg:text-center text-left md:text-center lg:mb-1  md:max-w-[700px] lg:max-w-[900px]">
 At Jawam Infotech, We are dedicated to craft scalable, reliable and innovative software solution that drive business growth and digital transformation
</p>


<div className="hero-animate hero-delay-3 mt-[-8px] md:mt-0 lg:mt-[-5px] flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8">
  <Link to="/contact-us" className="hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap">
    Contact Us
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
    </svg>
  </Link>
  <Link to="/work" className="hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap">
    Work with Us
  </Link>
</div>
      </div>
    </section>
  
  )
}
