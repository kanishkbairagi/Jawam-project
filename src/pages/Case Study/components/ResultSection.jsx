import { useRef, useEffect } from 'react';

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

  useEffect(() => {
    const el = resultSectionRef.current;
    if (!el) return;
    const counters = el.querySelectorAll('.result-counter');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(c => {
            const target = parseInt(c.getAttribute('data-target'), 10);
            const duration = 1400;
            const startTime = performance.now();
            function tick(now) {
              const progress = Math.min((now - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              c.textContent = Math.round(eased * target);
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 max-w-[1100px] mx-auto md:mb-[80px] mb-[0px] mt-0 md:mt-[-25px]" id="result-section" ref={resultSectionRef}>
      <div className="bg-[#08132533] border border-[#BDBDBDB0] rounded-3xl p-8 md:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/5">
            <p className="result-text result-label mb-3 font-semibold text-[16px] leading-[18px] tracking-[0px] text-[#04A3DA]">
              RESULT & IMPACT
            </p>
            <h2 className="result-text result-heading font-bold text-[44px] leading-[48px] tracking-[-0.5px] mb-4">
              The <span className="text-sky-400">Impact</span> we Delivered
            </h2>
            <p className="result-text result-desc font-normal text-[16px] leading-[20px] tracking-[-0.5px] text-[#E7E8EA]">
              The new website not only improved the visual appeal but also enhanced user engagement and business outcomes.
            </p>
          </div>
          <div className="w-full lg:w-3/5 mt-[-10px] md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              {[
                { target: 65, label: 'Increase in User Engagement' },
                { target: 40, label: 'Increase in enquiry submissions' },
                { target: 100, label: 'Mobile Responsive Experience' },
                { target: 35, label: 'Improvement in page load speed' }
              ].map((item, i) => (
                <div key={i}
                  className="result-card relative bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#BDBDBDB0] p-5"
                  style={{ borderRadius: '24px 4px 24px 4px' }}
                >
                  <p className="font-bold text-[28px] md:text-[32px] leading-[36px] text-sky-400 mb-1">
                    <span className="result-counter" data-target={item.target}>0</span>%
                  </p>
                  <p className="font-semibold text-[14px] leading-[16px] tracking-[0px] text-[#B5B7BD]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
