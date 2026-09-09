import { useRef, useEffect } from 'react';
import hirerampplatform from '../../../assets/hirerampplatform.webp';

function useIntersectionAnimation(ref, selector, threshold = 0.2) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(selector);
    targets.forEach(t => { t.style.animationPlayState = 'paused'; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(selector).forEach(t => {
            t.style.animationPlayState = 'running';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, selector, threshold]);
}

export default function ProjectOverview() {
  const poSectionRef = useRef(null);

  useIntersectionAnimation(poSectionRef, '.po-animate');

  return (
    <section className="max-w-[1100px] mx-auto md:mb-[80px] mb-6 mt-[15px] md:mt-[-250px] lg:mt-[-160px]" id="project-overview" ref={poSectionRef}>
      <div className="border border-[#BDBDBDB0] rounded-3xl p-6 md:p-10 lg:px-10 lg:py-6">
        <div className="flex flex-col lg:flex-row md:gap-8 gap-4 items-center lg:px-[25px]">
          <div className="w-full lg:w-1/2">
            <p className="po-animate po-delay-1 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA] mb-2 md:mb-6">
              PROJECT OVERVIEW
            </p>
            <h2 className="po-animate po-delay-2 font-bold text-[44px] leading-[48px] tracking-[-0.5px] mb-2 md:mb-6">
              HireRamp <span className="text-sky-400">AI</span>
            </h2>
      <p className="po-animate po-delay-3 font-normal text-[16px] leading-[26px] tracking-[-0.5px]">
  HireRamp AI is an AI-powered hiring platform built to connect every part of the hiring process, bringing strategy, data, and results together to help employers make quality hires. The site is structured around three core journeys: Employers, Solutions, and Partners, with AI-optimized job ad performance and measurable results at its core.
</p>
          </div>
          <div className="w-full lg:w-1/2 po-animate po-delay-4">
            <div className="po-image-wrap">
              <img src={hirerampplatform} alt="HireRamp AI hiring platform" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
