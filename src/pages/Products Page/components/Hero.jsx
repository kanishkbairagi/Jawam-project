import { Icon } from "@iconify/react";
import productPreview from '../../../assets/procuct.webp';

export default function Hero() {
  return (
    
    <section
      className="relative px-4 max-w-[1100px] mx-auto mt-6 md:mt-6 lg:mt-16 md:mt-[-120px] lg:mt-0 mb-[20px] md:mb-0 lg:mb-[30px]"
      id="hero-section"
    >
      <div className="flex flex-col items-center text-center">
        <button
          className="hero-pill hero-delay-1 mt-[5px] mb-[10px] md:mb-[15px] lg:mb-[15px] md:mt-[-25px] px-4 md:px-4 lg:px-6 mx-auto mb-6 h-[28px] md:h-[34px] lg:h-[45px] flex items-center justify-center gap-1.5 md:gap-2 bg-[#EEF2F8] rounded-full hover:bg-white transition whitespace-nowrap w-fit shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#3b82f6]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <span className="text-[10px] md:text-[12px] lg:text-[16px] font-semibold text-[#4B5563]">
            Products
          </span>
        </button>

        <h1 className="hero-animate hero-delay-2 font-extrabold text-[60px] leading-[60px] lg:mt-4 md:mt-0 mt-0 tracking-[-0.5px] text-left lg:text-center md:text-center mb-8">
          Product Built for{" "}
          <span className="text-[#04A3DA]">
            Next <br className="hidden md:block" /> Generation
          </span>{" "}
          of Innovation
        </h1>
        <div class="mt-0 md:mt-[-35px] lg:mt-0">
        <p className="hero-animate hero-delay-3  font-normal text-[18px] leading-[28px] tracking-[-0.5px] text-left lg:text-center mt-0 md:mt-[-10px] lg:mt-0 md:text-center text-slate-200 mb-10">
          From AI-powered platforms and automation tools to business
          management systems. Jawam builds scalable {" "}
          <br className="hidden md:block" /> digital products designed for modern
          growth.
        </p>
        </div>
        <span className="jawam-launch-heading">LAUNCHING SOON...</span>

        <div className="hero-animate hero-delay-5 flex flex-col items-center justify-center mt-8 w-full">
          <img
            src={productPreview}
            alt="JMART 24 Product Preview"
            className="hero-product-img md:max-w-[500px] md:max-h-[300px] lg:max-w-[800px] lg:max-h-[500px] object-contain"
          />
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 md:mt-2 lg:mt-6 mt-4">
            <a
              href="#"
              className="hero-btn-primary inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full bg-[linear-gradient(90deg,#04A3DA_0%,#3B82F6_100%)]"
            >
              Visit Product
              <Icon icon="solar:eye-bold" style={{ color: "#FFFFFF", fontSize: "18px" }} />
            </a>
            <a
              href="#"
              className="hero-btn-secondary inline-flex items-center justify-center gap-2 text-slate-900 text-xs sm:text-sm font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white border border-white"
            >
              <Icon icon="solar:play-circle-bold" style={{ color: "#000000", fontSize: "18px" }} />
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
}
