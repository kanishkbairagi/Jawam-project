import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Code2,
  Globe,
  Layers,
  Smartphone,
  Settings,
  PenTool,
  ShieldCheck,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Software Development",
    icon: Code2,
    route: "/services/vision",
    desc:
      "We craft intelligent software solutions that simplify operations, accelerate growth, and transform business ideas into scalable digital products. Our development approach focuses on innovation, security, and long term performance.",

    points: [
      "Custom built scalable systems",
      "Secure and future ready architecture",
      "High performance business applications",
    ],
  },

  {
    id: 2,
    title: "Web Development",
    icon: Globe,
    route: "/services/vision2",
    desc:
      "Your website is your digital identity. We build fast, responsive, and visually engaging web experiences that help brands stand out and convert visitors into customers.",

    points: [
      "Modern responsive websites",
      "Custom web platforms & portals",
      "SEO optimized development",
    ],
  },

  {
    id: 3,
    title: "Full Stack Development",
    icon: Layers,
    route: "/services/vision9",
    desc:
      "From intuitive frontend interfaces to powerful backend systems, we deliver complete full stack solutions designed for speed, scalability, and seamless performance.",

    points: [
      "End to end application development",
      "Robust APIs & database management",
      "Scalable cloud-ready solutions",
    ],
  },

  {
    id: 4,
    title: "Mobile App Development",
    icon: Smartphone,
    route: "/services/vision3",
    desc:
      "We create mobile applications that deliver smooth user experiences, strong functionality, and real business impact across Android and iOS platforms.",

    points: [
      "Native & cross-platform apps",
      "User focused mobile experiences",
      "Fast, secure, and scalable apps",
    ],
  },

  {
    id: 5,
    title: "Custom Software Solutions",
    icon: Settings,
    route: "/services/vision7",
    desc:
      "Every business is unique and your software should be too. We design customized digital solutions that align perfectly with your workflows and business objectives.",

    points: [
      "Business specific software systems",
      "Process automation solutions",
      "Smart enterprise applications",
    ],
  },

  {
    id: 6,
    title: "UI/UX Design",
    icon: PenTool,
    route: "/services/vision4",
    desc:
      "We design digital experiences that are not only visually attractive but also intuitive, user friendly, and conversion-focused.",

    points: [
      "Modern and clean interfaces",
      "Interactive user experiences",
      "Research driven design strategy",
    ],
  },

  {
    id: 7,
    title: "Quality Assurance",
    icon: ShieldCheck,
    route: "/services/vision10",
    desc:
      "Quality is at the core of everything we build. Our testing process ensures your software performs flawlessly, securely, and reliably under every condition.",

    points: [
      "Manual & automation testing",
      "Performance & security validation",
      "Continuous quality monitoring",
    ],
  },

  {
    id: 8,
    title: "DevOps & Cloud",
    icon: Cloud,
    route: "/services/vision6",
    desc:
      "We help businesses scale efficiently with modern cloud infrastructure, automated deployment pipelines, and reliable DevOps practices.",

    points: [
      "Cloud-native infrastructure",
      "CI/CD automation workflows",
      "Scalable deployment solutions",
    ],
  },
];

