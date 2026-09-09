import React from 'react';

const JourneyNumbers = () => {
  return (
    <section id="highlights" className="py-8 mb-[-45px] md:mb-[40px] lg:mb-0 md:py-16 lg:py-24 px-4 md:px-6  max-w-[1100px] mx-auto mt-[10px] md:mt-[-120px]">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 bg-gradient-to-br from-[#0a2540] via-[#0d3a5c] to-[#051428]">
          {/* Subtle glow accent */}
          <div className="absolute -top-10 -right-10 w-48 h-48 md:w-72 md:h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative">
            <p className="text-sky-400 text-xs md:text-sm font-bold tracking-wider mb-3 md:mb-4">JOURNEY IN NUMBERS</p>

            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight mb-6 md:mb-10">
              Global <span className="text-sky-400">Networking</span><br/>
              &amp; Business<br/>
              Connection
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div>
                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 mb-1">3+</div>
                <p className="text-slate-300 text-[10px] md:text-xs lg:text-sm">Years of Participation</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 mb-1">100+</div>
                <p className="text-slate-300 text-[10px] md:text-xs lg:text-sm">Business Discussions</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 mb-1">50+</div>
                <p className="text-slate-300 text-[10px] md:text-xs lg:text-sm">Global Connection</p>
              </div>
              <div>
                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 mb-1">20+</div>
                <p className="text-slate-300 text-[10px] md:text-xs lg:text-sm">Potential Collaborations</p>
              </div>
              <div className="col-span-2 sm:col-span-3 md:col-span-1">
                <div className="text-xl md:text-2xl lg:text-4xl font-bold text-sky-400 mb-1">1000+</div>
                <p className="text-slate-300 text-[10px] md:text-xs lg:text-sm">Meaningful Conversations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyNumbers;
