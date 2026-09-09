import React from 'react';
import work from '../../../assets/optimized/work.mp4'
import mobileWorkPoster from '../../../assets/mobile-optimized/mobilework.webp'
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia'

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="
        relative min-h-fit md:min-h-screen
        flex items-center justify-center
        pt-[6.5rem] md:pt-24
        pb-6 md:pb-16
        px-4
        mt-0
        
        overflow-hidden
      "
    >
   {/* Background video */}
<ResponsiveHeroMedia
  className="
    absolute
    top-0 left-0 right-0
    w-full
    h-[600px] md:h-[390px] lg:h-[600px]
    object-cover
    z-0
  "
  video={work}
  mobilePoster={mobileWorkPoster}
/>

{/* Dark overlay — same height as video */}
<div
  className="
    absolute
    top-0 left-0 right-0
    h-[600px] md:h-[390px] lg:h-[600px]
    bg-[#0F172A]/70
    z-0
    pointer-events-none
  "
/>

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Badge */}
        <button
          className="
            mt-[-20px] md:mt-[-130px] lg:mt-[80px]
            w-[100px] md:w-[175px]
            mx-auto mb-4
            h-[28px] md:h-[40px] 
            flex items-center justify-center
            gap-1.5 md:gap-2
            bg-[#EEF2F8] 
            rounded-full
            hover:bg-white
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]
            transition-all duration-300
            animate-[fadeDown_0.8s_ease-out]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              w-3.5 h-3.5 md:w-5 md:h-5
              text-[#3B82F6]
              transition-transform duration-500
              group-hover:rotate-12
            "
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>

          <span className="text-[10px] md:text-[17px] font-semibold text-[#4B5563]">
            Work with us
          </span>
        </button>

        {/* Heading */}
        <h1
          className="
            max-w-[1100px]
            mx-auto
            mt-0 md:mt-0 lg:mt-[30px]
            mb-4 md:mb-6
            font-extrabold
            text-[32px]
            md:text-[48px]
            lg:text-[60px]
            leading-[40px]
            md:leading-[60px]
            lg:leading-[70px]
            tracking-[-0.5px]
            md:text-center
            lg:text-center
            lg:mb-[40px]
            text-left
            text-white
            animate-[fadeUp_0.9s_ease-out]
          "
        >
          Let's Build Innovative{' '}
          <span
            className="
              text-sky-400
              font-extrabold
              text-[32px]
              md:text-[48px]
              lg:text-[60px]
              leading-[40px]
              md:leading-[60px]
              lg:leading-[60px]
              tracking-[-0.5px]
              inline-block
              animate-[textGlow_2s_ease-in-out_infinite]
            "
          >
            Digital Solutions Together
          </span>
        </h1>

        {/* Description */}
        <div
          className="
            mt-0
            md:mt-[-10px]
            lg:mt-0
            max-w-full
            md:max-w-[500px]
            lg:max-w-[900px]
            md:mx-auto
            animate-[fadeUp_1.1s_ease-out]
          
          "
        >
          <p
            className="
              mt-[20px]
              md:mt-[-110px]
              lg:mt-[-5px]
              font-normal
              text-[14px]
              md:text-[16px]
              lg:text-[18px]
              leading-[20px]
              lg:max-w-[800px]
              md:leading-[24px]
              lg:leading-[28px]
              tracking-[-0.5px]
              md:text-center
              lg:text-center
              text-left
              lg:mx-auto
              md:mx-auto
              text-slate-200
              mb-[20px]
              md:mb-0
              lg:mb-[350px]
              transition-all
              duration-500
              hover:text-white
            
            "
          >
  Collaborate with us as a Client, Partner, or Service Provider to transform ideas into innovative technology solutions, accelerate growth, create lasting impact, and deliver meaningful value for every business.
          </p>
        </div>

      </div>
    </section>
  );
}
