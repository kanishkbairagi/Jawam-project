import { Icon } from "@iconify/react";

export default function Features() {
  return (
    <div className="mb-[-50px] md:mb-0 lg:mb-0">
    <section
      className="why-hire-section py-10 md:py-16 lg:py-24 px-4 max-w-[1000px] mx-auto mt-[-50px] md:mt-[-150px] lg:mt-[60px] mb-[-100px] md:mb-16 lg:mb-[-30px]"
      id="why-product-section"
    >
      <div className="text-center mb-12 md:mb-4 lg:mb-8">
        <p className="font-semibold text-[16px] leading-[18px] tracking-[0] text-center text-[#04A3DA] mb-4">
          WHY OUR PRODUCT?
        </p>
        <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[44px] leading-[34px] md:leading-[42px] lg:leading-[48px] tracking-[-0.5px] text-center">
          Built for{" "}
          <span className="text-sky-400">
            Scalable, Performance &amp; Innovation
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 lg:gap-8 mt-0 md:mt-[-10px] lg:mt-0">
        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#04A3DA"
                  className="w-10 h-10"
                >
                  <path d="M12 2c2.8 2.2 3.8 6 3.5 9.3l2.5 2.5v2.2l-2.8-1.1-.9 2.7H9.7l-.9-2.7L6 16v-2.2l2.5-2.5C8.2 8 9.2 4.2 12 2zm0 3.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM10 18h4v3l-2-1.2L10 21v-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                Modern digital Infrastructure
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Built using scalable cloud native technologies and modern
              engineering practices.
            </p>
          </div>
        </div>

        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <Icon icon="ion:people" className="text-[#04A3DA] text-[30px]" />
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                AU-Ready Ecosystem
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Future focused architecture prepared for automation
              analytics, and AI powered workflows.
            </p>
          </div>
        </div>

        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 fill-[#04A3DA]"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                Secure &amp; Reliable
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Enterprise grade security and reliable infrastructure
              designed for long-term growth.
            </p>
          </div>
        </div>

        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                Cross Platform Accessibility
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Accessible across devices with responsive and mobile first
              experiences.
            </p>
          </div>
        </div>

        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                Cloud Native Scalability
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Designed to scale efficiently as products, teams, and
              businesses grow.
            </p>
          </div>
        </div>

        <div className="feature-card-outer">
          <div className="feature-card group bg-[#0F172A] border border-[#BDBDBDB0] p-6 md:p-8 flex flex-col items-start text-left">
            <div className="feature-card-header w-full">
              <div className="icon-wrap w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] shrink-0">
                <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
              </div>
              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                Built for Innovation
              </h3>
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
              Focused on solving real operational challenges with
              intelligent digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
