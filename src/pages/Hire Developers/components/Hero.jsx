import '../hire.css'
export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">


      {/* Badge */}
      <button className="hero-fade-1 mb-6 px-4 md:px-1 lg:px-4 mx-auto lg:mx-0 h-[28px] md:h-[38px] lg:h-[45px] flex items-center justify-center gap-1.5 md:gap-1 lg:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white hover:scale-[1.04] active:scale-[0.98] transition-all duration-300 whitespace-nowrap w-fit shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#3B82F6]">
          <path d="M2.25 3a.75.75 0 000 1.5h1.386l2.56 10.24A2.25 2.25 0 008.379 16.5h8.976a2.25 2.25 0 002.18-1.694l1.2-4.8A.75.75 0 0019.008 9H6.53l-.57-2.25H20.25a.75.75 0 000-1.5H5.58l-.3-1.2A1.5 1.5 0 003.826 3H2.25zM9 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>
        <span className="text-[10px] md:text-[10px] lg:text-[16px] font-semibold text-[#4B5563]">Hire Dedicate Developers</span>
      </button>

      {/* Main Title */}
      <h1 className="hero-fade-2 font-extrabold lg:text-[60px] md:text-[50px] md:leading-[50px] lg:leading-[60px] tracking-[-0.5px] lg:text-center md:text-center text-left mb-6">
        Scale Your Team Faster <br className="hidden sm:inline" />
        with <span className="text-[#00C2FF] inline-block transition-transform duration-300 hover:scale-105">Expert Talent</span>
      </h1>

      {/* Subtitle Paragraph */}
      <p className="hero-fade-3 font-normal lg:text-[18px] md:text-[17px] mt-[-5px] lg:mt-0 md:mt-[-5px] text-[15px] md:max-w-[650px] lg:max-w-[900px] lg:mx-auto lg:leading-[28px] md:leading-[25px] leading-[20px] tracking-[-0.5px] lg:text-center text-left md:text-center text-[#E7E8EA] mb-2">
        Build high-performing teams without the delays and challenges of traditional hiring. At Jawam Infotech,
        we help businesses onboard pre-vetted developers, designers, QA engineers, and technology experts
        within 2–3 days, enabling faster project execution and business growth.
      </p>
    </div>
  )
}
