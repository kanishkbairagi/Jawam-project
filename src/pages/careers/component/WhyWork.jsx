import React from 'react';
import { Users, Award, HeartHandshake, Lightbulb, GraduationCap, PartyPopper } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'We Build People, Not Just Products',
    description:
      'At Jawam, your growth is part of the work. You get opportunities to learn, take ownership, try new technologies, and become better at what you do.',
  },
  {
    icon: Award,
    title: 'Your Work Actually Gets Noticed',
    description:
      'We believe good work deserves recognition. Whether you solve a tough problem, help a teammate, or go the extra mile, your contribution matters here.',
  },
  {
    icon: HeartHandshake,
    title: 'Work With People Who Help You Grow',
    description:
      "You're never expected to figure everything out alone. Our teams share knowledge, support each other, and make room for questions, ideas, and better ways of working.",
  },
  {
    icon: Lightbulb,
    title: 'Freedom to Take Ownership',
    description:
      'Have an idea? Speak up. See a better approach? Bring it to the table. At Jawam, employees are trusted to make decisions and take responsibility for their work.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Is Part of the Journey',
    description:
      'Technology keeps changing, and so do we. From new tools and frameworks to real project challenges, you get opportunities to keep learning and expanding your skills.',
  },
  {
    icon: PartyPopper,
    title: 'A Team That Feels Like a Team',
    description:
      'Deadlines matter, but so do people. We believe in collaboration, open communication, celebrations, and creating a workplace where you actually enjoy being part of the team.',
  },
];

export default function WhyWork() {
  return (
    <section className="w-full mt-[-10px] md:mt-[-40px] lg:mt-0 max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
      <style>{`
        @keyframes iconFloatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .icon-float-idle {
          animation: iconFloatIdle 2.4s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .icon-float-idle {
            animation: none;
          }
        }
      `}</style>
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12">

        <p className="text-[#04A3DA] font-semibold text-[13px] sm:text-[14px] tracking-widest uppercase mb-3">
          Why People Love Working at Jawam
        </p>
        <h2 className="font-bold text-[24px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-tight text-white tracking-[-0.5px]">
          Why Engineers <span className="text-[#04A3DA]">Love Growing With Jawam</span>
        </h2>
        <p className="mt-3 text-[#E7E8EA] text-[14px] sm:text-[16px] md:text-[17px] max-w-[700px] mx-auto leading-relaxed px-2 sm:px-0">
          We give people the space to learn, the trust to take ownership, and the team to grow with. Because when our people grow, Jawam grows with them.
        </p>
      </div>

      {/* 6 Culture & Growth Pillars Grid */}
      <div className="grid grid-cols-1 lg:mt-[-10px] md:mt-[-20px] mt-[-10px] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 p-5 sm:p-7 md:p-5 flex flex-col justify-between transition-all duration-300 ease-out sm:hover:bg-[#15233E]/80 sm:hover:border-[#04A3DA]/60 sm:hover:-translate-y-1.5 sm:hover:shadow-[0_12px_30px_-8px_rgba(4,163,218,0.22)] backdrop-blur-sm"
            >
              {/* Subtle top hover highlight accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#04A3DA] to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon */}
                <div
                  className="icon-float-idle w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#04A3DA]/10  flex items-center justify-center mb-4 sm:mb-5 text-[#04A3DA] sm:group-hover:scale-105 sm:group-hover:bg-[#04A3DA]/20 sm:group-hover:border-[#04A3DA]/40 transition-all duration-300"
                  style={{ animationDelay: `${(index % 3) * 0.4}s` }}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-white  text-[17px] sm:text-[16px] leading-snug mb-2.5 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#B4BAC5] sm:group-hover:text-[#E7E8EA] text-[14px] sm:text-[14px] leading-[21px] sm:leading-[24px] transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
