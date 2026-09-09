export default function WhyJoinUs() {
  return (
    <section className="max-w-[1000px]  mx-auto px-4 mt-10 md:mt-0 lg:mt-12 mb-10 md:mb-0 lg:mb-0">
      <div className="text-center mb-12 md:mb-16">
        <p className="mb-4 font-bold text-[16px] leading-[18px] tracking-[0px] text-center text-[#04A3DA]">WHY JOIN US?</p>
        <h2 className="mt-[-8px] md:mt-[-10px] text-2xl md:text-5xl font-bold text-white">More than a <span className="text-[#04A3DA]">workspace</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6 mt-[-35px]">
        <div className="feature-card group border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-6 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
          <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#04A3DA" className="w-10 h-10">
              <path d="M12 2c2.8 2.2 3.8 6 3.5 9.3l2.5 2.5v2.2l-2.8-1.1-.9 2.7H9.7l-.9-2.7L6 16v-2.2l2.5-2.5C8.2 8 9.2 4.2 12 2zm0 3.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM10 18h4v3l-2-1.2L10 21v-3z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal text-white py-5">Growth that Matter</h3>
          <p className="font-normal text-[16px] text-left pt-2 leading-[16px] tracking-normal text-[#E6E8EC]">
            Continuous learning, mentorship and real opportunities to grow your career.
          </p>
        </div>

        <div className="feature-card group border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-6 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
          <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#04A3DA" className="w-[30px] h-[30px]">
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V20h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal text-white py-5">Collaboration Culture</h3>
          <p className="font-normal text-[16px] text-left pt-2 leading-[16px] tracking-normal text-[#E6E8EC]">
            Work with passionate teams that value ideas, openness and innovation.
          </p>
        </div>

        <div className="feature-card group border border-[#BDBDBDB0] bg-[#FFFFFF1A] rounded-2xl p-6 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
          <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-[#04A3DA]">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal text-white py-5">Flexible Environment</h3>
          <p className="font-normal text-[16px] text-left pt-2 leading-[16px] tracking-normal text-[#E6E8EC]">
            A healthy work environment that supports balance, wellbeing and productivity.
          </p>
        </div>

        <div className="feature-card group bg-[#FFFFFF1A] border border-[#BDBDBDB0] rounded-2xl p-6 hover:border-[#04A3DA]/30 hover:bg-slate-800/35 transition-all duration-300">
          <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#04A3DA" className="w-[30px] h-[30px]">
              <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal text-white py-5">Meaningful Projects</h3>
          <p className="font-normal text-[16px] text-left pt-2 leading-[16px] tracking-normal text-[#E6E8EC]">
            Build digital solutions that solve real problems and create lasting impacts.
          </p>
        </div>
      </div>
    </section>
  );
}
