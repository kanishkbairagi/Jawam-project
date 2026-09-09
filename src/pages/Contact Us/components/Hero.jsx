import contact from '../../../assets/optimized/contact.mp4';
import mobileContactPoster from '../../../assets/mobile-optimized/mobilecontact.webp';
import ResponsiveHeroMedia from '../../../common components/ResponsiveHeroMedia';

const Hero = () => {
  return (
    <section className="relative w-full text-center  mb-16 mt-0 overflow-hidden">

      {/* Background Video */}
      <ResponsiveHeroMedia
        className="absolute inset-0 w-full h-full object-cover -z-20"
        video={contact}
        mobilePoster={mobileContactPoster}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0F172A]/60 -z-10"></div>

      {/* Badge */}
      <div className="flex justify-center mb-6 md:mb-[10px] lg:mb-[3px] pt-20 md:pt-24 lg:pt-36 px-4">
        <div
          className="
            mb-0 md:mb-0 lg:mb-4
            inline-flex items-center gap-1.5 md:gap-1.5 lg:gap-2
            rounded-full bg-white
            px-3 py-1.5 md:px-3.5 md:py-1.5 lg:px-4 lg:py-2
            shadow-[0_4px_15px_rgba(255,255,255,0.05)]

            opacity-0
            animate-[fadeDown_0.7s_ease-out_0.1s_forwards]

            hover:scale-105
            hover:shadow-[0_5px_20px_rgba(4,163,218,0.15)]
            transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-sky-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>

          <span className="text-xs md:text-sm lg:text-[16px] font-semibold text-[#3F4555]">
            Contact Us
          </span>
        </div>
      </div>


      {/* Heading */}
      <h1
        className="
          text-white
          font-extrabold
          text-3xl sm:text-5xl lg:text-[60px]
          leading-tight sm:leading-[60px] lg:leading-[60px]
          tracking-[-0.5px]
          md:text-center text-center
          mb-6 md:mb-4 lg:mb-6
          px-4

          opacity-0
          animate-[fadeUp_0.8s_ease-out_0.25s_forwards]
        "
      >
        Let's Build Something Great <br className="hidden md:inline" />

        <span
          className="
            text-[#04A3DA]
            inline-block
            animate-[textGlow_3s_ease-in-out_1.2s_infinite]
          "
        >
          Together
        </span>
      </h1>


      {/* Description */}
      <p
        className="
          font-normal
          max-w-full lg:max-w-[800px]
          lg:mx-auto
          lg:mt-6 md:mt-0 mt-0
          text-sm md:text-[18px]
          leading-relaxed md:leading-[28px]
          text-[#E7E8EA]
          tracking-[-0.5px]
          text-center
          mb-8 md:mb-6 lg:mb-8
          px-4

          opacity-0
          animate-[fadeUp_0.8s_ease-out_0.45s_forwards]
        "
      >
        Have a project in your mind or need expert guidance? Reach out to us
        and let's build something great together
      </p>


     {/* CTA Buttons */}
<div
  className="
    flex flex-row items-center justify-center gap-3 sm:gap-4
    px-4 pb-10 md:pb-16 lg:pb-20

    opacity-0
    animate-[fadeUpScale_0.7s_ease-out_0.65s_forwards]
  "
>
  {/* WhatsApp */}
  <a
    href="https://wa.me/919981467849"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      w-12 h-12 sm:w-auto sm:h-auto
      text-white
      text-xs sm:text-sm
      font-semibold
      p-0 sm:px-4 sm:py-2 lg:px-6 lg:py-3
      rounded-full
      bg-gradient-to-r from-[#0ea5e9] to-[#2563eb]
      shadow-[0_4px_20px_rgba(14,165,233,0.3)]

      hover:opacity-95
      hover:scale-105
      hover:shadow-[0_8px_30px_rgba(14,165,233,0.45)]

      transition-all duration-300

      flex items-center justify-center gap-2
      shrink-0
    "
  >
    <svg
      className="
        w-4 h-4 lg:w-5 lg:h-5
        fill-current shrink-0
        transition-transform duration-300
        group-hover:scale-110
      "
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.895 14.11 1.87 11.758 1.87c-5.437 0-9.861 4.42-9.866 9.865-.001 2.016.525 3.99 1.52 5.733l-.999 3.647 3.734-.979zm11.233-6.963c-.3-.149-1.772-.875-2.046-.975-.275-.101-.475-.149-.674.15-.2.299-.775.975-.95 1.174-.175.199-.349.224-.649.075-.3-.149-1.265-.467-2.41-1.487-.89-.793-1.49-1.773-1.665-2.072-.175-.3-.019-.461.13-.61.135-.133.3-.349.449-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.625-.925-2.224-.244-.589-.493-.509-.674-.518-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.299-1.05 1.024-1.05 2.5 0 1.472 1.074 2.89 1.224 3.09.15.199 2.114 3.228 5.12 4.527.714.31 1.272.495 1.707.634.717.228 1.37.196 1.886.119.575-.085 1.772-.725 2.022-1.424.25-.699.25-1.299.175-1.424-.075-.125-.275-.199-.575-.349z" />
    </svg>

    <span className="hidden sm:inline">
      Chat us on WhatsApp
    </span>
  </a>

  {/* Schedule Call */}
  <a
    href="https://calendly.com/shainkigupta?hide_event_type_details=1" target="_blank"
    className="
      group
      w-12 h-12 sm:w-auto sm:h-auto
      text-slate-800
      text-xs sm:text-sm
      font-semibold
      p-0 sm:px-4 sm:py-2 lg:px-6 lg:py-3
      rounded-full
      bg-white
      hover:bg-slate-100
      shadow-lg

      hover:scale-105
      hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)]

      transition-all duration-300

      flex items-center justify-center gap-2
      shrink-0
    "
  >
    <svg
      className="
        w-4 h-4 lg:w-5 lg:h-5
        text-slate-800 shrink-0
        transition-transform duration-300
        group-hover:rotate-6
      "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5v12a2 2 0 002 2z"
      />
    </svg>

    <span className="hidden sm:inline">
      Schedule a call
    </span>
  </a>
</div>

    </section>
  );
};

export default Hero;
