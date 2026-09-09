import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

export default function Features() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".whyai-card-outer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("whyai-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:mt-[100px] mt-[100px] md:mt-0 mb-0 ">
      <div className="lg:mt-[100px] mt-[50px] md:mt-[200px]">
        <style>
          {`
            .whyai-card-outer {
              opacity: 0;
              transform: translateY(30px) scale(0.96);
              height: 100%;
            }

            .whyai-card-outer.whyai-in {
              animation: whyaiRise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }

            @keyframes whyaiRise {
              0% {
                opacity: 0;
                transform: translateY(30px) scale(0.96);
              }
              60% {
                opacity: 1;
                transform: translateY(-4px) scale(1.01);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .whyai-card {
              position: relative;
              overflow: hidden;
              height: 100%;
              transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
            }

            .whyai-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 40px rgba(4, 163, 218, 0.2);
              border-color: rgba(4, 163, 218, 0.6);
            }

            .whyai-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at 30% 20%, rgba(4, 163, 218, 0.15), transparent 60%);
              opacity: 0;
              transition: opacity 0.35s ease;
              pointer-events: none;
            }

            .whyai-card:hover::before {
              opacity: 1;
            }

            .whyai-header {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 14px;
              margin-bottom: 12px;
              width: 100%;
            }

            .whyai-icon {
              transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.35s ease;
            }

            .whyai-card:hover .whyai-icon {
              transform: scale(1.12) rotate(-6deg);
            }

            .whyai-title {
              transition: color 0.3s ease;
            }

            .whyai-card:hover .whyai-title {
              color: #38bdf8;
            }

            .whyai-desc {
              line-height: 1.5;
              opacity: 0.85;
            }
          `}
        </style>

        <section
          className="why-hire-section py-10 md:py-0 lg:py-0 px-4 max-w-[900px] mx-auto mt-[-50px] md:mt-[-150px] lg:mt-0 mb-[40px] md:mb-16 lg:mt-[80px]"
          id="ai-why-choose-section"
        >
          <div className="text-center mb-12 md:mb-4 lg:mb-8">
            <p className="font-semibold text-[16px] leading-[18px] tracking-[0] text-center text-[#04A3DA] mb-4">
              WHY CHOOSE JAWAM FOR AI?
            </p>
            <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[44px] leading-[34px] md:leading-[42px] lg:leading-[48px] tracking-[-0.5px] text-center">
              Helping businesses work{" "}
              <span className="text-sky-400">Smarter with AI</span>
            </h2>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8 mt-0 md:mt-[-10px] lg:mt-0 items-stretch"
          >
            <div className="whyai-card-outer" style={{ animationDelay: "0s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#04A3DA"
                      className="w-10 h-10"
                    >
                      <path d="M12 2c2.8 2.2 3.8 6 3.5 9.3l2.5 2.5v2.2l-2.8-1.1-.9 2.7H9.7l-.9-2.7L6 16v-2.2l2.5-2.5C8.2 8 9.2 4.2 12 2zm0 3.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM10 18h4v3l-2-1.2L10 21v-3z" />
                    </svg>
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    Custom Build
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  No off the shelf tools. Built for your needs.
                </p>
              </div>
            </div>

            <div className="whyai-card-outer" style={{ animationDelay: "0.1s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <Icon icon="ion:people" className="text-[#04A3DA] text-[30px]" />
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    Fast Delivery
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  MVP in 4-6 weeks. See results early.
                </p>
              </div>
            </div>

            <div className="whyai-card-outer" style={{ animationDelay: "0.2s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 fill-[#04A3DA]"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    India-Focused
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  We understand Indian business, Regulations &amp; budgets.
                </p>
              </div>
            </div>

            <div className="whyai-card-outer" style={{ animationDelay: "0.3s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    Data Privacy First
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  Your data stays yours. We follow strict security protocols.
                </p>
              </div>
            </div>

            <div className="whyai-card-outer" style={{ animationDelay: "0.4s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    End-to-End Support
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  From ideas to deployment and beyond we are with you.
                </p>
              </div>
            </div>

            <div className="whyai-card-outer" style={{ animationDelay: "0.5s" }}>
              <div className="whyai-card bg-[#0F172A] border border-[#BDBDBDB0] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left">
                <div className="whyai-header">
                  <div className="whyai-icon w-[50px] h-[50px] rounded-full bg-[#B1E2F4] flex items-center justify-center shrink-0">
                    <Icon icon="mdi:flash" className="text-[#04A3DA] text-[30px]" />
                  </div>
                  <h3 className="whyai-title font-semibold text-[20px] leading-[24px] tracking-[0px] text-white">
                    Cost Effective
                  </h3>
                </div>
                <p className="whyai-desc font-normal text-[14px] leading-[16px] tracking-[0px] text-white">
                  Enterprise level AI at startup friendly pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}