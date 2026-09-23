import{r as a,j as e,L as b,I as y,C as w,e as j,u as N}from"./vendor-react-DNVpk_eW.js";import{R as v}from"./ResponsiveHeroMedia-CtRKQhsW.js";import{c as C}from"./Team Jawam-CDanBNnu.js";const S=[{key:"healthcare",path:"/industries/healthcare",icon:"mdi:heart",label:"Healthcare"},{key:"finance",path:"/industries/finance",icon:"solar:banknote-2-bold",label:"Finance"},{key:"education",path:"/industries/education",icon:"mdi:school",label:"Education"},{key:"ecommerce",path:"/industries/ecommerce",icon:"mdi:cart",label:e.jsxs(e.Fragment,{children:["Retail &, ",e.jsx("br",{}),"ECommerce"]})},{key:"logistics",path:"/industries/logistics",icon:"solar:box-bold",label:e.jsxs(e.Fragment,{children:["Logistics & ",e.jsx("br",{}),"Distribution"]})},{key:"construction",path:"/industries/construction",icon:"solar:buildings-bold",label:"Construction"},{key:"automotive",path:"/industries/automotive",icon:"solar:tram-bold",label:"Automotive"},{key:"insurance",path:"/industries/insurance",icon:"solar:shield-minimalistic-bold",label:"Insurance"}];function F(){const[c,r]=a.useState("healthcare"),i=a.useRef(null),[m,s]=a.useState(!1),[d,l]=a.useState(!0),[x,o]=a.useState(!1);return a.useEffect(()=>{const t=i.current;if(!t)return;const n=()=>{const{scrollLeft:p,scrollWidth:k,clientWidth:u}=t;o(p>4),l(p+u<k-4)};n();const h=()=>{s(!0),n()};return t.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",n),()=>{t.removeEventListener("scroll",h),window.removeEventListener("resize",n)}},[]),e.jsxs("div",{className:"ico-scroll-wrapper relative mt-[-20px] md:mt-[-20px] lg:mt-[-20px] mb-[25px] md:mb-0 lg:mb-0 border border-white/10 rounded-[16px] px-3 py-3 bg-white/[0.03] md:border-0 md:rounded-none md:bg-transparent md:px-0 md:py-0",children:[e.jsx("style",{children:`
        @media (min-width: 768px) {
          .ico-link-desktop {
            cursor: pointer;
          }
          .ico-link-desktop .ico-item {
            transition: transform 0.3s ease;
          }
          .ico-link-desktop:hover .ico-item {
            transform: translateY(-4px);
          }
          .ico-link-desktop .ico-circle {
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          }
          .ico-link-desktop:hover .ico-circle {
            background-color: rgba(56, 189, 248, 0.18);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25);
            transform: scale(1.08);
          }
          .ico-link-desktop:hover .ico-svg {
            color: #38BDF8;
          }
          .ico-link-desktop:hover span {
            color: #38BDF8;
          }
          .ico-link-desktop .ico-item.is-active .ico-circle {
            background-color: rgba(56, 189, 248, 0.22);
            box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.35);
          }
          .ico-link-desktop .ico-item.is-active .ico-svg,
          .ico-link-desktop .ico-item.is-active span {
            color: #38BDF8;
          }
          .ico-link-desktop .ico-item.is-active span::after {
            content: '';
            display: block;
            width: 18px;
            height: 2px;
            background: #38BDF8;
            border-radius: 2px;
            margin: 4px auto 0;
          }
        }
      `}),e.jsx("div",{ref:i,className:`ico-scroll-track
          flex flex-nowrap items-start justify-start gap-4
          overflow-x-auto scroll-smooth snap-x snap-mandatory
          w-full
          md:overflow-visible md:snap-none md:grid md:grid-cols-4 md:max-w-[600px] md:mx-auto md:gap-2
          lg:flex lg:flex-wrap lg:justify-center lg:gap-16 lg:max-w-full`,"aria-label":"Browse industries",children:S.map(t=>{const n=c===t.key;return e.jsx(b,{to:t.path,className:"ico-link ico-link-desktop block shrink-0 snap-start w-[72px] md:w-auto",onClick:()=>r(t.key),children:e.jsxs("div",{className:`ico-item flex flex-col items-center gap-1 ${n?"is-active":""}`,children:[e.jsx("div",{className:"ico-circle w-9 h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 flex items-center justify-center rounded-full",children:e.jsx(y,{icon:t.icon,className:"ico-svg text-[22px] md:text-[28px] lg:text-[35px]"})}),e.jsx("span",{className:"text-[11px] md:text-[14px] lg:text-[16px] leading-[13px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-center",children:t.label})]})},t.key)})}),e.jsx("div",{className:`md:hidden pointer-events-none absolute top-0 left-0 h-full w-8 rounded-l-[16px]
          bg-gradient-to-r from-black/35 to-transparent
          transition-opacity duration-300
          ${x?"opacity-100":"opacity-0"}`}),e.jsx("div",{className:`md:hidden pointer-events-none absolute top-0 right-0 h-full w-10 rounded-r-[16px]
          bg-gradient-to-l from-black/35 to-transparent
          transition-opacity duration-300
          ${d?"opacity-100":"opacity-0"}`}),!m&&d&&e.jsx("div",{className:"md:hidden pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 -mt-3",children:e.jsx(w,{size:18,className:"text-white/70 ico-scroll-hint"})})]})}const X="/assets/industry-CtRr_eUk.mp4",g="/assets/mobileindustries-fojmJH4j.webp";function I(){return e.jsxs("section",{className:"mt-0 md:mt-0 lg:mt-0 mb-[210px] md:mb-0 lg:mb-[110px] relative lg:h-[600px] flex items-center justify-center text-white",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden z-0",children:[e.jsx(v,{className:"w-full h-full md:h-full lg:h-full object-cover",video:X,mobilePoster:g,desktopFallback:g,prioritizeVideo:!0}),e.jsx("div",{className:"absolute inset-0 bg-[#0F172A]/70 pointer-events-none"})]}),e.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto text-center px-4 min-w-0 md:pt-24 md:mt-[20px] mt-[250px] lg:mt-[40px]",children:[e.jsxs("button",{className:"ih-pill ih-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-4 md:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-5 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-[#3b82f6]",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})}),e.jsx("span",{className:"text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]",children:"Industries we serve"})]}),e.jsxs("h1",{className:"ih-animate ih-delay-2 lg:max-w-[900px] mx-auto font-extrabold text-[32px] md:text-[48px] lg:text-[60px] leading-[38px] md:leading-[50px] lg:leading-[60px] tracking-[-0.5px] md:text-center lg:text-center text-left mb-4 md:mb-5 lg:mb-6",children:[e.jsx("span",{className:"text-[#04A3DA]",children:"Smart Solutions "}),"for every Industry"]}),e.jsx("p",{className:"ih-animate ih-delay-3 md:max-w-[500px] lg:max-w-[900px] mt-[-5px] md:mt-[-10px] lg:mt-0 lg:max-w-[970px] mx-auto font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[-0.5px] md:text-center lg:text-center text-left  text-slate-200 mb-8 md:mb-10 lg:mb-12",children:"We partner with businesses across diverse industries to deliver custom software solutions that solve real challenges and drive meaningful growth."}),e.jsx("div",{className:"ih-animate ih-delay-4 w-full min-w-0",children:e.jsx(F,{})})]})]})}const L="/assets/check-B4k2Xu1_.webp";function A(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.5s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.6s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"HEALTHCARE"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Technology that puts ",e.jsx("span",{className:"text-sky-400",children:"patients first"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We build secure, scalable, and interoperable healthcare solutions that improve patient outcomes, streamline workflows, and ensure compliance."}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"End-to-end product engineering"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Scalable architecture solutions"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Performance & security optimization"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0 rounded-2xl ",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl  border border-white/10 h-[220px] md:h-[280px] lg:h-auto",children:e.jsx("img",{src:L,alt:"Healthcare professional using digital solutions",className:"w-full h-full object-cover rounded-2xl "})})})]})})]})})}const E="/assets/finance-CEx8rdJH.webp";function P(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.5s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.6s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"FINANCE"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Secure and scalable ",e.jsx("span",{className:"text-sky-400",children:"fintech solutions"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We help financial institutions and fintech startups build reliable, secure, and high-performing digital products that simplify transactions and improve customer trust."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Fintech web & mobile applications"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Payment gateway integrations"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Real-time transaction systems"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:w-[530px] lg:h-[320px]",children:e.jsx("img",{src:E,alt:"Fintech professional using digital finance solutions",className:"w-full h-full object-cover"})})})]})})]})})}function R(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"EDUCATION"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Empowering learning ",e.jsx("span",{className:"text-sky-400",children:"through technology"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We create modern e-learning platforms and educational tools that enhance engagement, collaboration, and accessibility for students and institutions."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"E-learning platform development"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Virtual classrooms & LMS systems"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Student performance analytics"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Mobile learning applications"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Interactive and user-friendly UI/UX"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:h-[370px]",children:e.jsx("img",{src:C,alt:"Students using e-learning technology",className:"w-full h-full object-cover"})})})]})})]})})}const U="/assets/ecommerce-DSVOQprL.webp";function D(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"RETAIL & ECOMMERCE"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Driving growth with ",e.jsx("span",{className:"text-sky-400",children:"smarter commerce"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We develop scalable eCommerce solutions that improve customer experiences, optimize operations, and increase conversions."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Custom eCommerce development"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Secure payment integrations"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Inventory & order management"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"AI-powered recommendations"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"High-performance shopping experiences"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:w-[500px] object-cover lg:h-[360px]",children:e.jsx("img",{src:U,alt:"eCommerce platform and online shopping technology",className:"w-full h-full object-cover"})})})]})})]})})}const Y="/assets/logistics-DDD53hmG.webp";function T(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"LOGISTICS & DISTRIBUTION"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Smarter logistics for ",e.jsx("span",{className:"text-sky-400",children:"faster operations"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We build intelligent logistics and supply chain solutions that improve efficiency, tracking, and operational visibility."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Real-time shipment tracking"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Fleet & warehouse management"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Route optimization systems"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Supply chain automation"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Analytics & reporting dashboards"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:h-[360px]",children:e.jsx("img",{src:Y,alt:"Logistics and supply chain technology",className:"w-full h-full object-cover"})})})]})})]})})}const f="/assets/construction-B_YSgMST.webp";function z(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"CONSTRUCTION"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Building the ",e.jsx("span",{className:"text-sky-400",children:"future digitally"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We deliver construction management solutions that simplify project planning, workforce coordination, and operational workflows."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Project management systems"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Workforce & task tracking"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Real-time reporting dashboards"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Document management solutions"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Construction workflow automation"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:h-[370px]",children:e.jsx("img",{src:f,alt:"Construction management technology",className:"w-full h-full object-cover"})})})]})})]})})}function B(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"AUTOMOTIVE"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Accelerating innovation ",e.jsx("span",{className:"text-sky-400",children:"in mobility"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We create connected automotive solutions that enhance user experiences, improve operational efficiency, and support smart mobility."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Connected vehicle solutions"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"IoT-enabled automotive platforms"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Fleet monitoring systems"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Vehicle tracking & analytics"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Mobile apps for smart mobility"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:h-[380px]",children:e.jsx("img",{src:f,alt:"Connected automotive technology",className:"w-full h-full object-cover"})})})]})})]})})}const W="/assets/insurance-CwLfNR3q.webp";function H(){return e.jsx("div",{className:"mt-[-180px] md:mt-0 lg:mt-0",children:e.jsxs("section",{className:"px-4 md:px-8 mt-[-50px] md:mt-[50px] lg:mt-[-50px] mb-0 md:mb-0 lg:mb-[25px]",children:[e.jsx("style",{children:`
        @keyframes hcFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hcSlideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes hcCheckPop {
          0% { opacity: 0; transform: translateX(-15px) scale(0.6); }
          70% { opacity: 1; transform: translateX(2px) scale(1.1); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .hc-text {
          opacity: 0;
          animation: hcFadeUp 0.6s ease-out forwards;
        }
        .hc-label { animation-delay: 0.1s; }
        .hc-heading { animation-delay: 0.2s; }
        .hc-desc { animation-delay: 0.3s; }
        .hc-features-label { animation-delay: 0.35s; }

        .hc-check-item {
          opacity: 0;
          animation: hcCheckPop 0.5s ease-out forwards;
        }
        .hc-check-item:nth-child(1) { animation-delay: 0.4s; }
        .hc-check-item:nth-child(2) { animation-delay: 0.48s; }
        .hc-check-item:nth-child(3) { animation-delay: 0.56s; }
        .hc-check-item:nth-child(4) { animation-delay: 0.64s; }
        .hc-check-item:nth-child(5) { animation-delay: 0.72s; }

        .hc-check-badge {
          transition: transform 0.3s ease;
        }
        .hc-check-item:hover .hc-check-badge {
          transform: scale(1.25) rotate(8deg);
        }

        .hc-img-wrap {
          opacity: 0;
          animation: hcSlideLeft 0.8s ease-out forwards;
          animation-delay: 0.15s;
          overflow: hidden;
        }
        .hc-img-wrap img {
          transition: transform 0.6s ease;
        }
        .hc-img-wrap:hover img {
          transform: scale(1.05);
        }
      `}),e.jsx("div",{className:"lg:max-w-5xl md:max-w-[700px] mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center",children:[e.jsxs("div",{children:[e.jsx("p",{className:"hc-text hc-label font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-[15px] md:leading-[16px] lg:leading-[18px] tracking-[0] text-[#04A3DA] mb-2 md:mb-3",children:"INSURANCE"}),e.jsxs("h2",{className:"hc-text hc-heading font-bold text-[26px] md:text-[32px] lg:text-[44px] leading-[32px] md:leading-[38px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4",children:["Modern insurance solutions ",e.jsx("span",{className:"text-sky-400",children:"for a digital world"})]}),e.jsx("p",{className:"hc-text hc-desc font-normal text-[14px] md:text-[14px] lg:text-[16px] leading-[19px] md:leading-[19px] lg:leading-[18px] tracking-[-0.5px] mb-4 md:mb-5 lg:mb-6",children:"We help insurance companies modernize their systems with secure, scalable, and customer-focused digital solutions."}),e.jsx("p",{className:"hc-text hc-features-label font-semibold text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] tracking-[-0.5px] mb-2 md:mb-3",children:"Key Features"}),e.jsxs("ul",{className:"space-y-2 md:space-y-3",children:[e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Insurance management platforms"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Claims processing automation"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Customer self-service portals"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"Secure data management"})]}),e.jsxs("li",{className:"hc-check-item flex items-center gap-2",children:[e.jsx("span",{className:"hc-check-badge w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-sky-400 shrink-0"}),e.jsx("span",{className:"text-white font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px]",children:"AI-driven risk analysis & insights"})]})]})]}),e.jsx("div",{className:"relative mt-[-10px] md:mt-0 lg:mt-0",children:e.jsx("div",{className:"hc-img-wrap rounded-2xl border border-white/10 h-[220px] md:h-[280px] lg:w-[520px] lg:h-[380px]",children:e.jsx("img",{src:W,alt:"Insurance technology and digital claims processing",className:"w-full h-full object-cover"})})})]})})]})})}function $(){const{category:c}=j(),r=N(),i=a.useRef(null),m=r.pathname.toLowerCase();let s=(c||m.split("/").pop()||"").toLowerCase();!c&&(m==="/industries"||s==="industries")&&(s="healthcare"),a.useEffect(()=>{const l=window.history.scrollRestoration;return window.history.scrollRestoration="manual",window.scrollTo(0,0),()=>{window.history.scrollRestoration=l}},[]),a.useEffect(()=>{i.current!==null&&i.current!==s&&setTimeout(()=>{const l=document.getElementById("industry-content");if(l){const t=l.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:t,behavior:"smooth"})}},50),i.current=s},[s]);const d=()=>{switch(s){case"finance":return e.jsx(P,{});case"education":return e.jsx(R,{});case"ecommerce":case"retail":return e.jsx(D,{});case"logistics":case"distribution":return e.jsx(T,{});case"construction":return e.jsx(z,{});case"automotive":return e.jsx(B,{});case"insurance":return e.jsx(H,{});case"healthcare":default:return e.jsx(A,{})}};return e.jsxs("div",{id:"industry",className:"min-h-screen bg-[#0F172A] mt-[-170px] md:mt-0 lg:mt-0 mb-[-20px] md:mb-0 lg:mb-[60px] ",children:[e.jsx(I,{}),e.jsx("div",{id:"industry-content",children:d()})]})}export{$ as default};
