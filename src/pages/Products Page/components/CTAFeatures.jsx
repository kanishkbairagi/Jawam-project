import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

export default function CTAFeatures() {
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
    <div class="mt-[0px] md:mt-[-40px] md:lg-[50px]">
    <section
      className="px-0 md:px-4 lg:px-4 lg:max-w-[1000px] md:max-w-[650px] mt-[0px] md:mt-[-40px] lg:mt-[90px] mx-auto mb-[40px] md:mb-[80px]"
      id="cta-features-section"
    >
      <div
        ref={ctaFeaturesRowRef}
        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 md:mb-10 lg:mb-10 mb-8"
        id="cta-features-row"
      >
        <div className="cta-feature-item flex items-center gap-3 flex-1">
          <Icon icon="mdi:secure-outline" style={{ color: "#04A3DA", fontSize: "38px" }} />
          <div className="text-left">
            <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal mb-1">
              Secure &amp; Reliable
            </h3>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0px]">
              Your data is safe with us
            </p>
          </div>
        </div>

        <div className="cta-feature-divider hidden md:block w-[2px] rounded-2xl h-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)]"></div>

        <div className="cta-feature-item flex items-center gap-3 flex-1 md:pl-6">
          <Icon icon="mingcute:rocket-line" style={{ color: "#04A3DA", fontSize: "38px" }} />
          <div className="text-left">
            <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal mb-1">
              Built for growth
            </h3>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0px]">
              Scalable for your business
            </p>
          </div>
        </div>

        <div className="cta-feature-divider hidden md:block w-[2px] rounded-2xl h-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)]"></div>

        <div className="cta-feature-item flex items-center gap-3 flex-1 md:pl-8">
          <Icon icon="bx:support" style={{ color: "#04A3DA", fontSize: "38px" }} />
          <div className="text-left">
            <h3 className="font-semibold text-[20px] leading-[24px] tracking-normal mb-1">
              Language Support
            </h3>
            <p className="font-normal text-[16px] leading-[18px] tracking-[0px]">
              Support in Hindi &amp; English.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
