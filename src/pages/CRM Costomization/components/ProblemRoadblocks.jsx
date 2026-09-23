import React, { useEffect, useRef } from 'react';
import { Layers, Clock, AlertTriangle, Network, ArrowRight } from 'lucide-react';

export default function ProblemRoadblocks() {
  const roadblocks = [
    {
        "step": "01",
        "icon": "Layers",
        "title": "Sales Rep Resistance",
        "description": "Clunky default layouts and excessive required fields cause sales teams to avoid logging data."
    },
    {
        "step": "02",
        "icon": "Clock",
        "title": "Leads Slipping Away",
        "description": "Slow manual lead routing and lack of instant notification let inbound prospects go cold."
    },
    {
        "step": "03",
        "icon": "AlertTriangle",
        "title": "Disconnected Data Silos",
        "description": "Customer support, marketing, and sales systems operate without a unified customer record."
    },
    {
        "step": "04",
        "icon": "Network",
        "title": "Unreliable Forecasting",
        "description": "Inaccurate deal stages and lack of stage validation make revenue forecasts a guessing game."
    }
];

  const iconMap = {
    Layers,
    Clock,
    AlertTriangle,
    Network
  };

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    const cards = grid.querySelectorAll(".pr-step-card");

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("pr-heading-in");
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
              card.style.transitionDelay = `${i * 100}ms`;
              card.classList.add("pr-card-in");
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
    <section className="relative py-0 md:py-0 mt-0 md:mt-[-30px] lg:mt-0 lg:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        .pr-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .pr-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .pr-step-card {
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pr-card-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .pr-icon-pulse {
          animation: prIconPulse 2.6s ease-in-out infinite;
        }
        @keyframes prIconPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pr-heading-hidden, .pr-step-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .pr-icon-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div
          ref={headingRef}
          className="pr-heading-hidden text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-sky-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            THE PROBLEM WE SOLVE
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4">
            Your CRM Customization Has Potential. Let's{' '}
            <span className="text-[#04A3DA]">
              Remove the Roadblocks.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-left md:text-center lg:text-center text-slate-300 leading-relaxed">
            Off-the-shelf CRM configurations lead to sales rep frustration and lost leads. We tailor your CRM to match your exact sales process and automate administrative burdens.
          </p>
        </div>

        {/* 4 Cards in Horizontal Flow with Connectors */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 mt-[-35px] lg:mt-[-35px] md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative"
        >
          {roadblocks.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <div key={index} className="relative group">
                <div className="pr-step-card h-full hover:bg-slate-900 border border-slate-700 hover:border-sky-500/40 rounded-2xl p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10">

                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-start justify-between mb-3 space-y-4">
                    <div className="pr-icon-pulse text-sky-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-sky-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-xs lg:text-[14px] lg:mt-1 text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Connector (Visible only on desktop between cards) */}
                {index < roadblocks.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-sky-400 items-center justify-center pointer-events-none">
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
