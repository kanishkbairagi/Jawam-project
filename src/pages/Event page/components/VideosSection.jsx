import React, { useRef, useState } from 'react';
import office from '../../../assets/office.webp';
import eventsvideo from '../../../assets/Events-Images/eventsvideo.mp4';

const VideosSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Video element mounts on this same render, so give it a tick before
    // calling play() — the ref won't be attached yet on the very first paint.
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  return (
    <section className="py-2 md:py-4 lg:py-24 px-4 md:px-6 mt-0 md:mt-[-80px] mb-0 md:mb-[80px] lg:mb-0 relative z-10">
      <div className="max-w-[1000px] mx-auto">
        <div className="bg-[#0a1525] border border-white/10 rounded-[16px] md:rounded-[20px] lg:rounded-[24px] mx-auto overflow-hidden flex flex-col p-6 md:p-6 lg:p-12">

          {/* Header */}
          <div className="text-center mb-6 lg:mb-8">
            <p className="font-semibold text-sm lg:text-[16px] text-[#04A3DA] mb-3">
              Videos
            </p>
            <h3 className="font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight tracking-[-0.5px] text-white mb-3">
              IndiaSoft in <span className="text-sky-400">Motion</span>
            </h3>
            <p className="font-normal text-sm lg:text-[16px] text-white/70 max-w-xl mx-auto">
              Watch Highlights, interacting, and key moments for our participation across different IndiaSoft edition
            </p>
          </div>

          {/* Video Player */}
          <div className="relative w-full rounded-[16px] overflow-hidden aspect-video">
            {isPlaying ? (
              <video
                ref={videoRef}
                src={eventsvideo}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <img
                  src={office}
                  alt="IndiaSoft 2025 Highlights"
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlayClick}
                    aria-label="Play video"
                    className="w-14 h-14 lg:w-16 lg:h-16 bg-sky-400/90 hover:bg-sky-400 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
                  >
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideosSection;
