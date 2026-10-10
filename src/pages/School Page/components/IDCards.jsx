import { Icon } from '@iconify/react';

export default function IDCards() {
  const cards = [
    {
      theme: 'navy',
      headerBg: 'bg-[#1E3A8A]',
      footerBg: 'bg-[#1E3A8A]',
      school: 'SUNRISE PUBLIC SCHOOL',
      name: 'AARAV SHARMA',
      id: 'STU-2026-042',
      idColor: 'text-sky-600',
      validity: 'VALID UPTO MAR 2027',
    },
    {
      theme: 'burgundy',
      headerBg: 'bg-[#991B1B]',
      footerBg: 'bg-[#991B1B]',
      school: 'SUNRISE PUBLIC SCHOOL',
      name: 'PRIYA VERMA',
      id: 'STU-2026-108',
      idColor: 'text-amber-600',
      validity: 'VALID UPTO MAR 2027',
    },
    {
      theme: 'emerald',
      headerBg: 'bg-[#065F46]',
      footerBg: 'bg-[#065F46]',
      school: 'SUNRISE PUBLIC SCHOOL',
      name: 'ROHAN GUPTA',
      id: 'EMP-2026-014',
      idColor: 'text-emerald-600',
      validity: 'VALID UPTO MAR 2027',
    },
  ];

  const features = [
    '50+ professional templates pick one, make it yours',
    'Canva-style editor: drag, resize, colors, logo, custom fields',
    'Cards fill themselves from your roster photos included',
    'School staff can capture student photos right in the app',
    'Print-ready A4 sheets at exact card size, straight to PDF',
  ];

  return (
    <section id="id-cards-section" className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: ID-Card Studio Mockup */}
          <div className="order-2 lg:order-1 w-full max-w-[540px] mx-auto lg:max-w-none">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 p-4 sm:p-6 shadow-2xl shadow-sky-500/10 backdrop-blur-sm transition-all duration-300 hover:border-slate-600">
              
              {/* Studio Header */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 ">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 " />
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                    ID-Card Studio
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border border-sky-400/30 text-sky-300">
                  50+ templates
                </span>
              </div>

              {/* 3 ID Cards Display */}
              <div className="grid grid-cols-3 gap-2 mx-auto sm:gap-3 py-5 sm:py-6 lg:max-w-[450px] max-w--full md:max-w-full ">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    {/* Card Top Banner */}
                    <div className={`${card.headerBg} py-1.5 px-1 text-center`}>
                      <p className="text-white text-[6px] sm:text-[8px] font-bold uppercase tracking-tight leading-tight">
                        {card.school}
                      </p>
                    </div>

                    {/* Card Body */}
                    <div className="p-1.5 sm:p-2 text-center flex flex-col items-center">
                      {/* Avatar Frame */}
                      <div className="w-8 h-10 sm:w-12 sm:h-14 bg-slate-100 rounded border border-slate-300 flex items-center justify-center my-1 sm:my-1.5">
                        <Icon
                          icon="solar:user-bold"
                          className="w-5 h-5 sm:w-8 sm:h-8 text-slate-400"
                        />
                      </div>

                      {/* Name */}
                      <p className="text-slate-900 font-extrabold text-[7px] sm:text-[10px] leading-tight tracking-tight uppercase">
                        {card.name}
                      </p>

                      {/* Roll / ID */}
                      <p className={`${card.idColor} font-bold text-[6px] sm:text-[8px] mt-0.5 tracking-tight`}>
                        {card.id}
                      </p>
                    </div>

                    {/* Card Footer Banner */}
                    <div className={`${card.footerBg} py-0.5 px-1 text-center`}>
                      <p className="text-white text-[5px] sm:text-[7px] font-semibold uppercase tracking-tighter leading-tight">
                        {card.validity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mockup Subtitle */}
              <p className="text-slate-400 text-[11px] sm:text-xs md:text-sm text-center pt-3 border-t border-slate-800">
                Design once every card fills itself from the roster.
              </p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 md:gap-2 border border-sky-500/30 text-sky-400 rounded-full px-3 md:px-4 py-1 md:py-1.5 mb-3 md:mb-4 text-xs md:text-sm font-semibold">
              <Icon icon="solar:card-2-bold" className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-400" />
              <span>ID-Card Studio</span>
            </div>

            {/* Headline */}
            <h2 className="font-extrabold text-[24px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[30px] sm:leading-[38px] md:leading-[46px] lg:leading-[50px] tracking-[-0.5px] text-white mb-3 md:mb-4">
              Design and print <span className="text-sky-400">ID cards</span> like a pro
            </h2>

            {/* Paragraph */}
            <p className="text-slate-300 text-[13px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[26px] tracking-[0] mb-5 md:mb-6">
              Schools and printing vendors get a full card studio: choose from 50+ ready made designs, customise every detail in a drag-and-drop editor, and print perfectly sized cards for an entire class in one go with photos captured right inside the app.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 sm:space-y-3 mb-6 md:mb-8 text-left max-w-[550px] mx-auto lg:mx-0">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 bg-sky-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 md:w-3.5 md:h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-200 text-xs sm:text-sm md:text-[15px] leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://schoolhealth.in/vendor/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white text-xs sm:text-sm md:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Start printing ID cards</span>
                <Icon icon="solar:arrow-right-linear" className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
