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

export default function ResultSection() {
  const resultSectionRef = useRef(null);

  useIntersectionAnimation(resultSectionRef, '.result-text, .result-card');

const metrics = [
  { icon: 'mdi:chart-line', label: 'Optimized Hiring Spend' },
  { icon: 'mdi:message-reply-text-outline', label: 'Improvement in Response Rate' },
  { icon: 'mdi:account-star-outline', label: 'Increase in Quality of Hire' },
];

  return (
    <section className="px-4 max-w-[1100px] mx-auto md:mb-[80px] mb-[0px] mt-0 md:mt-[-25px]" id="result-section" ref={resultSectionRef}>
      <div className="bg-[#08132533] border border-[#BDBDBDB0] rounded-3xl p-8 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/5">
            <p className="result-text result-label mb-3 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA]">
              RESULT & IMPACT
            </p>
            <h2 className="result-text result-heading font-bold text-[44px] leading-[48px] tracking-[-0.5px] mb-4">
              The <span className="text-sky-400">Metrics</span> it Tracks
            </h2>
            <p className="result-text result-desc font-normal text-[16px] leading-[20px] tracking-[-0.5px] text-[#E7E8EA]">
              HireRamp AI is built around three performance metrics that keep hiring accountable like- from ad spend to candidate response to hire quality.
            </p>
          </div>
          <div className="w-full lg:w-3/5 mt-[-10px] md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((item, i) => (
                <div key={i}
                  className="result-card relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#BDBDBDB0] p-5 flex flex-col items-start gap-3"
                  style={{ borderRadius: '24px 4px 24px 4px' }}
                >
                  <div className="w-[42px] h-[42px] bg-[#B1E2F4] rounded-full flex items-center justify-center">
                    <Icon icon={item.icon} style={{ color: '#0F172A', fontSize: '22px' }} />
                  </div>
                  <p className="font-semibold text-[14px] leading-[18px] tracking-[0px] text-[#B5B7BD]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
