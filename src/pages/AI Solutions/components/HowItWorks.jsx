import { Icon } from "@iconify/react";

export default function Process() {
  const steps = [
    { icon: "icon-park-outline:brain", size: 34, text: "Understand Business Needs" },
    { icon: "fluent-mdl2:design", size: 26, text: "AI Strategy & Solution Design" },
    { icon: "fluent-mdl2:build-definition", size: 26, text: "Build & Train AI Model" },
    { icon: "mingcute:rocket-line", size: 34, text: "Integrate and Deploy" },
    { icon: "uil:arrow-growth", size: 34, text: "Optimize & Scale" },
  ];

  return (
    <div className="lg:mt-[25px] mt-[50px] md:mt-0">
    <div className="mt-[-40px] sm:mt-[-70px] md:mt-[100px] lg:mt-[100px]">
      <section className="py-8 sm:py-12 md:py-20 px-4 max-w-[1200px] mx-auto mt-[-60px] sm:mt-[-90px] md:mt-[-125px] mb-0">
        <div className="relative overflow-hidden rounded-3xl bg-[#091D3E] px-4 py-8 sm:px-8 sm:py-10 md:p-10 text-center shadow-2xl">

          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#04A3DA] opacity-20 blur-[80px] pointer-events-none"></div>
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#04A3DA] opacity-20 blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10">
            <p className="mb-2 font-semibold text-[14px] sm:text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA]">
              HOW IT WORKS?
            </p>
            <h2 className="section-heading font-bold text-[22px] sm:text-[34px] md:text-[36px] lg:text-[44px] leading-[28px] sm:leading-[40px] md:leading-[42px] lg:leading-[48px] tracking-[-0.5px] text-center">
              Our <span className="text-sky-400">AI</span> Development <span className="text-sky-400">Process</span>
            </h2>
          </div>

          {/* Mobile: 2-col wrapped grid. sm/md: wrapped, centered rows. lg: single row of 5 */}
          <div className="relative z-10 flex flex-wrap justify-center gap-y-6 gap-x-4 sm:gap-y-8 sm:gap-x-6 md:gap-x-10 lg:gap-x-0 lg:flex-nowrap">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-[45%] sm:w-[45%] md:w-[28%] lg:w-auto lg:flex-1"
              >
                <span className="step-number text-sky-400 font-extrabold text-xl sm:text-2xl lg:text-3xl mb-2">
                  {i + 1}
                </span>
                <div className="step-circle w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-blue-600 mb-3 bg-white shrink-0">
                  <Icon icon={step.icon} style={{ color: "#04A3DA", fontSize: `${step.size}px` }} />
                </div>
                <p className="step-text text-white text-sm sm:text-base max-w-[220px] md:max-w-[180px] lg:max-w-none">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
    </div>
  );
}