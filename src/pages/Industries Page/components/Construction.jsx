
import checkImg from '../../../assets/construction.webp';
export default function Construction() {
  return (
    <div className="mt-[-180px] md:mt-0 lg:mt-0">
    <section className="px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]">
      <style>{`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <div className="lg:max-w-5xl md:max-w-[700px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
          <div>
            <p className="hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3">
              CONSTRUCTION
            </p>

            <h2 className="hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4">
              Building the <span className="text-sky-400">future digitally</span>
            </h2>

            <p className="hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6">
              We deliver construction management solutions that simplify project planning, workforce coordination, and operational workflows.
            </p>

            <p className="hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3">
              Key Features
            </p>

            <ul className="space-y-2 md:space-y-3">
              <li className="hc-check-item flex items-center gap-2">
                <span className="hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                <span className="text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]">Project management systems</span>
              </li>
              <li className="hc-check-item flex items-center gap-2">
                <span className="hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                <span className="text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]">Workforce & task tracking</span>
              </li>
              <li className="hc-check-item flex items-center gap-2">
                <span className="hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                <span className="text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]">Real-time reporting dashboards</span>
              </li>
              <li className="hc-check-item flex items-center gap-2">
                <span className="hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                <span className="text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]">Document management solutions</span>
              </li>
              <li className="hc-check-item flex items-center gap-2">
                <span className="hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"></span>
                <span className="text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]">Construction workflow automation</span>
              </li>
            </ul>
          </div>

          <div className="relative mt-[-10px] md:mt-0 lg:mt-0">
            <div className="hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:h-[370px]">
              <img
                src={checkImg}
                alt="Construction management technology"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}