import React from 'react';
import Event1 from '../../../assets/Events-Images/Event1.webp';
import events3 from '../../../assets/Events-Images/events3.webp';
import events4 from '../../../assets/Events-Images/events4.webp';

const OverviewSection = () => {
  return (
    <section
      id="overview"
      className="py-2 md:py-4 lg:py-24 px-4 md:px-6 mt-0 md:mt-[-80px] mb-0 md:mb-[80px] lg:mb-0 relative z-10"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-[#0a1525] border border-white/10 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mx-auto overflow-hidden flex flex-col p-6 md:p-6 lg:p-10">
          <div className="flex flex-col-reverse md:flex-col lg:flex-row lg:items-stretch flex-1 gap-6 md:gap-6 lg:gap-10">

            {/* Left Content */}
            <div className="flex flex-col w-full lg:w-[48%] min-w-0 gap-4 md:gap-4 lg:gap-5">
              
              <div>
                <p className="font-semibold text-sm md:text-sm lg:text-[15px] leading-tight tracking-[0px] text-[#04A3DA] mb-2 md:mb-3 lg:mb-3">
                  OVERVIEW
                </p>

                <h3 className="font-bold text-2xl sm:text-3xl md:text-[26px] lg:text-[30px] leading-tight md:leading-[32px] lg:leading-[36px] tracking-[-0.5px] text-white mb-3 md:mb-3 lg:mb-3">
                  Connecting Beyond Business{' '}
                  <span className="text-sky-400">
                    Growing Through Every Experience
                  </span>
                </h3>

                <p className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[20px] tracking-[-0.3px] text-white/70 ">
                  At Jawam Infotech, every event is an opportunity to step
                  outside our everyday work, meet new people, exchange ideas,
                  and discover different perspectives. From industry events
                  and technology conferences to business gatherings, we believe
                  every interaction brings a new experience and something
                  valuable to learn.
                </p>
              </div>

              {/* Experience Highlights */}
              <ul className="space-y-1.5 md:space-y-1.5 lg:space-y-1.5">
                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Connected with clients, professionals, and industry leaders.
                  </span>
                </li>

                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Discovered new perspectives, cultures, and ways of working.
                  </span>
                </li>

                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Exchanged ideas and experiences beyond business conversations.
                  </span>
                </li>

                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Explored emerging technologies and industry trends.
                  </span>
                </li>

                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Built meaningful professional relationships and collaborations.
                  </span>
                </li>

                <li className="flex items-start gap-2 md:gap-2 lg:gap-2.5">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 bg-sky-400 rounded-full shrink-0 mt-1"></span>
                  <span className="font-normal text-sm md:text-sm lg:text-[14px] leading-relaxed lg:leading-[18px] tracking-[-0.3px] text-white/70 ">
                    Turned every event into an opportunity to learn and grow.
                  </span>
                </li>
              </ul>

              {/* Key Highlights */}
              <div className="bg-[linear-gradient(277.37deg,_rgba(230,246,251,0.2)_1.45%,_rgba(177,226,244,0.2)_99.6%)] rounded-xl p-3 md:p-3 lg:p-4 border border-[#BDBDBDB0]">
                <div className="flex items-start gap-3 md:gap-3 lg:gap-3">
                  
                  <svg
                    className="w-8 h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 text-sky-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>

                  <div>
                    <p className="text-sky-400 text-xs md:text-sm font-semibold pb-1">
                      KEY HIGHLIGHT
                    </p>

                    <p className="font-semibold text-sm md:text-sm lg:text-[14px] leading-relaxed mb-1">
                      More Than an Event. A Learning Experience.
                    </p>

                    <p className="font-normal text-xs md:text-sm lg:text-[13px] leading-relaxed text-white/70  tracking-[0px]">
                      Every event brings new people, new conversations, and
                      new perspectives. For us, the real value goes beyond
                      business it is about understanding, learning,
                      connecting, and coming back with something new.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="flex flex-col lg:w-[48%] gap-3 md:gap-3 lg:gap-4 w-full">
              
              <div className="flex gap-3 md:gap-3 lg:gap-4 h-40 sm:h-56 md:h-72 lg:h-[300px] lg:shrink-0">
                <div className="rounded-[12px] overflow-hidden w-[48%] shrink-0 h-full">
                  <img
                    src={Event1}
                    alt="Event Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="rounded-[12px] overflow-hidden w-[48%] shrink-0 h-full">
                  <img
                    src={events3}
                    alt="Event Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-[12px] overflow-hidden w-full h-48 sm:h-64 md:h-72 flex-1">
                <img
                  src={events4}
                  alt="Event Image 3"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;