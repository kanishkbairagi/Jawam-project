import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../blogData';

export default function RelatedBlogs({ currentId }) {
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);
  const resumeAutoSlideRef = useRef(null);

  const currentIndexRef = useRef(0);
  const isTouchingRef = useRef(false);

  const [activeDot, setActiveDot] = useState(0);

  const related = blogPostsData.filter(
    (p) => p.id !== Number(currentId)
  );

  const mobileBlogs = related.slice(0, 3);

  /* =========================================================
     MOBILE SLIDER
  ========================================================= */
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || mobileBlogs.length <= 1) {
      return;
    }

    const cards = Array.from(slider.children);

    /* ---------------------------------------------------------
       GO TO SLIDE
    --------------------------------------------------------- */
    const goToSlide = (index, smooth = true) => {
      if (!cards.length) return;

      let newIndex = index;

      // Loop to first slide
      if (newIndex >= cards.length) {
        newIndex = 0;
      }

      // Loop to last slide
      if (newIndex < 0) {
        newIndex = cards.length - 1;
      }

      const targetCard = cards[newIndex];

      if (!targetCard) return;

      currentIndexRef.current = newIndex;
      setActiveDot(newIndex);

      slider.scrollTo({
        left: targetCard.offsetLeft,
        behavior: smooth ? 'smooth' : 'auto',
      });
    };

    /* ---------------------------------------------------------
       START AUTOPLAY
    --------------------------------------------------------- */
    const startAutoSlide = () => {
      clearInterval(autoSlideRef.current);

      autoSlideRef.current = setInterval(() => {
        if (!isTouchingRef.current) {
          goToSlide(currentIndexRef.current + 1);
        }
      }, 3500);
    };

    /* ---------------------------------------------------------
       STOP AUTOPLAY
    --------------------------------------------------------- */
    const stopAutoSlide = () => {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    };

    /* ---------------------------------------------------------
       TOUCH START
    --------------------------------------------------------- */
    const handleTouchStart = () => {
      isTouchingRef.current = true;

      stopAutoSlide();

      clearTimeout(resumeAutoSlideRef.current);
    };

    /* ---------------------------------------------------------
       TOUCH END
    --------------------------------------------------------- */
    const handleTouchEnd = () => {
      isTouchingRef.current = false;

      clearTimeout(resumeAutoSlideRef.current);

      // Wait a little after swipe before restarting autoplay
      resumeAutoSlideRef.current = setTimeout(() => {
        startAutoSlide();
      }, 1500);
    };

    /* ---------------------------------------------------------
       SCROLL
       Detect the card closest to the current scroll position
    --------------------------------------------------------- */
    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft;

      let closestIndex = 0;
      let smallestDistance = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - scrollLeft);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      currentIndexRef.current = closestIndex;
      setActiveDot(closestIndex);
    };

    /* ---------------------------------------------------------
       EVENT LISTENERS
    --------------------------------------------------------- */
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });

    slider.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    });

    slider.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    /* ---------------------------------------------------------
       START AUTOPLAY
    --------------------------------------------------------- */
    startAutoSlide();

    /* ---------------------------------------------------------
       CLEANUP
    --------------------------------------------------------- */
    return () => {
      stopAutoSlide();

      clearTimeout(resumeAutoSlideRef.current);

      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, [currentId, mobileBlogs.length]);

  /* =========================================================
     DOT CLICK
  ========================================================= */
  const handleDotClick = (index) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.children[index];

    if (!card) return;

    clearInterval(autoSlideRef.current);
    clearTimeout(resumeAutoSlideRef.current);

    currentIndexRef.current = index;
    setActiveDot(index);

    slider.scrollTo({
      left: card.offsetLeft,
      behavior: 'smooth',
    });

    // Restart autoplay after user selects a dot
    resumeAutoSlideRef.current = setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        const currentIndex = currentIndexRef.current;
        const nextIndex =
          currentIndex + 1 >= mobileBlogs.length
            ? 0
            : currentIndex + 1;

        const nextCard = slider.children[nextIndex];

        if (!nextCard) return;

        currentIndexRef.current = nextIndex;
        setActiveDot(nextIndex);

        slider.scrollTo({
          left: nextCard.offsetLeft,
          behavior: 'smooth',
        });
      }, 3500);
    }, 1500);
  };

  return (
    <div className="mb-12 max-w-[1030px] mx-auto mt-[-20px] md:mt-[-30px]">

      {/* =====================================================
          HEADING & HEADER ACTION
      ====================================================== */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="font-bold text-white text-left text-[28px] sm:text-[34px] leading-tight tracking-tight">
          Related{' '}
          <span className="text-[#04A3DA]">
            Blogs
          </span>
        </h2>

        <Link
          to="/blog#blog-grid"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-400/40 bg-sky-500/10 hover:bg-[#04A3DA] text-sky-300 hover:text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-sky-500/25 group"
        >
          <span>See More</span>
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* =====================================================
          MOBILE SLIDER
      ====================================================== */}
      <div className="sm:hidden">

        <div
          ref={sliderRef}
          className="
            flex
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-hide
            overscroll-x-contain
            touch-pan-x
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollBehavior: 'smooth',
          }}
        >
          {mobileBlogs.map((item) => (
            <Link
              key={item.id}
              to={`/blog-post?id=${item.id}`}
              state={{ postId: item.id }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="
                blog-card
                flex-shrink-0
                w-full
                snap-center
                hover:border-sky-400/30
                transition-all
                border
                border-white/10
                rounded-lg
                overflow-hidden
                block
                bg-slate-800/40
              "
              style={{
                padding: '12px 14px',
              }}
            >
              {/* Blog information */}
              <div className="mb-3">

                <p className="text-[#E7E8EA] text-xs mb-3 text-left">
                  {item.date} : {item.category}
                </p>

                <h3 className="text-white text-base mb-3 text-left leading-snug">
                  {item.title}
                </h3>

              </div>

              {/* Blog image */}
              <div
                className="relative"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '280/239',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-md
                  "
                />
              </div>
            </Link>
          ))}
        </div>

        {/* ===================================================
            MOBILE DOTS
        ==================================================== */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-6">

          {mobileBlogs.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to related blog ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  activeDot === index
                    ? 'w-5 bg-sky-400'
                    : 'w-2 bg-white/30'
                }
              `}
            />
          ))}

        </div>
      </div>

      {/* =====================================================
          DESKTOP GRID
      ====================================================== */}
      <div className="hidden sm:block max-w-[1030px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {related.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              to={`/blog-post?id=${item.id}`}
              state={{ postId: item.id }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="
                blog-card
                hover:border-sky-400/50
                transition-all
                border
                border-white/10
                rounded-xl
                overflow-hidden
                block
                bg-slate-800/40
                hover:-translate-y-1.5
                duration-300
                shadow-sm
                hover:shadow-md
                hover:shadow-sky-500/10
              "
              style={{
                padding: '14px',
              }}
            >

              {/* Blog information */}
              <div className="mb-3">

                <p className="text-[#E7E8EA] text-xs mb-2.5 text-left font-medium">
                  {item.date} : {item.category}
                </p>

                <h3 className="
                  text-white
                  text-[15px]
                  font-semibold
                  mb-2
                  text-left
                  line-clamp-2
                  min-h-[44px]
                  leading-snug
                ">
                  {item.title}
                </h3>

              </div>

              {/* Blog image */}
              <div
                className="
                  relative
                  rounded-lg
                  overflow-hidden
                "
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '280/210',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

            </Link>
          ))}

        </div>

      </div>

    </div>
  );
}