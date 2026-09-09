import React from 'react';

const TimelineSection = () => {
  return (
    <div>
    <section className="py-12 md:pt-0 md:pb-16 pb-0 lg:pb-[170px] lg:pb-0 lg:py-20 px-4 md:px-6 max-w-[1050px] mx-auto mb-20 md:mb-12 lg:mb-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm md:text-base lg:text-lg font-bold text-sky-400 mb-6 md:mb-10 mx-auto text-center">Our IndiaSoft Journey</h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-sky-500/40 transform -translate-y-1/2"></div>
          {/* Timeline Markers */}
          <div className="relative flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-sky-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-xs sm:text-lg md:text-xl">2024</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-sky-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-sm sm:text-xl md:text-2xl">2025</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-sky-500 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-xs sm:text-lg md:text-xl">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TimelineSection;
