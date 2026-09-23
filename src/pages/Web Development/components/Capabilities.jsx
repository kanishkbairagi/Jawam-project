import React from 'react';
import { Globe, Zap, Cpu, RefreshCw, Link2, ShieldCheck } from 'lucide-react';

const capabilities = [
  {
    icon: Globe,
    title: 'Custom Web Applications',
    description: 'High-throughput enterprise web portals and interactive dashboards built with modern React frameworks.',
  },
  {
    icon: Zap,
    title: 'Progressive Web Apps (PWA)',
    description: 'App-like experiences with offline capability, push notifications, and ultra-fast installable web apps.',
  },
  {
    icon: Cpu,
    title: 'Headless CMS & E-Commerce',
    description: 'Scalable commerce and content platforms integrated with Shopify, Strapi, Sanity, or custom APIs.',
  },
  {
    icon: RefreshCw,
    title: 'Web App Modernization',
    description: 'Migrate legacy PHP/jQuery applications to high-performance Next.js and cloud-native backends.',
  },
  {
    icon: Link2,
    title: 'API & Third-Party Integrations',
    description: 'Connect payment gateways, CRMs, analytics, and marketing automation tools securely.',
  },
  {
    icon: ShieldCheck,
    title: 'Performance & SEO Tuning',
    description: 'Comprehensive Core Web Vitals audits, security hardening, and technical SEO optimizations.',
  },
];

export default function Capabilities() {
  return (
    <section className="w-full mt-[90px] md:mt-[80px] lg:mt-[100px] max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
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
          Our Web Development <span className="text-[#04A3DA]">Capabilities</span>
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
