import { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function KeyFeaturesSection() {
  const kfSectionRef = useRef(null);

  useEffect(() => {
    const el = kfSectionRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.kf-card');
    const icons = el.querySelectorAll('.kf-icon-badge');
    cards.forEach(c => { c.style.animationPlayState = 'paused'; });
    icons.forEach(i => { i.style.animationPlayState = 'paused'; });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cards.forEach(c => { c.style.animationPlayState = 'running'; });
          icons.forEach(i => { i.style.animationPlayState = 'running'; });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-[5px] md:mt-0 lg:mt-0">
    <section className="px-4 max-w-[900px] mx-auto mb-6 md:mb-[80px] mt-[-25px]" id="key-feature-section" ref={kfSectionRef}>
      <div className="text-center mb-4">
        <p className="mb-3 font-semibold text-[16px] leading-[18px] tracking-[0px] text-center text-[#04A3DA]">
          KEY FEATURE DELIVERED
        </p>
        <h2 className="font-bold text-[44px] leading-[48px] tracking-[-0.5px] text-center">
          Features That <span className="text-sky-400">Drive</span> Business <span className="text-sky-400">Value</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6" style={{ perspective: '1000px' }}>
        {[
          { icon: 'mdi:robot-outline', title: 'AI-Powered Hiring Platform', desc: 'A performance-driven platform that aligns strategy, data, and results for quality hires.' },
          { icon: 'mdi:briefcase-outline', title: 'Employer Portal', desc: 'A dedicated experience built around employer needs and hiring goals.' },
          { icon: 'mdi:view-grid-plus-outline', title: 'Solutions Hub', desc: 'A structured Solutions section presenting HireRamp\'s offerings in one place.' },
          { icon: 'mdi:handshake-outline', title: 'Partners Program', desc: 'A dedicated space for partner engagement and collaboration.' },
          { icon: 'streamline:graph-bar-increase-solid', title: 'AI-Optimized Job Ads', desc: 'AI-powered bidding that helps employers get more from their job ad spend.' },
          { icon: 'mdi:calendar-check-outline', title: 'Demo Request Flow', desc: 'Clear "Get a Demo" calls-to-action that guide visitors toward conversion.' }
        ].map((item, i) => (
          <div key={i} className="kf-card bg-[#FFFFFF1A] border border-[#BDBDBDB0] rounded-2xl p-6">
            <div className="kf-icon-badge w-[50px] h-[50px] bg-[#B1E2F4] rounded-full flex items-center justify-center mb-4">
              <Icon icon={item.icon} style={{ color: '#04A3DA', fontSize: '26px' }} />
            </div>
            <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0px] mb-2">{item.title}</h3>
            <p className="font-normal text-[14px] leading-[16px] tracking-[0px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
