import { useEffect, useRef } from 'react';
import career1 from '../../../assets/career1.webp';
import career2 from '../../../assets/career2.webp';
import career3  from '../../../assets/career3.webp';
import career4  from '../../../assets/career4.webp';

export default function BelongGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const cards = Array.from(gallery.children);
    let currentIndex = 0;
    let autoScrollTimer = null;
    let resumeTimer = null;

    function isMobileLayout() {
      return window.matchMedia('(max-width: 767px)').matches;
    }

    function scrollToIndex(index) {
      const card = cards[index];
      if (!card) return;
      gallery.scrollTo({ left: card.offsetLeft - gallery.offsetLeft, behavior: 'smooth' });
    }

    function advance() {
      if (!isMobileLayout()) return;
      currentIndex = (currentIndex + 1) % cards.length;
      scrollToIndex(currentIndex);
    }

    function startAutoScroll() {
      stopAutoScroll();
      autoScrollTimer = setInterval(advance, 2000);
    }

    function stopAutoScroll() {
      if (autoScrollTimer) clearInterval(autoScrollTimer);
      autoScrollTimer = null;
    }

    gallery.addEventListener('touchstart', () => {
      stopAutoScroll();
      if (resumeTimer) clearTimeout(resumeTimer);
    });

    gallery.addEventListener('scroll', () => {
      const cardWidth = cards[0]?.offsetWidth || 1;
      currentIndex = Math.round(gallery.scrollLeft / cardWidth);
      currentIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));

      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(startAutoScroll, 2500);
    });

    if (isMobileLayout()) startAutoScroll();

    window.addEventListener('resize', () => {
      if (isMobileLayout()) {
        if (!autoScrollTimer) startAutoScroll();
      } else {
        stopAutoScroll();
      }
    });

    return () => {
      stopAutoScroll();
      if (resumeTimer) clearTimeout(resumeTimer);
    };
  }, []);

  return (
    <section className="max-w-[1024px] mx-auto mb-16 md:mb-10 lg:mb-16 px-4 md:px-6 lg:px-8 mt-8 md:mt-[80px] lg:mt-[90px]">
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 items-center">

        <div ref={galleryRef} id="belong-gallery" className="flex overflow-x-auto snap-x snap-mandatory gap-0 w-[calc(100%+2rem)] -mx-4 pb-2 md:w-full md:mx-0 md:gap-3 md:grid md:grid-cols-2 md:overflow-visible lg:gap-4 scrollbar-hide">
          <div className="w-full flex-shrink-0 snap-center aspect-[320/210] md:h-[130px] lg:h-[155px] rounded-none md:rounded-[12.8px] overflow-hidden shadow-md">
            <img src={career1} alt="Office environment" className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"/>
          </div>
          <div className="w-full flex-shrink-0 snap-center aspect-[320/210] md:h-[130px] lg:h-[155px] rounded-none md:rounded-[12.8px] overflow-hidden shadow-md">
            <img src={career2} alt="Team collaboration" className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"/>
          </div>
          <div className="w-full flex-shrink-0 snap-center aspect-[320/210] md:h-[130px] lg:h-[155px] rounded-none md:rounded-[12.8px] overflow-hidden shadow-md">
            <img src={career3} alt="Work space" className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"/>
          </div>
          <div className="w-full flex-shrink-0 snap-center aspect-[320/210] md:h-[130px] lg:h-[155px] rounded-none md:rounded-[12.8px] overflow-hidden shadow-md">
            <img src={career4} alt="Office culture" className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-110"/>
          </div>
        </div>

        <div className="md:pl-4 lg:pl-8">
          <p className="text-[#04A3DA] font-bold text-xs md:text-sm lg:text-lg tracking-widest uppercase mb-4">Why Us?</p>
          <h2 className="font-bold text-3xl sm:text-[36px] md:text-[28px] lg:text-[44px] leading-tight sm:leading-[42px] md:leading-[34px] lg:leading-[48px] tracking-[-0.5px] text-white mb-4">
            A Place to <span className="text-[#04A3DA]">Belong</span> <br className="hidden sm:inline"/>
            A Culture to <span className="text-[#04A3DA]">thrive</span>
          </h2>
          <p className="font-normal text-sm sm:text-[15px] md:text-[13px] lg:text-[16px] leading-relaxed tracking-[-0.5px] text-[#E7E8EA] mb-4">
            We believe great work happens when great people come together. Here's a glimpse of life at Jawam.
          </p>

          <div className="space-y-4 md:space-y-3">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#04A3DA] rounded-full shrink-0"></span>
              <div>
                <h3 className="font-normal text-sm sm:text-[15px] md:text-[13px] lg:text-[16px] leading-relaxed tracking-[-0.5px] text-[#E7E8EA]">30+ Talented Professionals</h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#04A3DA] rounded-full shrink-0"></span>
              <div>
                <h3 className="font-normal text-sm sm:text-[15px] md:text-[13px] lg:text-[16px] leading-relaxed tracking-[-0.5px] text-[#E7E8EA]">2+ Years of Excellence</h3>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-[#04A3DA] rounded-full shrink-0"></span>
              <div>
                <h3 className="font-normal text-[15px] md:text-[13px] lg:text-[16px] leading-[18px] tracking-[-0.5px] text-[#E7E8EA]">100% Employee Satisfaction</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}