import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import schoolHealthLogo from '../../../assets/schoolhealth-logo-white.png';
import dashboardImg from '../../../assets/schoolhealth-dashboard.png';
import '../school.css';

export default function SchoolHero() {
  return (
    <section className="relative pt-20 md:pt-[100px] lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-16 overflow-x-hidden">
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center w-full">
          
          {/* Badge + Heading + Paragraph */}
          <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 text-center lg:text-left">
            {/* Logo */}
            <div className="sh-badge inline-flex items-center mb-3 md:mb-4">
              <img
                src={schoolHealthLogo}
                alt="SchoolHealth"
                className="h-7 md:h-8 lg:h-9 w-auto object-contain"
              />
            </div>

            <h1 className="sh-animate sh-delay-1 font-extrabold md:max-w-[600px] md:mt-2 mt-0 lg:mt-0 md:mx-auto text-[20px] md:text-[46px] lg:text-[55px] leading-[28px] md:leading-[52px] lg:leading-[60px] lg:text-left md:text-center text-left tracking-[-0.5px] text-white mb-4 md:mb-6">
              ERP for School <span className="text-sky-400">Wellness</span>
            </h1>

            <p className="sh-animate sh-delay-2 mt-[-5px] md:mt-[-15px] lg:mt-[-10px] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-0.5px] lg:text-left md:text-center text-left text-slate-200 mb-0 lg:mb-6">
              A complete digital platform to manage students, staff, attendance, fees, transport, and more  all in one place.
            </p>
          </div>

          {/* Right Content - Dashboard / Mockup */}
          <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-3 relative mt-6 lg:mt-0 w-full self-center">
            <div className="sh-img rounded-2xl md:rounded-3xl shadow-2xl w-full">
              <div className="relative rounded-2xl border border-slate-700 bg-slate-900/90 p-2 sm:p-2.5 shadow-2xl shadow-sky-500/10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 pb-2 px-1 border-b border-slate-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <div className="mx-auto text-[10px] text-slate-400 bg-slate-800 px-3 py-0.5 rounded-full border border-slate-700">
                    schoolhealth.in
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg bg-slate-950 mt-1.5">
                  <img
                    src={dashboardImg}
                    alt="SchoolHealth Platform"
                    className="sh-img-float w-full max-w-[340px] md:max-w-[460px] lg:max-w-[580px] max-h-[380px] object-cover rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="order-3 lg:order-none lg:col-start-1 lg:mt-[-20px] lg:row-start-3 flex flex-wrap gap-3 md:gap-6 justify-center lg:justify-start mt-4 md:mt-0 lg:mt-0">
            <div className="sh-feature-item flex items-center gap-2">
              <div className="sh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">Free setup</span>
            </div>
            <div className="sh-feature-item flex items-center gap-2">
              <div className="sh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">No credit cards</span>
            </div>
            <div className="sh-feature-item flex items-center gap-2">
              <div className="sh-feature-badge w-5 h-5 md:w-6 md:h-6 bg-sky-400 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs md:text-sm lg:text-base">14-day trial</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="sh-animate sh-delay-3 order-4 lg:order-none lg:col-start-1 lg:row-start-2 flex mt-3 lg:mt-[-15px] md:mt-0 flex-row gap-2 md:gap-4 justify-center lg:justify-start mb-2 lg:mb-8">
            <a
              href="https://schoolhealth.in"
              target="_blank"
              rel="noopener noreferrer"
              className="sh-btn-primary inline-flex items-center justify-center gap-1.5 md:gap-2 px-3.5 md:px-6 py-1.5 md:py-2 text-xs md:text-base bg-gradient-to-r from-sky-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all whitespace-nowrap"
            >
              <Icon icon="solar:arrow-right-linear" style={{ color: '#FFFFFF', fontSize: '14px' }} />
              Digitize Your School Today
            </a>
            <Link
              to="/schedule-consultation"
              className="sh-btn-secondary px-3.5 md:px-6 py-1.5 md:py-2 text-xs md:text-base bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-1.5 md:gap-2 whitespace-nowrap"
            >
              <Icon icon="solar:play-circle-bold" style={{ color: '#000000', fontSize: '14px' }} />
              Book Demo
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
