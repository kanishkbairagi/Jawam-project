import React from 'react';
import events18 from '../../../assets/Events-Images/events18.webp';

const highlightItems = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: 'Built Meaningful Client Relationships',
    description:
      'Connected with new clients and developed relationships beyond a single event.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    title: 'Connected Across Cultures & Perspectives',
    description:
      'Understood different business cultures, ideas, expectations, and ways of working.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    title: 'Created Future Opportunities',
    description:
      'Turned conversations into relationships that opened doors for potential collaborations and future projects.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.25M6.633 10.5H5.25a2.25 2.25 0 00-2.25 2.25v6a2.25 2.25 0 002.25 2.25h1.383m0-10.5v10.5"
        />
      </svg>
    ),
    title: 'Learned From Every Interaction',
    description:
      'Gained practical insights by listening to real business challenges, experiences, and perspectives.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-sky-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
    title: 'Growing With Every Edition',
    description:
      'Three years of attending the event has continuously expanded our network, knowledge, and perspective.',
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-2 md:py-4 lg:py-24 px-4 md:px-6 mt-0 md:mt-[-80px] mb-0 md:mb-[80px] lg:mb-0 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-[#0a1525] border border-white/10 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mx-auto overflow-hidden flex flex-col p-6 md:p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-start flex-1 gap-6 md:gap-6 lg:gap-10">

            {/* Left Content */}
            <div className="flex flex-col w-full lg:w-[45%] min-w-0 gap-4">
              <p className="font-semibold text-sm lg:text-[16px] text-[#04A3DA] tracking-widest uppercase">
                Highlights
              </p>

              <h3 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight tracking-[-0.5px] text-white">
                Connections That Turned Into{' '}
                <span className="text-sky-400">Opportunities</span>
              </h3>

              <p className="font-normal text-sm lg:text-[16px] text-white/70 leading-relaxed">
                Every IndiaSoft edition has brought new conversations,
                meaningful connections, and experiences that have shaped our
                journey. Over the years, some of these connections have grown
                into strong professional relationships and future opportunities
                to work together.
              </p>

              {/* Image */}
              <div className="rounded-[12px] overflow-hidden h-52 md:h-[400px] lg:h-[220px] mt-2">
                <img
                  src={events18}
                  alt="Connections and opportunities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Items */}
            <div className="flex flex-col w-full lg:w-[55%] gap-3 justify-center">
              {highlightItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-[12px] px-4 py-4 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="shrink-0 mt-0.5">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm lg:text-[15px] font-semibold text-white leading-snug">
                      {item.title}
                    </p>

                    <p className="text-xs lg:text-[14px] text-white/60 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
