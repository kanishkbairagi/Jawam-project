import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../blogData';

export default function FeaturedPost() {
  const featuredPosts = blogPostsData;
  const realCount = featuredPosts.length;

  const extendedPosts = [
    featuredPosts[realCount - 1],
    ...featuredPosts,
    featuredPosts[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const isAnimating = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeDot =
    ((currentIndex - 1) % realCount + realCount) % realCount;

  /* ----------------------------------
     PRELOAD ALL IMAGES
  ----------------------------------- */
  useEffect(() => {
    const preloadImages = featuredPosts.map((post) => {
      const img = new Image();
      img.src = post.image;

      // Force browser to decode image beforehand when supported
      if (img.decode) {
        img.decode().catch(() => {});
      }

      return img;
    });

    return () => {
      preloadImages.forEach((img) => {
        img.src = '';
      });
    };
  }, []);

  /* ----------------------------------
     NEXT SLIDE
  ----------------------------------- */
  const handleNext = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  /* ----------------------------------
     PREVIOUS SLIDE
  ----------------------------------- */
  const handlePrev = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  /* ----------------------------------
     AUTO PLAY
  ----------------------------------- */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!isAnimating.current) {
        handleNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ----------------------------------
     TRANSITION FINISHED
  ----------------------------------- */
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;

    // Reached cloned first slide
    if (currentIndex === extendedPosts.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);

      /*
       Double requestAnimationFrame gives browser enough
       time to perform invisible jump before restoring transition
      */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isAnimating.current = false;
        });
      });

      return;
    }

    // Reached cloned last slide
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(realCount);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          isAnimating.current = false;
        });
      });

      return;
    }

    // Normal slide completed
    isAnimating.current = false;
  };

  /* ----------------------------------
     DOT NAVIGATION
  ----------------------------------- */
  const goToDot = (dotIndex) => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex(dotIndex + 1);
  };

  /* ----------------------------------
     TOUCH
  ----------------------------------- */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      className="
       mb-[-20px] lg:mb-0 md:mb-0
        relative
        w-full
        md:max-w-[640px]
        lg:max-w-[980px]
        mx-auto
        mb-10
        select-none
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          shadow-md
          border
          border-slate-100/20
        "
      >
        <div
          className={`flex will-change-transform ${
            isTransitioning
              ? 'transition-transform duration-500 ease-in-out'
              : ''
          }`}
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedPosts.map((post, i) => (
            <div
              key={`${post.id}-${i}`}
              className="
                w-full
                flex-shrink-0
                flex
                flex-col
                sm:flex-row
              "
            >
              {/* Image */}
              <div
                className="
                  w-full
                  sm:w-1/2
                  h-40
                  lg:h-[300px]
                  md:h-[290px]
                  overflow-hidden
                "
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="eager"
                  decoding="async"
                  draggable="false"
                  className="
                    w-full
                    h-full
                    object-cover
                    pointer-events-none
                  "
                />
              </div>

              {/* Content */}
              <div
                className="
                  w-full
                  sm:w-1/2
                  p-5
                  sm:p-6
                  flex
                  flex-col
                  justify-center
                  space-y-6
                "
              >
                <h2
                  className="
                    text-[#00A3FF]
                    text-[16px]
                    md:text-[18px]
                    lg:text-[22px]
                    font-bold
                    mb-0
                    leading-snug
                  "
                >
                  {post.title}
                </h2>

                <p
                  className="
                    text-white
                    text-xs
                    md:text-[13.5px]
                    lg:text-[14px]
                    mt-[-15px]
                    leading-relaxed
                    mb-8
                  "
                >
                  {post.description}
                </p>

                <Link
                  to={`/blog-post?id=${post.id}`}
                  state={{ postId: post.id }}
                  className="
                    self-start
                    w-fit
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    px-4
                    py-2
                    rounded-full
                    bg-[#8799AA]
                    border
                    border-[#B8C4CF]
                    text-white
                    text-[12px]
                    font-normal
                    leading-none
                    transition-all
                    duration-300
                    hover:bg-[#7A8D9F]
                    group
                  "
                >
                  <span>Read More</span>

                  <span
                    className="
                      text-[14px]
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5">
        {featuredPosts.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              transition-all
              duration-300
              rounded-full
              h-1.5
              ${
                i === activeDot
                  ? 'w-5 bg-[#00A3FF]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
