import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import '../services.css';

export default function WhyJoinUs() {
  const steps = [
    {
      number: '01',
      title: 'Talent Requirement Analysis',
      desc: 'Understanding project needs.',
      icon: 'icon-park-outline:file-search',
    },
    {
      number: '02',
      title: 'Candidate Matching',
      desc: 'Skilled resource selection.',
      icon: 'icon-park-outline:check-correct',
    },
    {
      number: '03',
      title: 'Fast Onboarding',
      desc: 'Quick team integration.',
      icon: 'icon-park-outline:rocket',
    },
    {
      number: '04',
      title: 'Flexible Scaling',
      desc: 'Expand or reduce team size.',
      icon: 'icon-park-outline:full-screen-one',
    },
    {
      number: '05',
      title: 'Performance Monitoring',
      desc: 'Ensuring productivity.',
      icon: 'icon-park-outline:chart-line',
    },
    {
      number: '06',
      title: 'Ongoing Support',
      desc: 'Long-term engagement.',
      icon: 'icon-park-outline:headset',
    },
  ];

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    const cards = grid.querySelectorAll(".staff-step-card");

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("staff-heading-in");
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
              card.classList.add("staff-card-in");
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
        .staff-heading-hidden {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .staff-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .staff-step-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .staff-card-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="max-w-[950px] mx-auto mt-[-50px] md:mt-10 lg:mt-[-150px] mb-10 md:mb-0 lg:mb-0 px-4">
        <div
          ref={headingRef}
          className="staff-heading-hidden lg:max-w-6xl mx-auto text-center mb-3"
        >
          <h1 className="font-semibold text-[32px] sm:text-[44px] lg:text-[58px] leading-[38px] sm:leading-[54px] lg:leading-[80px] tracking-[-0.5px] text-center">
            IT Staff <span className="text-sky-400">Augmentation</span>
          </h1>
          <p className="font-semibold mt-[10px] md:mt-0 lg:mt-0 text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] tracking-[0] text-center mb-4">
            We are turning visions into reality through expert software craftsmanship
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-px bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span className="w-12 h-px bg-white/20"></span>
          </div>

          {/* Read More button */}
          <div className="flex justify-end max-w-[700px] lg:max-w-[920px] mx-auto mb-3 md:mb-4 px-1">
            <Link
              to="/it-staff-augmentation-services"
              className="group inline-flex mb-4 md:mb-4 lg:mb-1  items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 no-underline"
            >
              <span> Explore Details</span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:max-w-[700px] lg:max-w-[920px] md:mx-auto sm:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-6 gap-3 mt-[-15px] md:mt-[-15px] lg:mt-0"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="staff-step-card group border border-[#BDBDBDB0] rounded-2xl p-6 
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