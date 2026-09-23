import { useState, useEffect } from "react";
import {
  Car,
  Landmark,
  HeartPulse,
  ShoppingCart,
  GraduationCap,
  Factory,
} from "lucide-react";
import "./IndustriesSection.css";
import automotiveHome from "../../../assets/automotiveHome.webp";
import financeHome from "../../../assets/financeHome.webp";
import healthcareHome from "../../../assets/healthcareHome.webp";
import retailHome from "../../../assets/retailHome.webp";
import educationHome from "../../../assets/educationHome.webp";
import constructionHome from "../../../assets/constructionHome.webp";

const industries = [
{
  icon: <Car />,
  name: "Automotive",
  desc: "Real-time payments, fleet management and connected vehicle platforms built for scale and reliability.",
  points: [
    "KYC/AML pipelines",
    "Connected vehicle platforms",
    "Fleet & mobility management"
  ],
  bg: automotiveHome,
},
  {
    icon: <Landmark />,
    name: "Finance",
    desc: "Secure banking, payments and trading platforms built for scale and compliance.",
    points: ["Fraud detection", "Real-time settlements", "Regulatory reporting"],
    bg: financeHome,
  },
  {
    icon: <HeartPulse />,
    name: "Healthcare",
    desc: "HIPAA-ready platforms connecting patients, providers and data securely.",
    points: ["EHR integrations", "Telehealth platforms", "Patient data security"],
    bg: healthcareHome,
  },
  {
    icon: <ShoppingCart />,
    name: "Retail",
    desc: "Omnichannel commerce experiences that scale through peak demand.",
    points: ["Headless commerce", "Inventory automation", "Personalized search"],
    bg: retailHome,
  },
  {
    icon: <GraduationCap />,
    name: "Education",
    desc: "Engaging learning platforms built for reach, accessibility and scale.",
    points: ["LMS platforms", "Live virtual classrooms", "Progress analytics"],
    bg: educationHome,
  },
  {
    icon: <Factory />,
    name: "Manufacturing",
    desc: "Connected factory and supply-chain systems that cut downtime.",
    points: ["IoT monitoring", "Predictive maintenance", "Supply-chain visibility"],
    bg: constructionHome,
  },
];

const COUNT = industries.length;
const STEP = 360 / COUNT;
const INTERVAL = 3500;

// Desktop/tablet: active slot sits at the right-middle (3 o'clock, 90deg).
// Mobile: active slot sits at the bottom-middle (6 o'clock, 180deg).
const ACTIVE_AT_DESKTOP = 90;
const ACTIVE_AT_MOBILE = 180;
const MOBILE_BREAKPOINT = 640; // matches the "mobile" bucket used elsewhere in this project

// How far out (as a % of the wheel's radius) the orbiting nodes sit.
const NODE_RADIUS_PERCENT = 47;

// place a point on the circle at `deg` clockwise from the top (12 o'clock)
const posAt = (deg, radius = NODE_RADIUS_PERCENT) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
};

const IndustriesSection = () => {
  // `tick` only ever increases, so the ring keeps rotating clockwise; the
  // active industry is tick % COUNT (the one currently at the top).
  const [tick, setTick] = useState(0);

  // Track viewport width so we know whether to use the mobile or desktop
  // "active slot" angle.
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let frame;
    const handleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ACTIVE_AT = isMobile ? ACTIVE_AT_MOBILE : ACTIVE_AT_DESKTOP;

  const active = ((tick % COUNT) + COUNT) % COUNT;
  const current = industries[active];

  // jump forward (clockwise) to a clicked industry
  const goTo = (i) => setTick((t) => t + ((i - (t % COUNT) + COUNT) % COUNT));

  return (
    <section
      className="mt-0 md:mt-0 lg:mt-10 lg:max-w-[1050px] mx-auto industries__section"
      style={{
       

      }}
    >
      <div className="industries__section-overlay" />
      <div className="section__inner">
        <p className="section__eyebrow text-[13px] md:text-[15px] lg:text-[15px]">Industries We Serve</p>
        <h2 className="section__heading text-[18px] lg:max-w-[600px] mx-auto font-bold md:text-[44px] lg:text-[44px] leading-[48px] tracking-[-0.5px] text-center">
          Custom IT solutions for your{" "}
          <span className="text-[#04A3DA]">successful businesses</span>
        </h2>

        <div className="industries__layout md:mt-[-20px] mt-0 lg:mt-0">
          {/* rotating circular selector */}
          <div className="industries__wheel">
            {/* the ring of icons rotates clockwise; each icon counter-rotates
                so it stays upright */}
            <div
              className="industries__ring"
              style={{ transform: `rotate(${tick * STEP}deg)` }}
            >
              {industries.map((ind, i) => (
                <button
                  key={ind.name}
                  className={`industries__node ${
                    i === active ? "industries__node--active" : ""
                  }`}
                  style={posAt(ACTIVE_AT - i * STEP)}
                  onClick={() => goTo(i)}
                  aria-label={ind.name}
                  title={ind.name}
                >
                  <span
                    className="industries__node-icon"
                    style={{ transform: `rotate(${-tick * STEP}deg)` }}
                  >
                    {ind.icon}
                  </span>
                </button>
              ))}
            </div>

            {/* fixed centre disc — shows the active industry's icon + name + its own background image */}
            <div
              className="industries__disc"
              style={{
                backgroundImage: `url(${current.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="industries__disc-overlay" />
              <span className="industries__disc-icon" key={`i-${active}`}>
                {current.icon}
              </span>
              <span className="industries__disc-label" key={`l-${active}`}>
                {current.name}
              </span>
            </div>
          </div>

          {/* detail card — slides/fades to the active industry */}
          <div className="industries__detail ">
            <div className="industries__fade" key={active}>
              <p className="industries__count">
                Industry — {active + 1}/{COUNT}
              </p>
              <h3 className="industries__title">{current.name}</h3>
              <p className="industries__desc">{current.desc}</p>

              <div className="industries__rows">
                {current.points.map((p, i) => (
                  <div className="industries__row" key={i}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;