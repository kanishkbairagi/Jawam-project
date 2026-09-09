export default function Process() {
  return (
    <div>
    <section className="py-10 md:py-0 lg:pt-4 px-4 max-w-[1150px] mx-auto">

      <div className="relative overflow-hidden rounded-3xl bg-[#091D3E] border border-white/10 px-6 py-8 md:p-10 text-center shadow-2xl">

        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#04A3DA] opacity-20 blur-[80px] pointer-events-none"></div>
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#04A3DA] opacity-20 blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 text-center mb-8 md:mb-10">
          <p className="mb-2 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA]">
            HOW IT WORKS?
          </p>
          <h2 className="section-heading font-bold text-[44px] md:text-[36px] leading-[48px] md:leading-[42px] tracking-[-0.5px] text-center">
            A Simple, <span className="text-sky-400">Transparent process</span>
          </h2>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-3 lg:gap-0">

          <div className="flex flex-col items-center">
            <span className="step-number text-sky-400 font-extrabold text-2xl md:text-3xl mb-2">1</span>
            <div className="step-circle w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-3 bg-white shrink-0">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="step-text text-white text-sm md:text-base font-bold">Share requirement</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="step-number text-sky-400 font-extrabold text-2xl md:text-3xl mb-2">2</span>
            <div className="step-circle w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-3 bg-white shrink-0">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <p className="step-text text-white text-sm md:text-base font-bold">Get matched</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="step-number text-sky-400 font-extrabold text-2xl md:text-3xl mb-2">3</span>
            <div className="step-circle w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-3 bg-white shrink-0">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="step-text text-white text-sm md:text-base font-bold">Interview and Select</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="step-number text-sky-400 font-extrabold text-2xl md:text-3xl mb-2">4</span>
            <div className="step-circle w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-3 bg-white shrink-0">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.969 0 1.371 1.24.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.17 0l-3.971 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.783-.57-.38-1.81.588-1.81h4.906a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <p className="step-text text-white text-sm md:text-base font-bold">Start building</p>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
