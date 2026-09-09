import career from '../../../assets/optimized/career.mp4';
import mobileCareersPoster from '../../../assets/mobile-optimized/mobilecareers.webp';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

export default function Hero() {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('open-roles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-fit md:min-h-screen lg:min-h-[500px] flex items-center justify-center pt-24 lg:pt-[30px] md:pt-20 pb-20 md:pb-28 lg:pb-0 lg:mb-[-30px] px-4 overflow-hidden">
<ResponsiveHeroMedia
  className="
    absolute
    top-0 left-0 right-0
    w-full
    h-[405px] md:h-[440px] lg:h-[470px]
    object-cover
    z-0
  "
  video={career}
  mobilePoster={mobileCareersPoster}
/>

<div
  className="
    absolute
    top-0 left-0 right-0
    h-[405px] md:h-[440px] lg:h-[470px]
    bg-[#0F172A]/60
    z-0
    pointer-events-none
  "
/>

      <div className="relative z-10 max-w-[1150px] mx-auto text-center w-full md:mt-[30px] mt-0 lg:mt-0">
        {/* Badge */}
        <button
          type="button"
          className="
            inline-flex items-center gap-2 md:gap-3
            mb-5
            bg-[#F3F4F6] hover:bg-white
            transition-all duration-300
            rounded-full px-4 md:px-6 py-1 md:py-1.5 lg:px-6 lg:py-2
            shadow-sm
            opacity-0
            animate-[fadeDown_0.7s_ease-out_0.1s_forwards]
            hover:scale-105
            hover:shadow-[0_5px_20px_rgba(4,163,218,0.15)]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#3b82f6]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>

          <span className="text-[14px] md:text-[16px] font-semibold text-[#4B5563]">
            Career
          </span>
        </button>

        {/* Heading */}
        <h1
          className="
            font-extrabold
            text-3xl sm:text-5xl lg:text-[60px]
            leading-tight sm:leading-[60px] lg:leading-[60px]
            tracking-[-0.5px]
            text-center
            mb-4
            text-white
            opacity-0
            animate-[fadeUp_0.8s_ease-out_0.25s_forwards]
          "
        >
          Build, Innovate{' '}
          <span
            className="
              text-[#04A3DA]
              inline-block
              animate-[textGlow_3s_ease-in-out_1.2s_infinite]
            "
          >
            Grow Together
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            lg:max-w-[900px]
            md:max-w-full
            mx-auto
            font-normal
            text-sm md:text-[18px]
            leading-relaxed md:leading-[28px]
            tracking-[-0.2px]
            text-slate-200
            text-center
            mb-9
            opacity-0
            animate-[fadeUp_0.8s_ease-out_0.45s_forwards]
          "
        >
          Join a team of passionate creators, engineers and innovators
          building digital experiences for businesses worldwide.
        </p>

        {/* CTA */}
        <div
          className="
            flex flex-row items-center justify-center
            opacity-0
            animate-[fadeUpScale_0.7s_ease-out_0.65s_forwards]
          "
        >
          <a
            href="#open-roles"
            onClick={handleExploreClick}
            className="
              group
              text-white
              text-[11px] md:text-xs lg:text-sm
              font-semibold
              px-4 md:px-5 lg:px-7
              py-2 md:py-2 lg:py-3
              rounded-full
              bg-gradient-to-r
              from-[#0ea5e9]
              to-[#2563eb]
              mt-[-15px] lg:mt-0 md:mt-0
              shadow-[0_4px_20px_rgba(14,165,233,0.3)]
              hover:opacity-95
              hover:scale-105
              hover:shadow-[0_8px_30px_rgba(14,165,233,0.45)]
              transition-all duration-300
              flex items-center gap-1.5 md:gap-1.5 lg:gap-2
            "
          >
            Explore Open Roles
            <svg
              className="
                w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4
                transition-transform duration-300
                group-hover:translate-x-1
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
        </div>
      </div>
    </section>
  );
}
