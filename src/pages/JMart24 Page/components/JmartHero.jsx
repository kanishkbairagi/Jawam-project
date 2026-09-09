import jmartImg from '../../../assets/jmart1.webp';
import { Icon } from "@iconify/react";
import '../jmart.css';

export default function JmartHero() {
  return (
    <section className="relative pt-20 md:pt-[100px] lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16 overflow-x-hidden">


      <div className="max-w-[1100px] mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center w-full">

          {/* Badge + Heading + Paragraph */}
          <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 text-center lg:text-left">
            {/* Badge */}
            <div className="jh-badge inline-flex items-center gap-1.5 md:gap-2 bg-white rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#3B82F6]">
              <path d="M2.25 3a.75.75 0 000 1.5h1.386l2.56 10.24A2.25 2.25 0 008.379 16.5h8.976a2.25 2.25 0 002.18-1.694l1.2-4.8A.75.75 0 0019.008 9H6.53l-.57-2.25H20.25a.75.75 0 000-1.5H5.58l-.3-1.2A1.5 1.5 0 003.826 3H2.25zM9 20.25a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            </svg>
              <span className="text-slate-800 text-xs md:text-sm font-semibold">JMart 24</span>
            </div>

            <h1 className="jh-animate jh-delay-1 font-extrabold md:max-w-[600px] md:mt-2 mt-0 lg:mt-0 md:mx-auto text-[20px] md:text-[46px] lg:text-[64px] leading-[28px] md:leading-[52px] lg:leading-[70px] lg:text-left md:text-center text-left tracking-[-0.5px] mb-4 md:mb-6">
              Run Your Shop <span className="text-sky-400">Smarter,</span> Not Harder
            </h1>
            <p className="jh-animate jh-delay-2  mt-[-5px] md:mt-[-15px] lg:mt-[-10px] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-0.5px] lg:text-left md:text-center text-left text-slate-200 mb-0 lg:mb-6">
              JMart 24 is your all-in-one billing and inventory management solution designed for Indian businesses. Simplify operations, track stock, and grow your business effortlessly.
            </p>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 relative mt-6 lg:mt-0 w-full self-center">
            <div className="jh-img rounded-2xl md:rounded-3xl shadow-2xl w-full">
              <img
                src={jmartImg}
                alt="JMart 24 Dashboard"
                className="jh-img-float w-full max-w-[340px] md:max-w-[460px] lg:max-w-[580px] max-h-[900px] object-cover rounded-2xl md:rounded-3xl mx-auto"
              />
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="order-3 lg:order-none lg:col-start-1 lg:mt-[-20px] lg:row-start-3 flex flex-wrap gap-3 md:gap-6 justify-center lg:justify-start mt-4 md:mt-0 lg:mt-0">
            <div className="jh-feature-item flex items-center gap-2">
              <div className="jh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">GST Ready</span>
            </div>
            <div className="jh-feature-item flex items-center gap-2">
              <div className="jh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">Secure &amp; Reliable</span>
            </div>
            <div className="jh-feature-item flex items-center gap-2">
              <div className="jh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">Made for India</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="jh-animate jh-delay-3 order-4 lg:order-none lg:col-start-1 lg:row-start-2 flex mt-3 lg:mt-[-15px] md:mt-0 flex-row gap-2 md:gap-4 justify-center lg:justify-start mb-2 lg:mb-8">
            <button className="jh-btn-primary inline-flex items-center justify-center gap-1.5 md:gap-2 px-3.5 md:px-6 py-1.5 md:py-2 text-xs md:text-base bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all whitespace-nowrap">
              <Icon icon="solar:eye-bold" style={{ color: "#FFFFFF", fontSize: "14px" }} />
              Visit Product
            </button>
            <button className="jh-btn-secondary px-3.5 md:px-6 py-1.5 md:py-2 text-xs md:text-base bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap">
              <Icon icon="solar:play-circle-bold" style={{ color: "#000000", fontSize: "14px" }} />
              Watch Demo
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
