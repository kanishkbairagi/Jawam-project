import { Icon } from '@iconify/react';

export default function TrustSection() {
  return (
    <div class="mb-[100px] md:mb-0 lg:mb-0">
    <section className="px-4 max-w-[1000px] mx-auto mt-0 md:mt-[25px] lg:mt-[80px]  lg:mb-[80px]">
      <div className="text-center mb-8 md:mb-10">
        <p className="mb-3 font-semibold md:text-[16px] text-[15px] leading-[18px] tracking-[0px] text-center text-[#04A3DA] uppercase">WHY TRUST US</p>
        <h2 className="font-bold md:text-[44px] text-[20px] leading-[48px] tracking-[-0.5px] text-center mt-[-15px] md:mt-0">
          Built for <span className="text-sky-400">enterprise reliability</span>
        </h2>
      </div>

      <div className="trust-pills-grid mt-[-25px] lg:mt-0 flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-1.5 lg:gap-4">
        <div className="trust-pill-row flex w-full lg:w-auto gap-1.5 lg:gap-4">
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="tabler:clock" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Onboarding in 2–3 Days</span>
          </div>
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="at-icons:expand" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Flexible Hiring Models</span>
          </div>
        </div>
        <div className="trust-pill-row flex w-full lg:w-auto gap-1.5 lg:gap-4">
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="ic:outline-people" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Experienced Professionals</span>
          </div>
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="ion:rocket-sharp" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Agile Development Approach</span>
          </div>
        </div>
        <div className="trust-pill-row flex w-full lg:w-auto gap-1.5 lg:gap-4">
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="ic:outline-message" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text text-white text-[9px] lg:text-[14px] font-medium leading-[9px] lg:leading-normal whitespace-nowrap truncate">Transparent Communication</span>
          </div>
          <div className="trust-pill flex-1 lg:flex-none flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 min-w-0 overflow-hidden">
            <Icon icon="mdi:web" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
            <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Time Zone Compatibility</span>
          </div>
        </div>
        <div className="trust-pill flex items-center justify-center gap-1 lg:gap-2 bg-[#FFFFFF33] border border-[#BDBDBDB0] rounded-full px-1.5 py-2 lg:px-5 lg:py-3 hover:border-sky-400/30 transition-all duration-300 mx-auto lg:mx-0 w-fit min-w-0">
          <Icon icon="material-symbols:handshake-outline" className="trust-pill-icon text-white text-[10px] lg:text-[16px] shrink-0"/>
          <span className="trust-pill-text font-semibold text-[9px] lg:text-[13px] leading-[9px] lg:leading-[12.66px] tracking-[0px] whitespace-nowrap truncate">Long-Term Partnership</span>
        </div>
      </div>
    </section>
    </div>
  );
}
