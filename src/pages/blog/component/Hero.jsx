export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-up {
          opacity: 0;
          animation: hero-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div
        className="hero-fade-up flex justify-center mb-6 lg:mt-8 md:mt-6 mt-0"
        style={{ animationDelay: '0ms' }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-md transition-transform duration-300 hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#4F7DF3]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span className="text-[15px] font-semibold text-[#3F4555]">
            Blogs
          </span>
        </div>
      </div>

      <h1
        className="hero-fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left md:text-center lg:text-center mb-4 md:mb-6 lg:mb-6"
        style={{ animationDelay: '120ms' }}
      >
        Discover our <span className="text-sky-400">latest</span> news
      </h1>

      <p
        className="hero-fade-up text-[#E7E8EA] text-left md:text-center lg:text-center text-sm md:text-base lg:text-base max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-8"
        style={{ animationDelay: '240ms' }}
      >
        Discover the achievement that set us apart. Form groundbreaking projects to industry accolades, we take pride in our accomplishment.
      </p>
    </>
  );
}
