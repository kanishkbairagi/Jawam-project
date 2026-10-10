export default function SchoolInstitutions() {
  const institutionTypes = [
    { label: 'Schools', icon: '🏫' },
    { label: 'Colleges', icon: '🎓' },
    { label: 'Coaching Centres', icon: '📚' },
    { label: 'ID-Card Printing Vendors', icon: '🪪' },
    { label: 'Educational Institutions', icon: '🏛️' },
  ];

  return (
    <div className="mt-[-55px] md:mt-[-70px] lg:mt-10">
      <section className="py-10 md:py-14 lg:py-20 px-4 md:px-8 lg:px-16 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-3 md:mb-4">
            WHO IS SCHOOLHEALTH FOR?
          </p>
          <h2 className="font-bold text-[26px] md:text-[34px] lg:text-[44px] leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.5px] text-center mb-6 md:mb-8 text-white">
            Built for Every <span className="text-sky-400">Educational Institution</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mt-0 md:mt-[-20px] lg:mt-0">
            {institutionTypes.map((type, index) => (
              <button
                key={index}
                className="inline-flex items-center justify-center gap-1 md:gap-2 w-[46%] sm:w-auto px-2 md:px-5 lg:px-6 py-1.5 md:py-2.5 lg:py-3 text-[10px] md:text-sm lg:text-base text-white font-medium rounded-xl border border-[#BDBDBDB0] hover:border-sky-400 hover:bg-sky-400/10 transition-all whitespace-nowrap overflow-hidden"
              >
                <span className="text-xs md:text-base lg:text-lg shrink-0">{type.icon}</span>
                <span className="truncate">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
