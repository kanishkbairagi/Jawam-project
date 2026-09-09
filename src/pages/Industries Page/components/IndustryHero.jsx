import Icons from './Icons';
import '../industries.css';
import industry from '../../../assets/optimized/industry.mp4'
import mobileIndustriesPoster from '../../../assets/mobile-optimized/mobileindustries.webp'
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia'

export default function IndustryHero() {
  return (
    
    <section className="mt-0 md:mt-0 lg:mt-0 mb-[210px] md:mb-0 lg:mb-[110px] relative lg:h-[600px] flex items-center justify-center text-white">

      {/* Background — overflow hidden only here so icon row can scroll */}
      <div className="absolute inset-0 overflow-hidden z-0"> 
        <ResponsiveHeroMedia
          className="w-full h-full md:h-full lg:h-full object-cover"
          video={industry}
          mobilePoster={mobileIndustriesPoster}
          desktopFallback={mobileIndustriesPoster}
          prioritizeVideo
        />
        <div className="absolute inset-0 bg-[#0F172A]/70 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 min-w-0 md:pt-24 md:mt-[20px] mt-[250px] lg:mt-[40px]">
        <button
          className="ih-pill ih-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-4 md:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-5 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span className="text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]">
            Industries we serve
          </span>
        </button>

        <h1 className="ih-animate ih-delay-2 lg:max-w-[900px] mx-auto font-extrabold text-[32px] md:text-[48px] lg:text-[60px] leading-[38px] md:leading-[50px] lg:leading-[60px] tracking-[-0.5px] md:text-center lg:text-center text-left mb-4 md:mb-5 lg:mb-6">
          <span className="text-[#04A3DA]">Smart Solutions </span>for every Industry
        </h1>

        <p className="ih-animate ih-delay-3 md:max-w-[500px] lg:max-w-[900px] mt-[-5px] md:mt-[-10px] lg:mt-0 lg:max-w-[970px] mx-auto font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-0.5px] md:text-center lg:text-center text-left  text-slate-200 mb-8 md:mb-10 lg:mb-12">
          We partner with businesses across diverse industries to deliver custom software solutions that solve real challenges and drive meaningful growth.
        </p>

        <div className="ih-animate ih-delay-4 w-full min-w-0">
          <Icons />
        </div>
      </div>
    </section>
  
  );
}
