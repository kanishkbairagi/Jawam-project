import React, { useEffect, useRef } from 'react';
import { X, Check, ArrowRight, Code2 } from 'lucide-react';

export default function BeforeAfter() {
  const beforePoints = [
    "Constrained by rigid off-the-shelf software workflows",
    "Skyrocketing monthly per-seat subscription costs",
    "Critical business data trapped in proprietary SaaS silos",
    "Clunky user interfaces that slow down daily staff productivity",
    "Inability to build custom competitive features your customers want",
    "Vulnerability to external pricing hikes and feature discontinuations"
];
  const afterPoints = [
    "100% bespoke software tailored precisely to your company operations",
    "Complete software ownership with zero recurring user license fees",
    "Full sovereignty and unhindered access to all company databases",
    "Streamlined, customized UI designed for rapid employee adoption",
    "Freedom to innovate and ship proprietary competitive capabilities",
    "Enterprise-grade IP that builds long-term enterprise valuation"
];

  const headingRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const row = rowRef.current;
    if (!heading || !row) return;

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("ba-heading-in");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    headingObserver.observe(heading);

    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const before = row.querySelector(".ba-before");
            const center = row.querySelector(".ba-center");
            const after = row.querySelector(".ba-after");
            const quote = row.querySelector(".ba-quote");

            if (before) { before.style.transitionDelay = "0ms"; before.classList.add("ba-in-left"); }
            if (center) { center.style.transitionDelay = "180ms"; center.classList.add("ba-in-pop"); }
            if (after) { after.style.transitionDelay = "300ms"; after.classList.add("ba-in-right"); }
            if (quote) { quote.style.transitionDelay = "450ms"; quote.classList.add("ba-in-fade"); }

            rowObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    rowObserver.observe(row);

    return () => {
      headingObserver.disconnect();
      rowObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-0 sm:py-16 md:py-0 pt-[70px] md:pt-[100px] lg:pt-[120px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        .ba-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .ba-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-before, .ba-after {
          opacity: 0;
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ba-before { transform: translateY(24px); }
        .ba-after { transform: translateY(24px); }
        @media (min-width: 768px) {
          .ba-before { transform: translateX(-36px); }
          .ba-after { transform: translateX(36px); }
        }
        .ba-in-left, .ba-in-right {
          opacity: 1;
          transform: translate(0);
        }
        .ba-center {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ba-in-pop {
          opacity: 1;
          transform: scale(1);
        }
        .ba-quote {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .ba-in-fade {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-node-pulse {
          animation: baNodePulse 2.6s ease-in-out infinite;
        }
        @keyframes baNodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.25); }
          50% { box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-heading-hidden, .ba-before, .ba-after, .ba-center, .ba-quote {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .ba-node-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div
          ref={headingRef}
          className="ba-heading-hidden text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-sky-400 text-[11px] md:text-xs lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2">
            FROM CHALLENGES TO CONFIDENCE
          </p>
          <h2 className="text-[22px] leading-[28px] sm:text-3xl md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[40px] md:mt-6 font-extrabold text-white tracking-tight">
            A Clearer Path From{' '}
            <span className="text-[#38BDF8]">
              Custom Software Challenges to Real Business Value
            </span>
          </h2>
        </div>

        {/* Layout: Before → Center → After → Quote */}
        <div ref={rowRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-4 items-stretch">

          {/* Main Comparison Area (Before + Transition + After) */}
          <div className="md:col-span-9 grid mt-0 md:mt-[-25px] grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4 md:gap-3 items-stretch md:items-center">

            {/* Before Card */}
            <div className="ba-before md:col-span-5 h-full border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-red-500/30 hover:-translate-y-1">
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                  <X className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-[20px] font-bold text-white">Before</span>
              </div>

              <ul className="space-y-2 sm:space-y-2.5">
                {beforePoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] sm:text-[16px] text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Transition Node */}
            <div className="ba-center md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2 py-1 md:py-0">
              <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0" strokeWidth={2.5} />

              <div className="flex flex-col items-center text-center px-1">
                <div className="ba-node-pulse w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center mb-2 sm:mb-2.5">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight mb-1 sm:mb-1.5 whitespace-nowrap md:whitespace-normal">
                  Custom<br />Software
                </div>
                <div className="hidden sm:block text-[11px] sm:text-[12px] text-slate-400 leading-snug">
                  Turning constraints into<br />proprietary moats
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0" strokeWidth={2.5} />
            </div>

            {/* After Card */}
            <div className="ba-after md:col-span-5 h-full lg:mt-0 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-[16px] font-bold text-white">After</span>
              </div>

              <ul className="space-y-2 sm:space-y-2.5">
                {afterPoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] sm:text-[16px] text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Quote Box */}
          <div className="md:col-span-3 flex md:h-[200px]">
            <div className="ba-quote w-full border border-slate-700 rounded-2xl p-5 flex flex-col justify-center transition-all duration-300 hover:border-sky-500/30">
              <div className="text-4xl leading-none text-slate-600 font-serif mb-3">&ldquo;</div>
              <p className="text-sm text-slate-200 lg:mt-[-15px] font-medium leading-relaxed mb-4 sm:mb-5">
                When your software is tailored to your business, your unique operational efficiency becomes an unbeatable moat.
              </p>
              <div className="text-xs text-slate-400">— Jawam Infotech</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
