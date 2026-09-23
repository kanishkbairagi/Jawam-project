import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import '../services.css';
import {
  Code2,
  Globe,
  Smartphone,
  Pencil,
  BrainCircuit,
  Cloud,
  Settings,
  Plug,
  Layers,
  FlaskConical,
  BarChart3,
  Users,
  Search,
  UserCog,
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const services = [
  { icon: Code2,       title: 'Software Development',    path: '/services/vision' },
  { icon: Globe,       title: 'Web Development',         path: '/services/vision2' },
  { icon: Smartphone,  title: 'Mobile App Development',  path: '/services/vision3' },
  { icon: Pencil,      title: 'UI/UX Design',            path: '/services/vision4' },
  { icon: BrainCircuit,title: 'Artificial Intelligence', path: '/services/vision5' },
  { icon: Cloud,       title: 'DevOps and Cloud',        path: '/services/vision6' },
  { icon: Settings,    title: 'Custom Software',         path: '/services/vision7' },
  { icon: Plug,        title: 'Third-party Integration', path: '/services/vision8' },
  { icon: Layers,      title: 'Full Stack Development',  path: '/services/vision9' },
  { icon: FlaskConical,title: 'QA and Testing',          path: '/services/vision10' },
  { icon: BarChart3,   title: 'Data Analytics',          path: '/services/vision11' },
  { icon: Users,       title: 'CRM Customization',       path: '/services/vision12' },
  { icon: Search,      title: 'SEO/SMO',                 path: '/services/vision13' },
  { icon: UserCog,     title: 'IT Staff Augmentation',   path: '/services/vision14' },
  { icon: Database,    title: 'Data Engineering',        path: '/services/vision15' },
];

const glassPanelStyle = {
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
};

const MORPH_SCROLL_VH = 70;

const COLLAPSED_HEIGHT = {
  base: 130,
  sm: 150,
  md: 170,
};

export default function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const trackRef = useRef(null);
  const gridInnerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [gridHeight, setGridHeight] = useState(null);
  const [collapsedTarget, setCollapsedTarget] = useState(COLLAPSED_HEIGHT.base);
  const [isMobile, setIsMobile] = useState(false);

  const scrollTabs = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction * 240, behavior: 'smooth' });
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    navigate(services[index].path);
    // Wait for ScrollToTop + render, then scroll to vision section
    setTimeout(() => {
      const el = document.getElementById('vision-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  useEffect(() => {
    const measureSizes = () => {
      if (gridInnerRef.current) setGridHeight(gridInnerRef.current.offsetHeight);
      const w = window.innerWidth;
      // Below lg (1024px): show the collapsed carousel only (mobile + tablet),
      // never the scroll-driven grid morph. Only true desktop (lg+) gets the morph.
      setIsMobile(w < 1024);
      if (w >= 768) setCollapsedTarget(COLLAPSED_HEIGHT.md);
      else if (w >= 640) setCollapsedTarget(COLLAPSED_HEIGHT.sm);
      else setCollapsedTarget(COLLAPSED_HEIGHT.base);
    };
    measureSizes();
    window.addEventListener('resize', measureSizes);
    return () => window.removeEventListener('resize', measureSizes);
  }, []);

  useEffect(() => {
    // Desktop only: drives the scroll-linked grid -> carousel morph.
    // On mobile/tablet trackRef is never mounted (grid isn't rendered there),
    // so this safely no-ops via the `if (!el) return;` below.
    let ticking = false;

    const measureScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      const raw = scrolled / scrollable;
      const delayedProgress = Math.max(0, (raw - 0.2) / 0.8); // waits until 20% scrolled before starting
      setProgress(delayedProgress);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        measureScroll();
        ticking = false;
      });
    };

    measureScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const gh = gridHeight ?? 420;
  const ch = collapsedTarget;

  const wrapperHeight = gh - progress * (gh - ch);
  const gridScale = wrapperHeight / gh;

  const paddingPx = 32 - progress * 20;
  const iconScale = 1 - progress * 0.15;

  const gridWrapperStyle = {
    height: `${wrapperHeight}px`,
    overflow: 'visible',
    opacity: Math.max(0, 1 - progress / 0.7),
    pointerEvents: progress > 0.5 ? 'none' : 'auto',
    transition: 'opacity 0.05s linear',
  };

  const gridInnerStyle = {
    transform: `scale(${gridScale})`,
    transformOrigin: 'top center',
    transition: 'transform 0.05s linear',
  };

  const carouselWrapperStyle = {
    height: `${ch}px`,
    padding: `${paddingPx}px`,
    opacity: Math.min(1, Math.max(0, (progress - 0.3) / 0.7)),
    transform: `translateY(${progress * 24}px) scale(${0.92 + progress * 0.08})`,
    pointerEvents: progress < 0.65 ? 'none' : 'auto',
    transition: 'opacity 0.05s linear, transform 0.05s linear, padding 0.05s linear',
  };

  const stackContainerStyle = { display: 'grid', gridTemplateAreas: '"stack"' };

  const gridCardOuterStyle = { gridArea: 'stack', zIndex: progress < 0.5 ? 2 : 1, ...gridWrapperStyle };

  const carouselCardOuterStyle = {
    gridArea: 'stack',
    zIndex: progress >= 0.5 ? 2 : 1,
    ...glassPanelStyle,
    ...carouselWrapperStyle,
  };

  // Static styling for the mobile/tablet collapsed carousel — no scroll-linked
  // morph, it always renders in the "fully collapsed" look (matches image 1).
  const mobileCarouselStyle = {
    ...glassPanelStyle,
    height: `${collapsedTarget}px`,
    padding: '12px',
  };
  const mobileIconBoxSize = '33.6px'; // same value the desktop formula settles on at progress=1

  return (
    <div className="lg:mt-[155px] mt-2 md:mt-8 lg:mb-[-25px]">
      <style>{`
        @keyframes iconFloatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        /* Ambient idle bobbing on the grid icons — runs continuously,
           staggered per-item via inline animationDelay, so the whole
           grid feels alive even before anyone hovers. */
        .icon-float-idle {
          animation: iconFloatIdle 2s ease-in-out infinite;
          will-change: transform;
        }
        /* Pause the idle float while a card is hovered so it doesn't
           fight with the existing hover scale transform in services.css. */
        .group\\/card:hover .icon-float-idle {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .icon-float-idle {
            animation: none;
          }
        }
      `}</style>
      <section id="services-cards" className="px-4 py-0 lg:mt-[-100px] mt-8 md:mt-0 scroll-mt-4 md:scroll-mt-[50px] lg:scroll-mt-[-100px]">
        <div className="max-w-[1100px] mx-auto mt-8 lg:mt-0 md:mt-0">
          <h2 className="cards-heading font-bold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[44px] lg:max-w-[700px] md:max-w-[600px] leading-[30px] sm:leading-[34px] md:leading-[42px] lg:leading-[48px] tracking-[-0.5px] text-center mb-6 sm:mb-8 mx-auto text-white">
            Turning <span className="text-sky-400">complex ideas</span> into seamless <span className="text-sky-400">digital experiences</span>
          </h2>

          {isMobile ? (
            /* MOBILE + TABLET: collapsed carousel only — the grid never renders here */
            <div className="mt-[10px] ">
              <div
                className="relative flex  items-center justify-between gap-1 rounded-[20px] shadow-2xl overflow-hidden border border-[#BDBDBDB0] bg-[linear-gradient(180deg,_rgba(177,226,244,0.2)_0%,_rgba(255,255,255,0.2)_100%)]"
                style={mobileCarouselStyle}
              >
                <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-sky-400/15 blur-[90px] pointer-events-none"></div>
                <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-sky-400/10 blur-[90px] pointer-events-none"></div>

                <button
                  onClick={() => scrollTabs(-1)}
                  className="nav-arrow-btn relative  shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-slate-300 hover:text-white z-10"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div
                  ref={scrollRef}
                  className="relative flex items-start justify-start gap-3 overflow-x-auto scroll-smooth w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] px-1"
                >
                  {services.map((service, index) => {
                    const IconComp = service.icon;
                    const isActive = activeIndex === index;
                    return (
                      <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`flex flex-col items-center text-center gap-1.5 shrink-0 cursor-pointer w-[88px] py-1 px-1 rounded-xl hover:bg-white/5 ${
                          isActive ? 'is-active' : ''
                        }`}
                      >
                        <div
                          className={`service-icon-box rounded-lg flex items-center justify-center shrink-0 shadow-md transition-colors duration-300 ${
                            isActive ? 'bg-sky-400' : 'bg-white'
                          }`}
                          style={{ width: mobileIconBoxSize, height: mobileIconBoxSize }}
                        >
                          <IconComp className="w-4 h-4 text-[#0F172A]" />
                        </div>
                        <span
                          className={`service-label text-[10px] font-medium leading-tight transition-colors duration-300 min-h-[26px] flex items-start justify-center text-center ${
                            isActive ? 'text-sky-400 is-active-label' : 'text-white'
                          }`}
                        >
                          {service.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => scrollTabs(1)}
                  className="nav-arrow-btn relative shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-slate-300 hover:text-white z-10"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          ) : (
            /* DESKTOP ONLY (lg+): original scroll-driven grid -> carousel morph, untouched */
            <div ref={trackRef} className="lg:mb-[-0px] lg:mt-[-30px] md:mt-[0px] md:mb-[150px] overflow-visible mt-[0]" style={{ height: `${MORPH_SCROLL_VH}vh` }}>
              <div className="sticky top-16 md:top-[800px] lg:top-[1020px] ">
                <div className="relative" style={stackContainerStyle}>

                  {/* GRID CARD */}
                  <div
                    className="rounded-[20px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[32px] overflow-visible"
                    style={gridCardOuterStyle}
                  >
                    <div
                      ref={gridInnerRef}
                      className="lg:mt-0 mt-[-10px] md:max-w-[700px] lg:max-w-[1100px] md:mx-auto relative rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden border border-[#BDBDBDB0] bg-[linear-gradient(180deg,_rgba(177,226,244,0.2)_0%,_rgba(255,255,255,0.2)_100%)]"
                      style={{ ...glassPanelStyle, ...gridInnerStyle }}
                    >
                      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-sky-400/20 blur-[100px] pointer-events-none"></div>
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-sky-400/10 blur-[100px] pointer-events-none"></div>

                      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
                        {services.map((service, index) => {
                          const IconComp = service.icon;
                          return (
                            <div
                              key={index}
                              onClick={() => handleClick(index)}
                              className="service-card-anim group/card flex flex-col items-center text-center gap-2 sm:gap-3 py-3 sm:py-4 px-1 sm:px-2 rounded-xl sm:rounded-2xl hover:bg-white/5 transition-all cursor-pointer"
                              style={{ animationDelay: `${index * 0.06}s` }}
                            >
                              <div
                                className="service-icon-box icon-float-idle w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 shadow-md"
                                style={{ animationDelay: `${(index % 5) * 0.35}s` }}
                              >
                                <IconComp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F172A]" />
                              </div>
                              <span className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-tight">
                                {service.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* CAROUSEL CARD */}
                  <div
                    className="md:max-w-[700px] lg:max-w-[1100px] md:mx-auto relative flex items-center justify-between gap-1 sm:gap-2 rounded-[20px] sm:rounded-[28px] lg:rounded-[32px] shadow-2xl overflow-hidden border border-[#BDBDBDB0] bg-[linear-gradient(180deg,_rgba(177,226,244,0.2)_0%,_rgba(255,255,255,0.2)_100%)]"
                    style={carouselCardOuterStyle}
                  >
                    <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-sky-400/15 blur-[90px] pointer-events-none"></div>
                    <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-sky-400/10 blur-[90px] pointer-events-none"></div>

                    <button
                      onClick={() => scrollTabs(-1)}
                      className="nav-arrow-btn relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-slate-300 hover:text-white z-10"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    <div
                      ref={scrollRef}
                      className="relative flex items-start sm:justify-between gap-3 sm:gap-4 md:gap-6 overflow-x-auto scroll-smooth w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] px-1 sm:px-2 pt-1"
                    >
                      {services.map((service, index) => {
                        const IconComp = service.icon;
                        const isActive = activeIndex === index;
                        return (
                          <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`flex flex-col items-center text-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer w-[88px] sm:w-[120px] md:w-[160px] py-1 px-1 sm:px-2 rounded-xl sm:rounded-2xl hover:bg-white/5 ${
                              isActive ? 'is-active' : ''
                            }`}
                          >
                            <div
                              className={`service-icon-box rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 shadow-md transition-colors duration-300 ${
                                isActive ? 'bg-sky-400' : 'bg-white'
                              }`}
                              style={{
                                width: `${(2.5 - progress * 0.4) * 16}px`,
                                height: `${(2.5 - progress * 0.4) * 16}px`,
                                transform: `scale(${iconScale})`,
                              }}
                            >
                              <IconComp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#0F172A]" />
                            </div>
                            <span
                              className={`service-label text-[10px] sm:text-xs md:text-sm font-medium leading-tight transition-colors duration-300 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] flex items-start justify-center text-center ${
                                isActive ? 'text-sky-400 is-active-label' : 'text-white'
                              }`}
                            >
                              {service.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => scrollTabs(1)}
                      className="nav-arrow-btn relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-slate-300 hover:text-white z-10"
                      aria-label="Scroll right"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}