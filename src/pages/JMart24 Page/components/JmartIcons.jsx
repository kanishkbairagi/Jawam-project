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

  const features = [
    { icon: 'solar:bill-list-bold', title: 'Smart Billing', desc: 'Create invoice in seconds' },
    { icon: 'material-symbols-light:box-rounded', title: 'Stock Tracking', desc: 'Real-time inventory management' },
    { icon: 'fluent:people-12-filled', title: 'Customer Records', desc: 'Manage customer & purchase history' },
    { icon: 'streamline:graph-bar-increase-solid', title: 'Sales Dashboard', desc: 'Track sales and growth at a glance' },
    { icon: 'mdi:bell', title: 'Low Stock Alerts', desc: 'Get notifies before stock runs out' },
    { icon: 'lets-icons:export-fill', title: 'Export Reports', desc: 'Download reports in PDF/Excel' },
  ];

  return (
    <div class="mt-[-15px] md:mt-[-25px] lg:mt-10 ">
    <section className="px-4 max-w-[1130px] mx-auto md:mb-[80px] mb-[25px] " id="challenge-section" ref={challengeSectionRef}>
      <div className="bg-[linear-gradient(277.37deg,rgba(230,246,251,0.2)_1.45%,rgba(177,226,244,0.2)_99.6%)] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-6">
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-start md:justify-between gap-6 md:gap-12">
          {features.map((feature, i) => (
            <div key={feature.title} className="font-semibold text-[16px] leading-[18px] tracking-[0]">
              <div className={`challenge-icon-wrap challenge-icon-delay-${i}`}>
                <Icon icon={feature.icon} className="w-[38px] h-[38px] text-sky-400 mb-4" />
              </div>
              <h3 className="font-bold text-[15px] md:text-[16px] leading-[18px] text-white mb-4">
                {feature.title}
              </h3>
              <p className="font-normal text-[14px] leading-[14px] tracking-[0] text-white mt-[-13px] md:mt-0 lg:mt-0">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}