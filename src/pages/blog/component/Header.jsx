import { Link } from 'react-router-dom';
import robothand from '../../../assets/robothand.webp';

export default function Header({ post }) {
  const title = post?.title || 'AI & Machine Learning – Driving Smarter Decisions';
  const date = post?.date || 'Aug 26, 2026';
  const category = post?.category || 'Research';
  const author = post?.author || 'Jawam Team';
  const image = post?.image || robothand;

  return (
    <>
      <style>{`
        @keyframes headerFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerImageReveal {
          from { opacity: 0; transform: scale(1.06); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes headerLineGrow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .header-fade-up {
          opacity: 0;
          animation: headerFadeUp 0.6s ease-out forwards;
        }
        .header-image {
          opacity: 0;
          animation: headerImageReveal 0.8s ease-out forwards;
        }
        .header-line {
          transform-origin: left center;
          animation: headerLineGrow 0.9s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .header-fade-up, .header-image, .header-line {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Back to Blogs */}
      <div className="header-fade-up hidden sm:block mb-8 text-left max-w-[1050px] mx-auto" style={{ animationDelay: '0ms' }}>
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-white hover:text-sky-300 transition-colors text-sm font-medium"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Blogs
        </Link>
      </div>

      {/* Blog Header */}
      <div className="mb-8">
        <p
          className="header-fade-up mb-5 text-white text-xs md:text-[16px] font-normal leading-[28px] tracking-[-0.5px] mt-[-45px] md:mt-[-30px]"
          style={{ animationDelay: '100ms' }}
        >
          {date} : {category}
        </p>
        <h1
          className="header-fade-up mb-4 font-extrabold text-2xl sm:text-3xl md:text-[45px] lg:text-[45px] leading-tight md:leading-[55px] tracking-[-0.5px] text-center text-white max-w-[950px] mx-auto"
          style={{ animationDelay: '220ms' }}
        >
          {title}
        </h1>

        <div className="header-fade-up flex items-center justify-center gap-2 mt-4" style={{ animationDelay: '340ms' }}>
          <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#04A3DA]"></div>
          <span className="text-[#E7E8EA] font-normal text-sm md:text-[18px] leading-[28px] tracking-[-0.5px]">
            {author}
          </span>
        </div>
      </div>

      <div
        className="header-image mb-10 mt-[-10px] w-full max-w-[370px] h-[223.56px] rounded-[11.32px] overflow-hidden mx-auto sm:w-full sm:h-[398px] sm:max-w-[1050px] sm:rounded-xl"
        style={{ animationDelay: '400ms' }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-[11.32px] sm:rounded-xl transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>

      {/* Gradient line */}
      <div
        className="header-line w-full max-w-[1150px] h-[2px] mx-auto rounded-sm mb-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-[-15px] md:mt-0 hover:from-[#04A3DA] hover:to-[#04A3DA] transition-all duration-300"
        style={{ animationDelay: '650ms' }}
      ></div>
    </>
  );
}
