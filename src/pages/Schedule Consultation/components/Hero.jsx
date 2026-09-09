export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
      <button
        className="anim-fade-up mb-6 px-4 md:px-1 lg:px-4 mx-auto lg:mx-0 h-[28px] md:h-[38px] lg:h-[45px] flex items-center justify-center gap-1.5 md:gap-1 lg:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap w-fit shadow-sm"
        style={{ animationDelay: '0ms' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#3B82F6]">
          <path d="M2.25 3a.75.75 0 000 1.5h1.386l2.56 10.24A2.25 2.25 0 008.379 16.5h8.976a2.25 2.25 0 002.18-1.694l1.2-4.8A.75.75 0 0019.008 9H6.53l-.57-2.25H20.25a.75.75 0 000-1.5H5.58l-.3-1.2A1.5 1.5 0 003.826 3H2.25zM9 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        </svg>
        <span className="text-[10px] md:text-[10px] lg:text-[16px] font-semibold text-[#4B5563]">Schedule a Consultation</span>
      </button>

      {/* Main Title */}
      <h1
        className="anim-fade-up font-extrabold lg:text-[60px] md:text-[50px] md:leading-[50px] lg:leading-[60px] md:max-w-[600px] lg:max-w-[700px] tracking-[-0.5px] lg:text-center text-left md:text-center mb-6"
        style={{ animationDelay: '150ms' }}
      >
        Let's Discuss Your
        <span className="text-[#00C2FF] anim-glow"> Project Requirements</span>
      </h1>

      {/* Subtitle Description */}
      <p
        className="anim-fade-up font-normal md:text-[17px] text-[15px] lg:text-[18px] mt-[-5px] md:mt-[-5px] md:px-4 lg:px-0 lg:mt-0 lg:leading-[28px] md:leading-[25px] leading-[24px] lg:max-w-[920px] tracking-[-0.5px] lg:text-center text-left md:text-center text-[#E7E8EA] mb-4"
        style={{ animationDelay: '300ms' }}
      >
        Whether you're looking to scale your team, accelerate product development, or hire specialized talent,
        our experts are here to help you identify the right solution for your business.
      </p>
    </div>
  )
}
