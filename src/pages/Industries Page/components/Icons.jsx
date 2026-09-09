import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import '../industries.css';

const industries = [
  { key: 'healthcare',  path: '/industries/healthcare',  icon: 'mdi:heart',                     label: 'Healthcare' },
  { key: 'finance',     path: '/industries/finance',      icon: 'solar:banknote-2-bold',         label: 'Finance' },
  { key: 'education',   path: '/industries/education',    icon: 'mdi:school',                    label: 'Education' },
  { key: 'ecommerce',   path: '/industries/ecommerce',    icon: 'mdi:cart',                       label: <>Retail &amp;, <br />ECommerce</> },
  { key: 'logistics',   path: '/industries/logistics',    icon: 'solar:box-bold',                 label: <>Logistics &amp; <br />Distribution</> },
  { key: 'construction',path: '/industries/construction', icon: 'solar:buildings-bold',           label: 'Construction' },
  { key: 'automotive',  path: '/industries/automotive',   icon: 'solar:tram-bold',                label: 'Automotive' },
  { key: 'insurance',   path: '/industries/insurance',    icon: 'solar:shield-minimalistic-bold', label: 'Insurance' },
];

export default function Icons() {
  const [activeKey, setActiveKey] = useState('healthcare');
  const trackRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = track;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    };

    updateScrollState();

    const handleScroll = () => {
      setHasScrolled(true);
      updateScrollState();
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  return (
    <div className="ico-scroll-wrapper relative mt-[-20px] md:mt-[-20px] lg:mt-[-20px] mb-[25px] md:mb-0 lg:mb-0 border border-white/10 rounded-[16px] px-3 py-3 bg-white/[0.03] md:border-0 md:rounded-none md:bg-transparent md:px-0 md:py-0">
      <style>{`
        @media (min-width: 768px) {
          .ico-link-desktop {
            cursor: pointer;
          }
          .ico-link-desktop .ico-item {
            transition: transform 0.3s ease;
          }
          .ico-link-desktop:hover .ico-item {
            transform: translateY(-4px);
          }
          .ico-link-desktop .ico-circle {
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .ico-link-desktop:hover .ico-circle {
            background-color: rgba(56, 189, 248, 0.18);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
            transform: scale(1.08);
          }
          .ico-link-desktop:hover .ico-svg {
            color: #38BDF8;
          }
          .ico-link-desktop:hover span {
            color: #38BDF8;
          }
          .ico-link-desktop .ico-item.is-active .ico-circle {
            background-color: rgba(56, 189, 248, 0.22);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.35);
          }
          .ico-link-desktop .ico-item.is-active .ico-svg,
          .ico-link-desktop .ico-item.is-active span {
            color: #38BDF8;
          }
          .ico-link-desktop .ico-item.is-active span::after {
            content: '';
            display: block;
            width: 18px;
            height: 2px;
            background: #38BDF8;
            border-radius: 2px;
            margin: 4px auto 0;
          }
        }
      `}</style>

      <div
        ref={trackRef}
        className="ico-scroll-track
          flex flex-nowrap items-start justify-start gap-4
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          w-full
          md:overflow-visible md:snap-none md:grid md:grid-cols-4 md:max-w-[600px] md:mx-auto md:gap-2
          lg:flex lg:flex-wrap lg:justify-center lg:gap-16 lg:max-w-full"
        aria-label="Browse industries"
      >
        {industries.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <Link
              key={item.key}
              to={item.path}
              className="ico-link ico-link-desktop block shrink-0 snap-start w-[72px] md:w-auto"
              onClick={() => setActiveKey(item.key)}
            >
              <div className={`ico-item flex flex-col items-center gap-1 ${isActive ? 'is-active' : ''}`}>
                <div className="ico-circle w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full">
                  <Icon icon={item.icon} className="ico-svg text-[22px] md:text-[28px] lg:text-[35px]" />
                </div>
                <span className="text-[11px] md:text-[14px] lg:text-[16px] leading-[13px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-center">
                  {item.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* ---- Mobile-only scroll affordance ---- */}

      {/* Left edge fade (only once the user has scrolled in) */}
      <div
        className={`md:hidden pointer-events-none absolute top-0 left-0 h-full w-8 rounded-l-[16px]
          bg-gradient-to-r from-black/35 to-transparent
          transition-opacity duration-300
          ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Right edge fade, signalling more content off-screen */}
      <div
        className={`md:hidden pointer-events-none absolute top-0 right-0 h-full w-10 rounded-r-[16px]
          bg-gradient-to-l from-black/35 to-transparent
          transition-opacity duration-300
          ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Bouncing arrow hint, dismissed as soon as the user scrolls themselves */}
      {!hasScrolled && canScrollRight && (
        <div className="md:hidden pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 -mt-3">
          <ChevronRight
            size={18}
            className="text-white/70 ico-scroll-hint"
          />
        </div>
      )}
    </div>
  );
}
