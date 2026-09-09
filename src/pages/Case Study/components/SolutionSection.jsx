import { useRef, useEffect } from 'react';
import caseImg from '../../../assets/case.webp';

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

export default function SolutionSection() {
  const solutionSectionRef = useRef(null);

  useIntersectionAnimation(solutionSectionRef, '.solution-img, .solution-text, .solution-check-item');

  return (
    <section className="px-4 max-w-[1100px] mx-auto mb-[50px] md:mb-[80px] mt-0 md:mt-[-25px]" id="solution-section" ref={solutionSectionRef}>
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-full lg:w-1/2 solution-img">
          <div className="solution-img-wrap">
            <img src={caseImg} alt="Website design preview on laptop" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="solution-text solution-label mb-2 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA]">
            OUR SOLUTION
          </p>
          <h2 className="solution-text solution-heading font-bold text-[44px] leading-[48px] tracking-[-0.5px] mb-3">
            How we <span className="text-sky-400">Solved</span> it?
          </h2>
          <p className="solution-text solution-desc font-normal text-[16px] leading-[16px] tracking-[0px] mb-5">
            We redesigned the website with a modern, user-focused approach that improves usability, strengthens brand identity, and drives conversions.
          </p>
          <ul className="space-y-2.5">
            {[
              'Complete UI/UX redesign',
              'Improved information architecture',
              'Mobile-first responsive design',
              'Modern visual branding',
              'Service-focused content structure',
              'Interactive user experience',
              'Optimized call-to-action placements',
              'Performance and accessibility improvements'
            ].map((text, i) => (
              <li key={i} className="solution-check-item flex items-center gap-2.5">
                <span className="solution-check-badge flex items-center justify-center w-5 h-5 rounded-full bg-sky-400 shrink-0">
                  <svg className="w-3 h-3 text-[#0F172A]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </span>
                <span className="font-normal text-[14px] leading-[16px] tracking-[0px]">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
