import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pocket from '../../../assets/pocket.png';
import feedops from '../../../assets/feedops.png';
import hireramp from '../../../assets/hireramp.png';

const PortfolioSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const slider = document.getElementById('portfolio-slider');
    if (!slider) return;

    let autoScrollTimer = null;
    let resumeTimer = null;

    function updateActiveCard() {
      const cards = slider.children;
      if (!cards.length) return;
      const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
      let closestCard = null;
      let closestDistance = Infinity;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - sliderCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
        card.classList.remove('is-active');
      }
      if (closestCard) closestCard.classList.add('is-active');
    }

    function startAutoScroll() {
      if (window.innerWidth >= 768) return;
      stopAutoScroll();
      autoScrollTimer = setInterval(() => {
        const cards = slider.children;
        if (!cards.length) return;
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(slider).columnGap || 20);
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (slider.scrollLeft >= maxScroll - 5) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }, 2000);
    }

    function stopAutoScroll() {
      if (autoScrollTimer) clearInterval(autoScrollTimer);
    }

    const onScroll = () => {
      window.requestAnimationFrame(updateActiveCard);
    };

    const onTouchStart = () => {
      stopAutoScroll();
      clearTimeout(resumeTimer);
    };

    const onTouchEnd = () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(startAutoScroll, 3000);
    };

    const onResize = () => {
      startAutoScroll();
      updateActiveCard();
    };

    slider.addEventListener('scroll', onScroll);
    slider.addEventListener('touchstart', onTouchStart);
    slider.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    updateActiveCard();
    startAutoScroll();

    return () => {
      stopAutoScroll();
      clearTimeout(resumeTimer);
      slider.removeEventListener('scroll', onScroll);
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="py-12 md:py-0 mb-12 md:mb-0 md:pb-16 lg:pb-16 pb-0 lg:py-24 px-4 max-w-[950px] mx-auto">
      <div className="text-center mb-2 md:mb-12">
        <p className="font-semibold text-[15px] md:text-[18px] leading-[18px] tracking-[0] text-center text-[#04A3DA] mb-0 md:mb-2">PORTFOLIO</p>
        <h2 className="font-bold text-[24px] md:text-[44px] leading-[48px] tracking-[-0.5px] text-center">
          Explore our <span className="text-sky-400">Portfolio</span>
        </h2>
      </div>

      <div id="portfolio-slider" className="mt-0 md:mt-[-30px] lg:mt-0 flex overflow-x-auto snap-x snap-mandatory md:overflow-visible md:snap-none md:grid md:grid-cols-3 gap-5 md:gap-[20px]  px-4 md:px-0 -mx-4 md:mx-0">

        {/* Card 1 */}
        <div
          onClick={() => navigate('/case-study')}
          className="portfolio-card group w-[95%] flex-shrink-0 snap-center md:w-auto md:flex-shrink bg-/[0.01]  hover:border-sky-400/30 transition-all border border-white/10 cursor-pointer"
          style={{ padding: '11px 14px' }}
        >
          <div className="mb-3">
            <p className="font-semibold text-[12px] leading-[14px] tracking-[0] text-white mb-5">Industry: Mobile &amp; Device Diagnostics</p>
            <h3 className="font-normal text-[18px] leading-[20px] tracking-[-0.5px] text-white">Pocket Geek Diagnostics App</h3>
          </div>
          <div className="relative p-1" style={{ width: '100%', aspectRatio: '280/239', overflow: 'hidden' }}>
            <img src={pocket} alt="Pocket Geek Diagnostics App" className="portfolio-img w-full h-full object-cover object-center"/>
            <div className="case-study-overlay absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/case-study');
                }}
                className="case-study-btn px-5 py-2 text-sm font-semibold text-white rounded-full border border-sky-400/60 bg-sky-500/20 backdrop-blur-sm hover:bg-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(4,163,218,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => navigate('/case-study/feedops')}
          className="portfolio-card group w-[95%] flex-shrink-0 snap-center md:w-auto md:flex-shrink bg-slate-/[0.01]  hover:border-sky-400/30 transition-all border border-white/10 cursor-pointer"
          style={{ padding: '11px 14px' }}
        >
          <div className="mb-3">
            <p className="font-semibold text-[12px] leading-[14px] tracking-[0] text-white mb-5">Industry: E-Commerce &amp; Retail Tech</p>
            <h3 className="font-normal text-[18px] leading-[20px] tracking-[-0.5px] text-white">FeedOps Product Feed Platform</h3>
          </div>
          <div className="relative p-1" style={{ width: '100%', aspectRatio: '280/239', overflow: 'hidden' }}>
            <img src={feedops} alt="FeedOps Product Feed Platform" className="portfolio-img w-full h-full object-cover object-top"/>
            <div className="case-study-overlay absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/case-study/feedops');
                }}
                className="case-study-btn px-5 py-2 text-sm font-semibold text-white rounded-full border border-sky-400/60 bg-sky-500/20 backdrop-blur-sm hover:bg-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(4,163,218,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => navigate('/case-study/hireramp')}
          className="portfolio-card group w-[95%] flex-shrink-0 snap-center md:w-auto md:flex-shrink bg-slate-/[0.01]  hover:border-sky-400/30 transition-all border border-white/10 cursor-pointer"
          style={{ padding: '11px 14px' }}
        >
          <div className="mb-3">
            <p className="font-semibold text-[12px] leading-[14px] tracking-[0] text-white mb-5">Industry: HR Tech &amp; Recruitment</p>
            <h3 className="font-normal text-[18px] leading-[20px] tracking-[-0.5px] text-white">HireRamp AI Hiring Platform</h3>
          </div>
          <div className="relative p-1" style={{ width: '100%', aspectRatio: '280/239', overflow: 'hidden' }}>
            <img src={hireramp} alt="HireRamp AI Hiring Platform" className="portfolio-img w-full h-full object-cover object-top"/>
            <div className="case-study-overlay absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/case-study/hireramp');
                }}
                className="case-study-btn px-5 py-2 text-sm font-semibold text-white rounded-full border border-sky-400/60 bg-sky-500/20 backdrop-blur-sm hover:bg-sky-500/40 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(4,163,218,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Case Study
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
