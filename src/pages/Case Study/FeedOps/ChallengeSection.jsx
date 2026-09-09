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

  const challenges = [
    { icon: 'mdi:database-alert-outline', label: 'Product data scattered across ERPs, PIMs & supplier feeds' },
    { icon: 'mdi:close-octagon-outline', label: 'Feed errors causing disapprovals and low visibility' },
    { icon: 'mdi:pencil-off-outline', label: 'Manual work optimizing titles & descriptions per channel' },
    { icon: 'mdi:account-question-outline', label: 'No single team accountable for feed health' },
    { icon: 'mdi:chart-timeline-variant', label: 'Hard to scale across multiple advertising channels' },
    { icon: 'mdi:speedometer', label: 'Difficult to measure channel performance' },
  ];

  return (
    <section className="px-4 max-w-[1200px] mx-auto md:mb-[80px] mb-[45px] mt-0 md:mt-[-25px]" id="challenge-section" ref={challengeSectionRef}>
      <div className="text-center mb-8">
        <p className="mb-3 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA] uppercase">
          THE CHALLENGE
        </p>
        <h2 className="font-bold md:text-[44px] text-[10px] leading-[48px] tracking-[-0.5px] text-center">
          What <span className="text-sky-400">Problem</span> we solved?
        </h2>
      </div>

      <div className="bg-[linear-gradient(277.37deg,rgba(230,246,251,0.2)_1.45%,rgba(177,226,244,0.2)_99.6%)] border border-[#BDBDBDB0] mt-[-15px] md:mt-[-10px] rounded-2xl p-6 md:p-6">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          {challenges.map((item, i) => (
            <div key={i} className="flex flex-col items-start text-left flex-1 gap-3 md:gap-6">
              <div className={`challenge-icon-wrap challenge-icon-delay-${i}`}>
                <Icon icon={item.icon} style={{ color: '#04A3DA', fontSize: '38px' }} />
              </div>
              <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
