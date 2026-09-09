import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import '../services.css';

export default function WhyJoinUs() {
  const steps = [
    {
      number: '01',
      title: 'Requirement Analysis',
      desc: 'Identifying integration needs.',
      icon: 'icon-park-outline:file-search',
    },
    {
      number: '02',
      title: 'API Assessment',
      desc: 'Checking compatibility and feasibility.',
      icon: 'icon-park-outline:check-correct',
    },
    {
      number: '03',
      title: 'Secure Integration',
      desc: 'Payment, CRM, ERP, SMS, Email APIs.',
      icon: 'icon-park-outline:link-cloud',
    },
    {
      number: '04',
      title: 'Data Synchronization',
      desc: 'Smooth information exchange.',
      icon: 'icon-park-outline:refresh',
    },
    {
      number: '05',
      title: 'Error Handling',
      desc: 'Preventing failures and downtime.',
      icon: 'icon-park-outline:caution',
    },
    {
      number: '06',
      title: 'Maintenance & Monitoring',
      desc: 'Continuous API performance tracking.',
      icon: 'icon-park-outline:chart-histogram-two',
    },
  ];

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    const cards = grid.querySelectorAll(".tp-step-card");

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("tp-heading-in");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    headingObserver.observe(heading);

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.transitionDelay = `${i * 90}ms`;
              card.classList.add("tp-card-in");
            });
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    gridObserver.observe(grid);

    return () => {
      headingObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  return (
    <div className="mt-[-170px] md:mt-[-200px] lg:mt-0">
      <style>{`
        .tp-heading-hidden {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .tp-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .tp-step-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .tp-card-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="max-w-[950px] mx-auto mt-[-50px] md:mt-10 lg:mt-[-150px] mb-10 md:mb-0 lg:mb-0 px-4">
        <div
          ref={headingRef}
          className="tp-heading-hidden lg:max-w-6xl mx-auto text-center mb-3"
        >
          <h1 className="font-semibold text-[32px] sm:text-[44px] lg:text-[58px] leading-[38px] sm:leading-[54px] lg:leading-[80px] tracking-[-0.5px] text-center">
            Third-party <span className="text-sky-400">Integration</span>
          </h1>
          <p className="font-semibold mt-[10px] md:mt-0 lg:mt-0 text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] tracking-[0] text-center mb-4">
            We are turning visions into reality through expert software craftsmanship
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="w-12 h-px bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="w-12 h-px bg-white/20"></span>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:max-w-[700px] lg:max-w-[920px] md:mx-auto sm:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6 gap-3 mt-[-15px] md:mt-[-15px] lg:mt-0"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="tp-step-card group border border-[#BDBDBDB0] rounded-2xl p-6 
                transition-all duration-300 ease-out will-change-transform
                hover:bg-[#1E293B] hover:border-[#04A3DA] hover:-translate-y-3 hover:shadow-lg hover:shadow-[#04A3DA]/10"
            >
              <div className="flex items-center justify-between mb-4">
                {/* Icon wrapper rotates 360deg on card hover */}
                <div className="w-9 h-9 rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0 transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]">
                  <Icon icon={step.icon} style={{ color: "#04A3DA", fontSize: "22px" }} />
                </div>
                <span className="text-sky-400 font-bold text-[15px]">{step.number}</span>
              </div>

              <h3 className="font-semibold text-[20px] leading-[24px] tracking-[0] mb-4">
                {step.title}
              </h3>

              <p className="font-normal text-[14px] leading-[16px] tracking-[0] text-white">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}