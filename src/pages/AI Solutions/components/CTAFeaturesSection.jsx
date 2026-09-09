import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

export default function CTAFeaturesSection() {
  const ctaFeaturesRowRef = useRef(null);

  useEffect(() => {
    const row = ctaFeaturesRowRef.current;
    if (!row) return;

    const animated = row.querySelectorAll(".cta-feature-item, .cta-feature-divider");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animated.forEach((el) => {
              el.style.animationPlayState = "running";
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(row);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="block md:hidden lg:block">
      <section
        className="px-4 md:px-4 lg:px-4 lg:max-w-[1050px] md:max-w-[650px] mx-auto py-8 md:py-10"
        id="cta-features-section"
      >
        <div
          ref={ctaFeaturesRowRef}
          className="flex flex-col md:flex-row  items-center md:items-center justify-between gap-6 md:gap-4 mb-6 md:mb-10"
          id="cta-features-row"
        >
          <div className="cta-feature-item flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 flex-1 text-center md:text-left">
            <Icon
              icon="solar:scale-line-duotone"
              className="text-[36px] md:text-[48px] lg:text-[38px]"
              style={{ color: "#04A3DA" }}
            />
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[15px] sm:text-[17px] md:text-[20px] leading-[19px] md:leading-[24px] tracking-normal mb-1 text-white">
                Scalable AI Solutions
              </h3>
              <p className="font-normal text-[12px] sm:text-[13px] md:text-[16px] leading-[15px] md:leading-[18px] tracking-[0px] text-gray-300">
                Built to grow with your business needs.
              </p>
            </div>
          </div>

          <div className="cta-feature-divider hidden md:block w-[2px] rounded-2xl h-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)]"></div>

          <div className="cta-feature-item flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 flex-1 md:pl-6 text-center md:text-left">
            <Icon icon="mdi:secure-outline" className="text-[36px] md:text-[48px] lg:text-[38px]" style={{ color: "#04A3DA" }} />
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[15px] sm:text-[17px] md:text-[20px] leading-[19px] md:leading-[24px] tracking-normal mb-1 text-white">
                Secure &amp; Compliant
              </h3>
              <p className="font-normal text-[12px] sm:text-[13px] md:text-[16px] leading-[15px] md:leading-[18px] tracking-[0px] text-gray-300">
                Enterprise-grade security and data protection.
              </p>
            </div>
          </div>

          <div className="cta-feature-divider hidden md:block w-[2px] rounded-2xl h-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)]"></div>

          <div className="cta-feature-item flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-3 flex-1 md:pl-8 text-center md:text-left">
            <Icon icon="mdi:tick-circle-outline" className="text-[36px] md:text-[48px] lg:text-[38px]" style={{ color: "#04A3DA" }} />
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-[15px] sm:text-[17px] md:text-[20px] leading-[19px] md:leading-[24px] tracking-normal mb-1 text-white">
                Result Driven Approach
              </h3>
              <p className="font-normal text-[12px] sm:text-[13px] md:text-[16px] leading-[15px] md:leading-[18px] tracking-[0px] text-gray-300">
                Focused on measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
