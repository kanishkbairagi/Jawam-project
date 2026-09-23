import React from 'react';
import { Cpu, Monitor, Zap, RefreshCw, Link2, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'Bespoke Enterprise Software',
    description: 'End-to-end custom operational platforms engineered to replace rigid legacy applications.',
  },
  {
    icon: Monitor,
    title: 'Proprietary SaaS Platforms',
    description: 'Architecting high-scale multi-tenant SaaS products from MVP to enterprise scale.',
  },
  {
    icon: Zap,
    title: 'Internal Operations Portals',
    description: 'Custom ERP, HRMS, and inventory management systems built for internal efficiency.',
  },
  {
    icon: RefreshCw,
    title: 'Legacy System Modernization',
    description: 'Deconstruct outdated monoliths into agile, modular microservices without operational disruption.',
  },
  {
    icon: Link2,
    title: 'High-Throughput Engines',
    description: 'Specialized computing engines built for complex calculations, billing, or algorithmic matching.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access & Security',
    description: 'Granular enterprise security, permission hierarchies, and complete audit trail logging.',
  },
];

export default function Capabilities() {
  return (
    <section className="w-full mt-[60px] md:mt-[80px] lg:mt-[100px] max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
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
          WHAT WE CAN BUILD
        </p>
        <h2 className="font-bold text-[24px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-tight text-white tracking-[-0.5px]">
          Our Custom Software <span className="text-[#04A3DA]">Capabilities</span>
        </h2>
      </div>

      {/* 6 Capabilities Cards Grid */}
      <div className="grid grid-cols-1 lg:mt-[-10px] md:mt-[-20px] mt-[-10px] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
        {capabilities.map((item, index) => {
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
                  className="icon-float-idle w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#04A3DA]/10 flex items-center justify-center mb-4 sm:mb-5 text-[#04A3DA] sm:group-hover:scale-105 sm:group-hover:bg-[#04A3DA]/20 sm:group-hover:border-[#04A3DA]/40 transition-all duration-300"
                  style={{ animationDelay: `${(index % 3) * 0.4}s` }}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-white text-[17px] sm:text-[16px] leading-snug mb-2.5 sm:mb-3">
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
