import { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

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

export default function ChallengeSection() {
  const challengeSectionRef = useRef(null);

  useIntersectionAnimation(challengeSectionRef, '.challenge-icon-wrap');

  return (
    <section className="px-4 max-w-[1200px] mx-auto md:mb-[80px] mb-[45px] mt-0 md:mt-[-25px]" id="challenge-section" ref={challengeSectionRef}>
      <div className="text-center mb-8">
        <p className="mb-3 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA] uppercase">
          THE CHALLENGE
        </p>
        <h2 className="font-bold md:text-[44px] text-[10px] leading-[48px] tracking-[-0.5px] text-center">
          What <span className="text-sky-400">Problem</span> we faced?
        </h2>
      </div>

      <div className="bg-[linear-gradient(277.37deg,rgba(230,246,251,0.2)_1.45%,rgba(177,226,244,0.2)_99.6%)] border border-[#BDBDBDB0] mt-[-15px] md:mt-[-10px] rounded-2xl p-6 md:p-6">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-0">
              <Icon icon="clarity:design-solid" style={{color: '#04A3DA', fontSize: '38px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Outdated visual design and branding
            </p>
          </div>

          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-1">
              <Icon icon="clarity:mobile-solid" style={{color: '#04A3DA', fontSize: '38px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Poor mobile responsiveness
            </p>
          </div>

          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-2">
              <Icon icon="bitcoin-icons:tree-structure-filled" style={{color: '#04A3DA', fontSize: '40px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Confusing navigation structure
            </p>
          </div>

          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-3">
              <Icon icon="streamline:graph-bar-decrease-solid" style={{color: '#04A3DA', fontSize: '38px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Low user engagement
            </p>
          </div>

          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-4">
              <Icon icon="mdi:account-service" style={{color: '#04A3DA', fontSize: '38px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Lack of clear service presentation
            </p>
          </div>

          <div className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
            <div className="challenge-icon-wrap challenge-icon-delay-5">
              <Icon icon="mingcute:sad-line" style={{color: '#04A3DA', fontSize: '38px'}} />
            </div>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
              Inconsistent user experience across pages
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