const OurServe = () => {
  // Desktop tabs: default to the first item open (tab 1)
  const [activeDesktop, setActiveDesktop] = useState(1);
  // Mobile accordion: default to nothing open
  const [activeMobile, setActiveMobile] = useState(null);

  const toggleAccordion = (id) => {
    setActiveMobile(activeMobile === id ? null : id);
  };

  return (
    <section
      className="
      w-full
      
      overflow-visible
      mt-0 md:mt-[-60px] lg:mt-0
      px-3
      sm:px-5
      md:px-6
      lg:px-8

      pt-8
      sm:pt-10
      pb-8
      "
    >
      {/* Hide scrollbar on the desktop tab list while keeping it scrollable */}
      <style>
        {`
          .no-scrollbar {
            scrollbar-width: none;       /* Firefox */
            -ms-overflow-style: none;    /* IE / legacy Edge */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;               /* Chrome, Safari, modern Edge */
          }

          @keyframes serve-fade-up {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes serve-pill-in {
            from { opacity: 0; transform: translateY(10px) scale(0.96); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes serve-panel-in {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes serve-check-in {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes serve-row-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .serve-heading-anim {
            opacity: 0;
            animation: serve-fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .serve-pill-anim {
            opacity: 0;
            animation: serve-pill-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .serve-panel-anim {
            animation: serve-panel-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .serve-check-anim {
            opacity: 0;
            animation: serve-check-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .serve-row-anim {
            opacity: 0;
            animation: serve-row-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @media (prefers-reduced-motion: reduce) {
            .serve-heading-anim,
            .serve-pill-anim,
            .serve-panel-anim,
            .serve-check-anim,
            .serve-row-anim {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}
      </style>

      <div className="max-w-[1550px] mx-auto mt-[-80px] md:mt-0 lg:mt-[-35px] overflow-visible">
        {/* HEADING */}

      {/* heading */}
          <div className="text-center mb-2 serve-heading-anim">
            <div className="mb-[15px] lg:mb-0 md:mb-0">
          <p className="font-semibold     text-[rgba(4,163,218,1)] text-[13px] leading-[8.39px] lg:text-[16px] lg:leading-[18px] sm:text-[16px] sm:leading-[18px]  md:text-[16px] md:leading-[18px] tracking-[0px]  uppercase ">OUR SERVICES</p>
          </div>
           <h2 className=" mt-2 text-center font-sans  font-bold text-[20.4px]
            leading-[22.37px] tracking-[-0.3px] px-2 sm:text-[36px] sm:leading-[42px] sm:px-0 md:text-[40px] md:leading-[46px] lg:text-[44px] lg:leading-[48px] lg:tracking-[-0.5px] text-white max-w-[920px] mx-auto">Custom IT solutions for your<br className="hidden sm:block"/> <span className ="    text-[rgba(4,163,218,1)]"> successful businesses </span> </h2>
         </div>
        {/* MAIN CARD */}

        <div
          className="
          mt-6
          relative
          z-10
          border
         border-white/20
          w-full

          max-w-[730px]
          md:max-w-[950px]
          lg:max-w-[1150px]

          mx-auto

          min-h-fit

          

          rounded-[20px]
          sm:rounded-[28px]
          lg:rounded-[32px]

        shadow-[0px_4px_4px_0px_#00000040]

          p-3
          sm:p-5
          md:p-6
          lg:p-7

          overflow-hidden
          "
        >
          {/* ================= MOBILE VIEW — matches desktop's dark theme exactly ================= */}

          <div
            className="
            md:hidden

            flex
            flex-col

            gap-3
            sm:gap-4

            w-full 
            "
          >
            {services.map((item, index) => (
              <div
                key={item.id}
                className="overflow-hidden serve-row-anim"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {/* TITLE ROW — inactive: dark/transparent bg + white text. Active: solid #04A3DA bg + white text (same as desktop's active tab). Slides right on hover. */}

                <button
                  onClick={() => toggleAccordion(item.id)}
                  className={`
                    w-full

                    flex
                    items-center
                    justify-between
                    gap-2

                    rounded-[15px]
                    border
                    border-white/10

                    px-3
                    sm:px-5

                    py-3.5
                    sm:py-4

                    transition-[background-color,border-color,transform]
                    duration-300
                    hover:translate-x-1

                    ${
                      activeMobile === item.id
                        ? "bg-[#04A3DA] text-white border-transparent"
                        : "bg-transparent text-white"
                    }
                  `}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <h3
                      className="
                      text-[13px]
                      sm:text-[15px]

                      font-semibold
                      text-left
                      "
                    >
                      {item.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`
                      shrink-0
                      transition-transform
                      duration-300
                      ${activeMobile === item.id ? "rotate-180" : ""}
                    `}
                    size={18}
                  />
                </button>

                {/* CONTENT — CSS grid 0fr/1fr trick: lets the browser animate to the
                    content's real height cheaply, instead of forcing layout against a
                    hardcoded max-h-[900px] guess every frame (the main mobile jank source). */}

                <div
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-in-out

                    ${activeMobile === item.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                      bg-[#3BAFCF1A]

                      rounded-[15px]
                      p-4
                      sm:p-5
                      mt-2
                      "
                    >
                      {/* TITLE */}

                      <p
                        className="
                        font-semibold
                        text-white

                        text-[20px]
                        leading-[24px]

                        sm:text-[24px]
                        sm:leading-[28px]
                         
                        "
                      >
                        {item.title}
                      </p>

                      {/* DESCRIPTION */}

                      <p
                        className="
                        mt-2

                        text-[#E7E8EA]

                        text-[13.5px]
                        sm:text-[15px]

                        leading-[20px]
                        sm:leading-[22px]
                         
                        "
                      >
                        {item.desc}
                      </p>

                      {/* POINTS */}

                      <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                        {item.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <div
                              className="
                              mt-1

                              min-w-[14px]
                              w-[16px]
                              h-[16px]
                              sm:min-w-[18px]
                              sm:w-[18px]
                              sm:h-[18px]

                              rounded-full

                            bg-[#04A3DA]
                              "
                            ></div>

                            <p
                              className="
                              text-[13.5px]
                              sm:text-[15px]

                              text-[#E7E8EA]

                              leading-[19px]
                              sm:leading-[21px]
                              "
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* LEARN MORE — routes to the same page as the desktop CTA */}
                      <Link
                        to={item.route}
                        className="
                        mt-4
                        sm:mt-5

                        inline-flex
                        items-center
                        gap-2

                        border
                        border-sky-400/40

                        text-sky-300
                        hover:bg-[#04A3DA]
                        hover:text-white
                        hover:border-transparent

                        text-xs
                        sm:text-sm
                        font-semibold

                        px-4
                        sm:px-5
                        py-2.5

                        rounded-full

                        transition-all
                        duration-300
                        no-underline
                        "
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP VIEW — horizontal pill tabs + two-column content ================= */}

          <div className="hidden md:block">
            {/* TOP: horizontal scrollable pill tabs */}
            <div
              className="
              flex
              items-center
              gap-3

              overflow-x-auto
              no-scrollbar

              pb-1
              mb-6
              "
            >
              {services.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeDesktop === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveDesktop(item.id)}
                    className={`
                      shrink-0
                      inline-flex
                      items-center
                      gap-2

                      px-5
                      py-2.5

                      rounded-full

                      border

                      text-sm
                      font-semibold

                      whitespace-nowrap

                      transition-all
                      duration-300

                      serve-pill-anim

                      ${
                        isActive
                          ? "bg-[#04A3DA] border-transparent text-white "
                          : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
                      }
                    `}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <Icon size={16} className="shrink-0" />
                    {item.title}
                  </button>
                );
              })}
            </div>

            {/* BOTTOM: content panel for the active service */}
            {services
              .filter((item) => item.id === activeDesktop)
              .map((item) => (
                <div
                  key={item.id}
                  className="
                  relative
                  overflow-hidden

                

                  

                  rounded-3xl

                  shadow-[0_8px_50px_rgba(4,163,218,0.18)]

                  p-8

                  grid
                  grid-cols-1
                  md:grid-cols-2

                  gap-10

                  items-center

                  serve-panel-anim
                  "
                >
                  {/* Ambient glow blobs, matching the pattern used elsewhere on the site */}
                  <div className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full bg-sky-400/20 blur-[100px]"></div>
                  <div className="pointer-events-none absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-600/15 blur-[100px]"></div>

                  {/* LEFT: eyebrow, title, description, CTA */}
                  <div className="relative z-10">
                    <p className="text-sky-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                      Our Services
                    </p>

                    <h3
                      className="
                      font-bold
                      text-white

                      text-[32px]
                      leading-[38px]

                      mb-4
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-[#E7E8EA]

                      text-[15px]
                      leading-[24px]

                      mb-6

                      max-w-[480px]
                      "
                    >
                      {item.desc}
                    </p>

                    <Link
                      to={item.route}
                      className="
                      inline-flex
                      items-center
                      gap-2

                      border
                      border-sky-400/40
                      bg-sky-500
                      
                      hover:bg-[#04A3DA]
                      
                      hover:border-transparent

                      text-sm
                      font-semibold

                      px-5
                      py-2.5

                      rounded-full

                      transition-all
                      duration-300
                      no-underline
                      "
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* RIGHT: checklist points */}
                  <div className="relative z-10 space-y-4">
                    {item.points.map((point, index) => (
                      <div
                        key={index}
                        className="
                        flex
                        items-center
                        gap-3

                        bg-white/[0.06]
                        border
                        border-white/10

                        rounded-2xl

                        p-4

                        serve-check-anim
                        "
                        style={{ animationDelay: `${150 + index * 100}ms` }}
                      >
                        <CheckCircle2
                          size={20}
                          className="text-sky-400 shrink-0"
                        />
                        <p className="text-white text-base font-medium">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServe;