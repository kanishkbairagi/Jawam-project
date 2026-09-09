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
          { icon: 'mdi:database-sync-outline', title: 'Source Integration', desc: 'Connects ecommerce platforms, ERPs, PIMs, supplier feeds & APIs into one place.' },
          { icon: 'mdi:robot-outline', title: 'AI-Powered Enrichment', desc: 'Custom AI agents optimize titles, descriptions, and extract product attributes.' },
          { icon: 'mdi:cog-transfer-outline', title: 'Feed Transformation', desc: 'Rules-based restructuring of product data to meet channel requirements.' },
          { icon: 'mdi:share-variant-outline', title: 'Multi-Channel Syndication', desc: 'Channel-specific feeds for Google Shopping, Meta, Amazon, TikTok & more.' },
          { icon: 'mdi:clipboard-check-outline', title: 'Feed Health Management', desc: 'Monitors delivery and eligibility, and resolves product disapprovals.' },
          { icon: 'mdi:account-tie-outline', title: 'Managed Services', desc: 'A dedicated Account Manager plus specialist team handles day-to-day operations.' }
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
