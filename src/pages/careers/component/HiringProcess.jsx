export default function HiringProcess() {
  return (
    <section className="mx-auto  mb-16 md:mb-24 max-w-[1010px] px-4">
      <div className="relative mt-[-25px] md:mt-0 lg:mt-0 overflow-hidden rounded-2xl bg-[#0A1A2F] flex flex-col justify-center px-6 md:px-10 py-10 md:py-12 gap-6 w-full max-w-[1197px]">

        <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#04A3DA] opacity-50 blur-[90px]"></div>
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#04A3DA] opacity-50 blur-[90px]"></div>

        <div className="relative text-center">
          <p className="text-[#04A3DA] font-bold text-xs md:text-lg tracking-widest uppercase mb-3">OUR HIRING PROCESS</p>
          <h2 className="font-bold text-3xl md:text-[44px] leading-0 md:leading-[48px] tracking-[-0.5px] text-cente">Simple Steps to <span className="text-[#04A3DA] mb-2">Join our Team</span></h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-14 mt-1 max-w-[900px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <span className="text-[#04A3DA] font-bold text-[40px] leading-[48px] tracking-[-0.5px] mb-2">1</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[#04A3DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base font-medium">Application Review</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-[#04A3DA] font-bold text-[40px] leading-[48px] tracking-[-0.5px] mb-2">2</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[#04A3DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base font-medium">Initial Conversation</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-[#04A3DA] font-bold text-[40px] leading-[48px] tracking-[-0.5px] mb-2">3</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[#04A3DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base font-medium">Technical Evaluation</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-[#04A3DA] font-bold text-[40px] leading-[48px] tracking-[-0.5px] mb-2">4</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-[#04A3DA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <p className="text-white text-sm md:text-base font-medium">Final Discussion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
