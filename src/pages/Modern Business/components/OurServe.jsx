import { useState } from "react";
import { ChevronDown } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Software Development",

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
      bg-[#0F172A]
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
        `}
      </style>

      <div className="max-w-[1150px] mx-auto mt-[-80px] md:mt-0 lg:mt-[-35px] overflow-visible">
        {/* HEADING */}

      {/* heading */}
          <div className="text-center mb-2">
            <div class="mb-[15px] lg:mb-0 md:mb-0">
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
         border border-[#BDBDBDB0]
          w-full

          max-w-[730px]
          lg:max-w-[1000px]

          mx-auto

          min-h-fit
          lg:h-[446px]

            bg-[#0F172A]

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
            {services.map((item) => (
              <div key={item.id} className="overflow-hidden">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= DESKTOP VIEW (unchanged) ================= */}

          <div
            className="
            hidden
            md:flex

            items-start

            gap-3
            lg:gap-5
            xl:gap-6

            h-full
            "
          >
            {/* LEFT TABS */}

            <div
              className="
              w-[170px]
              lg:w-[280px]
              xl:w-[290px]

              shrink-0

              pr-1
              "
            >
              {/* SCROLL AREA */}

              <div
                className="
                flex
                flex-col

                gap-1.5
                lg:gap-1.5

                h-[300px]
                lg:h-[388px]
                

                overflow-y-auto

                pr-2

                no-scrollbar
                "
              >
                {services.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveDesktop(item.id)}
                    className={`
                      w-full

                      flex
                      items-center
                   

                      px-3
                      py-2.5
                      lg:px-4
                      lg:py-3.5
text-white
                      rounded-[12px]
                      lg:rounded-[18px]

                      

                      text-left

                      transition-all
                      duration-300
                      hover:translate-x-1
                      ${
                        activeDesktop === item.id
                          ? "bg-[#04A3DA] text-white "
                          : " text-white "
                      }
                    `}
                  >
                   

                    {/* TITLE */}

                    <span
                      className={`
                      text-[12px]
                      leading-[14px]
                      lg:text-[14px]
                      lg:leading-[16px]

                      font-semibold
                     
                  text-[#3F4555]    ${
                    activeDesktop === item.id
                          ? " text-white "
                          : "bg-transparent  text-white "}`}>
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div
              className="
              flex-1

              
              h-[300px]
              lg:h-[388px]

             bg-[#3BAFCF1A]

              rounded-2xl

              p-4
              lg:p-6
              xl:p-8

              overflow-hidden
              "
            >
              {services
                .filter((item) => item.id === activeDesktop)
                .map((item) => (
                  <div
                    key={item.id}
                    className="
                    h-full

                    flex
                    flex-col
                    justify-between
                    "
                  >
                    {/* TOP */}

                    <div>
                      {/* TITLE */}

                      <h3
                        className="
                        font-semibold
                        text-white

                        text-[19px]
                        leading-[24px]

                        lg:text-[32px]
                        lg:leading-[36px]

                        xl:text-[38px]
                        xl:leading-[46px]

                        max-w-[700px]
                        "
                      >
                        {item.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                        mt-2
                        lg:mt-3

                        
                        text-[#E7E8EA]

                        text-[12.5px]
                        leading-[18px]
                        lg:text-[16px]
                        lg:leading-[24px]

                        max-w-[720px]
                        "
                      >
                        {item.desc}
                      </p>

                      {/* POINTS */}

                      <div
                        className="
                        mt-3
                        lg:mt-6

                        space-y-2
                        lg:space-y-5
                        "
                      >
                        {item.points.map((point, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 lg:gap-3"
                          >
                            <div
                              className="
                              mt-0.5
                              lg:mt-0

                              min-w-[10px]
                              w-[13px]
                              h-[13px]
                              lg:w-[20px]
                              lg:h-[20px]

                              rounded-full

                              bg-[#04A3DA]
                              "
                            ></div>

                            <p
                              className="
                             
                       text-[#E7E8EA]


                              text-[12.5px]
                              leading-[16px]
                              lg:text-[16px]
                              lg:leading-[18px]

                              "
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServe;