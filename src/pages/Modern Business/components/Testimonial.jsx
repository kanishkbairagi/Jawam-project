import { useEffect, useState } from "react";
import uncle from '../../../assets/uncle.webp';
import geeta from '../../../assets/geeta.jpg';
import rajesh from '../../../assets/rajesh.jpg';
import amol from '../../../assets/amol.jpg';

const testimonials = [
  {
    id: 1,
    text: `“Had a fantastic experience working with Jawam Infotech on our website design. Their team was professional, creative, and highly responsive. The final site looks modern, works flawlessly across devices, and truly reflects our brand. I'd highly recommend their services to anyone looking for top-notch website design.”`,
    name: "Geeta Borikar",
    role: "Founder",
    img: geeta,
  },
  {
    id: 2,
    text: `“Partnering with Jawam Infotech has truly elevated our projects at Dev Lab Alliance. Their deep technical skills, sharp understanding, and reliable delivery made a strong impact on our workflows. A tech partner we trust and look forward to working with again.”`,
    name: "Sanjeev Kumar",
    role: "Founder & CEO",
    img: uncle,
  },
  {
    id: 3,
    text: `“Collaborating with Jawam Infotech for Pure Technology has been a seamless and rewarding experience. Their sales and technical teams were proactive, well-aligned, and delivered excellent results with innovation and speed. A truly reliable and dedicated partner we look forward to many more successful projects together.”`,
    name: "Rajesh Munde",
    role: "Founder & CEO",
    img: rajesh,
  },
  {
    id: 4,
    text: `“Jawam Infotech brought clarity and creativity to our project at Infinitive. Their team crafted a user-focused website with precision, innovation, and clear milestones. The process was smooth, collaborative, and we'd be happy to collaborate with them again on future projects.”`,
    name: "Amol Choudhary",
    role: "Founder & CEO",
    img: amol,
  },
];

// Anything narrower than this counts as "mobile" for autoplay timing —
// matches the breakpoint (lg) where the card layout itself switches from
// showing only the active card to showing the full left/right/behind stack.
const MOBILE_BREAKPOINT = 1024;

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  // Track viewport width so autoplay speed can differ by device without
  // touching anything else about desktop's layout or timing.
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handleChange = (e) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const autoplayDuration = isMobile ? 2000 : 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, autoplayDuration);

    return () => clearInterval(interval);
  }, [autoplayDuration]);

  return (
     <section
      className="
      w-full py-6 bg-[#0F172A] overflow-visible
      sm:py-8
      md:py-10
      lg:py-12
      
      px-0
      
      md:px-6
      lg:px-8
      "
    >
      {/* MAIN CONTAINER */}
      <div className=" max-w-[1150px] md:mt-[-60px] lg:mt-[-50px] mt-[-40px]  lg:mb-[10px] md:mb-[50px] mb-[10px]  mx-auto">

        {/* HEADING */}
        <div className="text-center lg:mb-10 mb-0 md:mb-[50px]">
          <p className="font-semibold text-[#04A3DA] text-[13px] md:text-[14px] lg:text-[16px] uppercase">
            WORDS OF PRAISE
          </p>

          <h2 className="mt-2 font-bold text-[18px] sm:text-[30px] md:text-[36px] lg:text-[44px] lg:leading-[40px] md:leading-[35px] text-white max-w-[920px] mx-auto leading-tight">
            Client stories that{" "}
            <span className="text-[#04A3DA]">
              inspire & <br className="hidden sm:block" />
              validate
            </span>
          </h2>
        </div>

        {/* CARDS WRAPPER */}
        <div className="relative mt-6 lg:mt-10 sm:mt-8 flex md:mt-[30px] lg:mt-[0px] mt-[15px] items-center justify-center min-h-[380px] sm:min-h-[420px] md:min-h-[380px] lg:min-h-[470px] overflow-visible">

          {testimonials.map((item, index) => {
            const isActive = index === active;

            // How far this card sits from the active one, going forward
            // (0 = active, 1 = next-up-on-the-right, length-1 = the one
            // that just left on the left, etc). Autoplay always advances
            // by +1, so this stays consistent every cycle.
            const relOffset =
              (index - active + testimonials.length) % testimonials.length;

   let positionClass = "hidden"; // fallback for 5+ item edge cases

/* LEFT */
if (index === (active - 1 + testimonials.length) % testimonials.length) {
  positionClass = `
    md:block
    bg-[#FFFFFF1A]
    md:-translate-x-[240px]
    md:scale-[0.72]
    md:opacity-90
    lg:block
    lg:-translate-x-[380px]
    xl:-translate-x-[420px]
    2xl:-translate-x-[460px]
    lg:scale-[0.82]
    lg:opacity-100
    z-10
  `;
}

/* ACTIVE */
if (isActive) {
  positionClass = `
    z-30
    translate-y-0
    bg-[#FFFFFF1A]
    md:translate-x-0
    md:translate-y-[-10px]
    md:scale-[1]
    md:opacity-100
    lg:translate-x-0
    lg:translate-y-[-14px]
    lg:scale-[1]
    lg:opacity-100
  `;
}

/* RIGHT */
if (index === (active + 1) % testimonials.length) {
  positionClass = `
    md:block
    md:translate-x-[240px]
    md:scale-[0.72]
    bg-[#FFFFFF1A]
    md:opacity-90
    lg:block
    lg:translate-x-[380px]
    xl:translate-x-[420px]
    2xl:translate-x-[460px]
    lg:scale-[0.82]
    lg:opacity-100
    z-10
  `;
}

/* BEHIND (the 4th card, opposite the active one) */
if (index === (active + 2) % testimonials.length) {
  positionClass = `
    md:block
    md:translate-x-0
    md:translate-y-[26px]
    md:scale-[0.6]
    bg-[#FFFFFF1A]
    md:opacity-30
    lg:block
    lg:translate-x-0
    lg:translate-y-[36px]
    lg:scale-[0.62]
    z-0
    lg:opacity-30
  `;
}

            // ---- Mobile-only sliding transform ----
            // Active card sits centered; the card about to become active
            // (relOffset 1) waits fully off-screen right; the card that
            // just was active (relOffset length-1) sits fully off-screen
            // left. Anything further away is display:none on mobile since
            // it's never directly adjacent to a visible transition.
            //
            // This is the sole controller of display/position below `md` —
            // positionClass above intentionally carries no bare `hidden`
            // anymore (only `md:block`/`lg:block`), so nothing here gets
            // fought over by a conflicting unprefixed class. From `md`
            // upward, the media-scoped rules in positionClass win the
            // cascade and take over the stacked-card layout instead.
            let mobileSlideClass;
            if (relOffset === 0) {
              mobileSlideClass = "block translate-x-0 opacity-100 pointer-events-auto";
            } else if (relOffset === 1) {
              mobileSlideClass = "block translate-x-[110%] opacity-100 pointer-events-none";
            } else if (relOffset === testimonials.length - 1) {
              mobileSlideClass = "block -translate-x-[110%] opacity-100 pointer-events-none";
            } else {
              mobileSlideClass = "hidden opacity-0 pointer-events-none";
            }

            return (
              <div
                key={item.id}
                className={`
                  absolute

                  /* MOBILE RESPONSIVE WIDTH */
                  w-[88%] sm:w-[70%] md:w-[270px]

                  lg:w-[368px]
                  xl:w-[390px]
                  2xl:w-[420px]

                  min-h-[360px] md:min-h-[100px]  lg:min-h-[447px]

                  rounded-[24px]

                  px-4 sm:px-6 md:px-5
                  pt-8 sm:pt-10 md:pt-8 lg:pt-12
                  pb-6 sm:pb-8
 bg-white/17
  backdrop-blur-xl
  border border-white/20
 

                  shadow-[0px_8px_24px_1px_#00000014]

                  transition-all duration-700 ease-in-out

                  ${mobileSlideClass}

                  ${positionClass}
                `}
              >
                {/* QUOTE - tablet/desktop: big background mark in the corner */}
                <div className="hidden md:block absolute top-[-55px] lg:top-[-75px] left-5 sm:left-6 text-[#03749B] font-extrabold md:text-[100px] lg:text-[128px]">
                  “
                </div>

                {/* QUOTE - mobile only: small centered icon ABOVE the card */}
                <div className="md:hidden absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <svg
                    className="w-9 h-9 text-[#04A3DA]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* PROFILE */}
                <div className="flex flex-col lg:mt-[-15px] mt-[20px] md:mt-0 items-center text-center mb-4 sm:mb-5 md:mb-4 lg:mb-5">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[48px] h-[48px] md:w-[48px] md:h-[48px] lg:w-[90px] lg:h-[90px] rounded-full object-cover"
                  />

                  <h3 className="mt-3 md:mt-2 font-bold text-white text-[18px] sm:text-[20px] md:text-[17px] lg:text-[22px]">
                    {item.name}
                  </h3>

                  <p className="text-white text-[12px] sm:text-[14px]">
                    {item.role}
                  </p>

                </div>

                {/* TEXT */}
                <p className="text-white mt-[30px] lg:mt-0 md:mt-0 text-[13px] md:text-[15px] lg:text-[20px] leading-[22px] md:leading-[21px] lg:leading-[24px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">

          {testimonials.map((_, index) => (
            <div key={index}>
              {active === index ? (
                <div className="relative w-[34px] sm:w-[38px] h-[8px] sm:h-[10px] rounded-full bg-[#D1D5DB] overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-sky-400 animate-[progress_linear]"
                    style={{ animationDuration: `${autoplayDuration}ms` }}
                  />
                </div>
              ) : (
                <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D1D5DB]" />
              )}
            </div>
          ))}

        </div>

      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes progress {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>

    </section>
  );
};

export default Testimonial;
