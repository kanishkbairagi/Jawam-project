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
    <div class="mt-[5px] md:mt-0 lg:mt-0">
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
          { icon: 'clarity:mobile-solid', title: 'Modern & Responsive Design', desc: 'A seamless experience across desktop, tablet, and mobile devices.' },
          { icon: 'bitcoin-icons:tree-structure-filled', title: 'Improved Navigation & User Flow', desc: 'Simplified navigation structure for faster access to key information.' },
          { icon: 'carbon:ibm-cloud-direct-link-1-dedicated-hosting', title: 'Dedicated Service & Industry Pages', desc: 'Organized content tailored to specific services and business sectors.' },
          { icon: 'clarity:mobile-solid', title: 'Enhanced Mobile Experience', desc: 'All data encrypted and securely stored on the cloud.' },
          { icon: 'carbon:touch-interaction', title: 'Interactive Animations & Micro-Interactions', desc: 'Subtle animations that improve engagement and user experience.' },
          { icon: 'ri:seo-fill', title: 'SEO-Friendly Structure', desc: 'Built with best practices to improve visibility and search performance.' }
        ].map((item, i) => (
          <div key={i} className="kf-card bg-[#FFFFFF1A] border border-[#BDBDBDB0] rounded-2xl p-6">
            <div className="kf-icon-badge w-[50px] h-[50px] bg-[#B1E2F4] rounded-full flex items-center justify-center mb-4">
              <Icon icon={item.icon} style={{ color: '#04A3DA', fontSize: item.icon === 'ri:seo-fill' ? '24px' : '28px' }} />
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
