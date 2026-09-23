import{j as e,L as g,r as c,t as v,a1 as j,a2 as N,a3 as k,O as u,X as b,l as A,a4 as y,a5 as q,a6 as E,D as L,a7 as D,v as C,a8 as I,a9 as S,T as O}from"./vendor-react-DNVpk_eW.js";function R(){return e.jsx("section",{className:"relative pt-28 md:pt-36 lg:pt-[210px] pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden",children:e.jsxs("div",{className:"max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center",children:[e.jsxs("button",{className:"hero-animate hero-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-3 md:mb-4 lg:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm",children:[e.jsxs("svg",{className:"w-5 h-5 text-[#3b82f6]",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M17 10L5 24L17 38",stroke:"currentColor",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M31 10L43 24L31 38",stroke:"currentColor",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M28 6L20 42",stroke:"currentColor",strokeWidth:"5.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("span",{className:"text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]",children:"Software Development Services"})]}),e.jsxs("h1",{className:"text-2xl md:text-5xl mt-4 md:mt-0 lg:mt-4 lg:text-[50px] text-left md:text-center lg:text-center font-extrabold tracking-tight text-white lg:leading-[55px] mb-4 md:mb-6 lg:mb-6 max-w-3xl",children:["Turn Complex Challenges Into"," ",e.jsx("span",{className:"text-[#04A3DA]",children:"High-Impact Software"})]}),e.jsx("p",{className:"text-sm md:text-lg text-left md:text-center lg:text-center lg:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10",children:"We build reliable, high-performance software foundations that help businesses collect, automate, scale, and transform ambitious visions into products users actually love."}),e.jsxs("div",{className:"hero-animate hero-delay-3 mt-[-17px] md:mt-0 lg:mt-[-15px] flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8",children:[e.jsxs(g,{to:"/contact-us",className:"hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap",children:["Talk to Our Experts",e.jsx("svg",{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4",fill:"none",stroke:"currentColor",strokeWidth:"2.5",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]}),e.jsx(g,{to:"/portfolio",className:"hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap",children:"Explore Our Work"})]})]})})}function W(){const o=[{step:"01",icon:v,title:"Scattered Architecture",description:"Code and business logic live across fragmented systems and siloed repositories."},{step:"02",icon:j,title:"Manual Processes",description:"Teams spend valuable engineering hours on repetitive manual workflows."},{step:"03",icon:N,title:"Slow Delivery",description:"Feature releases stall due to monolithic dependencies and fragile pipelines."},{step:"04",icon:k,title:"Growing Complexity",description:"Existing systems struggle to scale reliably as traffic and complexity increase."}],m=c.useRef(null),x=c.useRef(null);return c.useEffect(()=>{const i=m.current,t=x.current;if(!i||!t)return;const s=t.querySelectorAll(".pr-step-card"),r=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&(i.classList.add("pr-heading-in"),r.unobserve(l.target))})},{threshold:.3});r.observe(i);const a=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&(s.forEach((d,p)=>{d.style.transitionDelay=`${p*100}ms`,d.classList.add("pr-card-in")}),a.unobserve(l.target))})},{threshold:.15});return a.observe(t),()=>{r.disconnect(),a.disconnect()}},[]),e.jsxs("section",{className:"relative py-0 md:py-0 mt-0 md:mt-[-30px] lg:mt-0 lg:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[e.jsx("style",{children:`
        .pr-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .pr-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .pr-step-card {
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pr-card-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .pr-icon-pulse {
          animation: prIconPulse 2.6s ease-in-out infinite;
        }
        @keyframes prIconPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pr-heading-hidden, .pr-step-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .pr-icon-pulse {
            animation: none !important;
          }
        }
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[e.jsxs("div",{ref:m,className:"pr-heading-hidden text-center max-w-3xl mx-auto mb-16 md:mb-20",children:[e.jsx("p",{className:"text-sky-400 text-xs sm:text-sm  font-bold tracking-[0.25em] uppercase mb-3",children:"THE PROBLEM WE SOLVE"}),e.jsxs("h2",{className:"text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4",children:["Your Software Has Potential. Let's"," ",e.jsx("span",{className:"text-[#04A3DA]",children:"Remove the Roadblocks."})]}),e.jsx("p",{className:"text-sm sm:text-base text-left md:text-center lg:text-center text-slate-300 leading-relaxed",children:"Many businesses struggle to scale their software and make it efficient. We help you overcome common engineering challenges and turn your systems into a powerful growth engine."})]}),e.jsx("div",{ref:x,className:"grid grid-cols-1 mt-[-35px] lg:mt-[-35px] md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative",children:o.map((i,t)=>{const s=i.icon;return e.jsxs("div",{className:"relative group",children:[e.jsxs("div",{className:"pr-step-card h-full  hover:bg-slate-900 border border-slate-700 hover:border-sky-500/40 rounded-2xl p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10",children:[e.jsxs("div",{className:"flex items-start justify-between mb-3 space-y-4",children:[e.jsx("div",{className:"pr-icon-pulse text-sky-400 group-hover:scale-110 transition-transform duration-300",children:e.jsx(s,{className:"w-6 h-6",strokeWidth:2})}),e.jsx("span",{className:"text-xs font-semibold text-slate-500 group-hover:text-sky-400 transition-colors",children:i.step})]}),e.jsx("h3",{className:"text-sm sm:text-[15px] font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors",children:i.title}),e.jsx("p",{className:"text-[11px] md:text-xs lg:text-[14px] lg:mt-1 text-slate-400 leading-relaxed",children:i.description})]}),t<o.length-1&&e.jsx("div",{className:"hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-sky-400 items-center justify-center pointer-events-none",children:e.jsx(u,{className:"w-5 h-5",strokeWidth:2.5})})]},t)})})]})]})}function Y(){const o=["Disconnected systems","Manual deployment cycles","Delayed time-to-market","Siloed codebases","Inconsistent code quality","Limited scalability"],m=["Unified cloud-native architecture","Automated CI/CD pipelines","High-speed, fault-tolerant systems","A single source of truth","Enterprise-grade security","Infrastructure ready for growth"],x=c.useRef(null),i=c.useRef(null);return c.useEffect(()=>{const t=x.current,s=i.current;if(!t||!s)return;const r=new IntersectionObserver(n=>{n.forEach(l=>{l.isIntersecting&&(t.classList.add("ba-heading-in"),r.unobserve(l.target))})},{threshold:.3});r.observe(t);const a=new IntersectionObserver(n=>{n.forEach(l=>{if(l.isIntersecting){const d=s.querySelector(".ba-before"),p=s.querySelector(".ba-center"),h=s.querySelector(".ba-after"),f=s.querySelector(".ba-quote");d&&(d.style.transitionDelay="0ms",d.classList.add("ba-in-left")),p&&(p.style.transitionDelay="180ms",p.classList.add("ba-in-pop")),h&&(h.style.transitionDelay="300ms",h.classList.add("ba-in-right")),f&&(f.style.transitionDelay="450ms",f.classList.add("ba-in-fade")),a.unobserve(l.target)}})},{threshold:.15});return a.observe(s),()=>{r.disconnect(),a.disconnect()}},[]),e.jsxs("section",{className:"relative py-0 sm:py-16 md:py-0 pt-[70px] md:pt-[100px] lg:pt-[120px] px-4 sm:px-6 lg:px-8 overflow-hidden",children:[e.jsx("style",{children:`
        .ba-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .ba-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-before, .ba-after {
          opacity: 0;
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ba-before { transform: translateY(24px); }
        .ba-after { transform: translateY(24px); }
        @media (min-width: 768px) {
          .ba-before { transform: translateX(-36px); }
          .ba-after { transform: translateX(36px); }
        }
        .ba-in-left, .ba-in-right {
          opacity: 1;
          transform: translate(0);
        }
        .ba-center {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ba-in-pop {
          opacity: 1;
          transform: scale(1);
        }
        .ba-quote {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .ba-in-fade {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-node-pulse {
          animation: baNodePulse 2.6s ease-in-out infinite;
        }
        @keyframes baNodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.25); }
          50% { box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-heading-hidden, .ba-before, .ba-after, .ba-center, .ba-quote {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .ba-node-pulse {
            animation: none !important;
          }
        }
      `}),e.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[e.jsxs("div",{ref:x,className:"ba-heading-hidden text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12",children:[e.jsx("p",{className:"text-sky-400 text-[11px] md:text-xs lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2",children:"FROM CHALLENGES TO CONFIDENCE"}),e.jsxs("h2",{className:"text-[22px] leading-[28px] sm:text-3xl md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[40px] md:mt-6 font-extrabold text-white tracking-tight",children:["A Clearer Path From"," ",e.jsx("span",{className:"text-[#38BDF8]",children:"Software Challenges to Real Business Value"})]})]}),e.jsxs("div",{ref:i,className:"grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-4 items-stretch",children:[e.jsxs("div",{className:"md:col-span-9 grid mt-0 md:mt-[-25px] grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4 md:gap-3 items-stretch md:items-center",children:[e.jsxs("div",{className:"ba-before md:col-span-5 h-full  border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-red-500/30 hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2.5 mb-3.5 sm:mb-4",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0",children:e.jsx(b,{className:"w-4 h-4",strokeWidth:3})}),e.jsx("span",{className:"text-lg sm:text-[20px] font-bold text-white",children:"Before"})]}),e.jsx("ul",{className:"space-y-2 sm:space-y-2.5",children:o.map((t,s)=>e.jsxs("li",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0",children:e.jsx(b,{className:"w-2.5 h-2.5",strokeWidth:3})}),e.jsx("span",{className:"text-[13px] sm:text-[16px] text-slate-400 leading-relaxed",children:t})]},s))})]}),e.jsxs("div",{className:"ba-center md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2 py-1 md:py-0",children:[e.jsx(u,{className:"w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0",strokeWidth:2.5}),e.jsxs("div",{className:"flex flex-col items-center text-center px-1",children:[e.jsx("div",{className:"ba-node-pulse w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center mb-2 sm:mb-2.5",children:e.jsx(A,{className:"w-6 h-6 sm:w-7 sm:h-7"})}),e.jsxs("div",{className:"text-xs sm:text-sm font-bold text-white leading-tight mb-1 sm:mb-1.5 whitespace-nowrap md:whitespace-normal",children:["Software",e.jsx("br",{}),"Engineering"]}),e.jsxs("div",{className:"hidden sm:block text-[11px] sm:text-[12px] text-slate-400 leading-snug",children:["Turning code into",e.jsx("br",{}),"opportunities"]})]}),e.jsx(u,{className:"w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0",strokeWidth:2.5})]}),e.jsxs("div",{className:"ba-after md:col-span-5 h-full  lg:mt-0 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2.5 mb-3.5 sm:mb-4",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0",children:e.jsx(y,{className:"w-4 h-4",strokeWidth:3})}),e.jsx("span",{className:"text-lg sm:text-[16px] font-bold text-white",children:"After"})]}),e.jsx("ul",{className:"space-y-2 sm:space-y-2.5",children:m.map((t,s)=>e.jsxs("li",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0",children:e.jsx(y,{className:"w-2.5 h-2.5",strokeWidth:3})}),e.jsx("span",{className:"text-[13px] sm:text-[16px] text-slate-300 leading-relaxed",children:t})]},s))})]})]}),e.jsx("div",{className:"md:col-span-3 flex md:h-[200px]",children:e.jsxs("div",{className:"ba-quote w-full  border border-slate-700 rounded-2xl p-5 flex flex-col justify-center transition-all duration-300 hover:border-sky-500/30",children:[e.jsx("div",{className:"text-4xl leading-none text-slate-600 font-serif mb-3",children:"“"}),e.jsx("p",{className:"text-sm text-slate-200 lg:mt-[-15px] font-medium leading-relaxed mb-4 sm:mb-5",children:"Code is just syntax. Software becomes leverage when designed with intent."}),e.jsx("div",{className:"text-xs text-slate-400",children:"— Jawam Infotech"})]})})]})]})]})}function M(){const o=["Can you work with our existing data infrastructure?","Which cloud platforms do you support?","Can you help us migrate legacy data systems?","Do you provide real-time data solutions?","How do you ensure data security and compliance?","Do you offer ongoing support and maintenance?"],[m,x]=c.useState(null),i=r=>{x(a=>a===r?null:r)},t=c.useRef(null),s=c.useRef(null);return c.useEffect(()=>{const r=t.current,a=s.current;if(!r||!a)return;const n=new IntersectionObserver(p=>{p.forEach(h=>{h.isIntersecting&&(r.classList.add("faq-left-in"),n.unobserve(h.target))})},{threshold:.3});n.observe(r);const l=a.querySelectorAll(".faq-item"),d=new IntersectionObserver(p=>{p.forEach(h=>{h.isIntersecting&&(l.forEach((f,w)=>{f.style.transitionDelay=`${w*80}ms`,f.classList.add("faq-item-in")}),d.unobserve(h.target))})},{threshold:.1});return d.observe(a),()=>{n.disconnect(),d.disconnect()}},[]),e.jsxs("section",{className:"relative py-0 md:py-0 mt-0 md:mt-[-20px] lg:mt-0 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[e.jsx("style",{children:`
        .faq-left-hidden {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .faq-left-in {
          opacity: 1;
          transform: translateX(0);
        }
        .faq-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease;
        }
        .faq-item-in {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.35s ease, opacity 0.3s ease;
        }
        .faq-answer.faq-answer-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer > div {
          overflow: hidden;
        }
        .faq-icon-rotate {
          transition: transform 0.3s ease;
        }
        .faq-icon-rotate.faq-icon-open {
          transform: rotate(90deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-left-hidden, .faq-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .faq-answer {
            transition: none !important;
          }
        }
      `}),e.jsx("div",{className:"max-w-[1130px] mx-auto relative z-10",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start",children:[e.jsxs("div",{ref:t,className:"faq-left-hidden lg:col-span-4 flex flex-col items-start text-left lg:mt-2",children:[e.jsx("p",{className:"text-sky-400 text-[12px] mx-auto md:mx-auto lg:mx-0 md:text-[15px] lg:text-[13px] font-bold tracking-[0.25em] uppercase mb-3",children:"FREQUENTLY ASKED QUESTIONS"}),e.jsx("h2",{className:"text-2xl sm:text-3xl hidden md:hidden lg:block lg:text-[40px] lg:leading-[45px] font-extrabold text-white tracking-tight leading-tight mb-4",children:"Questions Before You Get Started"}),e.jsx("p",{className:"text-[16px] hidden md:hidden lg:block text-slate-400 leading-relaxed mb-6",children:"Have questions? We've got answers. Here are some of the most common questions about our data engineering services."}),e.jsxs(g,{to:"/contact-us",className:"hidden md:hidden lg:block md:inline-flex lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all ",children:[e.jsx("span",{children:"Ask a Question"}),e.jsx(u,{className:"w-4 h-4"})]})]}),e.jsx("div",{ref:s,className:"lg:col-span-8 flex flex-col gap-2 mt-[-15px] lg:mt-0 md:mt-0",children:o.map((r,a)=>{const n=m===a;return e.jsxs("div",{className:"faq-item bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 rounded-lg overflow-hidden",children:[e.jsxs("button",{type:"button",onClick:()=>i(a),"aria-expanded":n,className:"w-full flex items-center justify-between gap-4 px-4 py-2.5 text-left cursor-pointer",children:[e.jsx("span",{className:"text-xs md:text-[13px] lg:text-[15px] font-medium text-slate-200",children:r}),e.jsx("span",{className:`faq-icon-rotate ${n?"faq-icon-open":""} shrink-0 w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center`,children:n?e.jsx(q,{className:"w-3 h-3"}):e.jsx(E,{className:"w-3 h-3"})})]}),e.jsx("div",{className:`faq-answer ${n?"faq-answer-open":""}`,children:e.jsx("div",{children:e.jsx("p",{className:"px-4 pb-3 -mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-relaxed",children:"Reach out to our team and we'll walk you through exactly how we can help with this."})})})]},a)})})]})})]})}const z=[{icon:L,title:"Data Platforms",description:"Scalable data infrastructure tailored to your business needs, built for reliable long-term growth."},{icon:D,title:"Automated Pipelines",description:"Reliable workflows with minimal manual intervention, keeping your data flowing accurately around the clock."},{icon:C,title:"Analytics Infrastructure",description:"High-performance systems for reporting and advanced analytics, turning raw data into clear business insights."},{icon:I,title:"Data Modernization",description:"Migrate and upgrade legacy data environments into modern, cloud-ready platforms built for scale."},{icon:S,title:"Data Integration",description:"Connect multiple systems, APIs, and third-party platforms into one unified, easy-to-manage data ecosystem."},{icon:O,title:"Data Governance",description:"Improve data quality, security, compliance, and control across every stage of your data lifecycle."}];function P(){return e.jsxs("section",{className:"w-full mt-[60px] md:mt-[80px] lg:mt-[100px] max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10",children:[e.jsx("style",{children:`
        @keyframes iconFloatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .icon-float-idle {
          animation: iconFloatIdle 2.4s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .icon-float-idle {
            animation: none;
          }
        }
      `}),e.jsxs("div",{className:"text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12",children:[e.jsx("p",{className:"text-[#04A3DA] font-semibold text-[13px] sm:text-[14px] tracking-widest uppercase mb-3",children:"WHAT WE CAN BUILD"}),e.jsxs("h2",{className:"font-bold text-[24px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-tight text-white tracking-[-0.5px]",children:["Our Data Engineering ",e.jsx("span",{className:"text-[#04A3DA]",children:"Capabilities"})]})]}),e.jsx("div",{className:"grid grid-cols-1 lg:mt-[-10px] md:mt-[-20px] mt-[-10px] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6",children:z.map((o,m)=>{const x=o.icon;return e.jsxs("div",{className:"group relative overflow-hidden rounded-[20px] border border-white/10 p-5 sm:p-7 md:p-5 flex flex-col justify-between transition-all duration-300 ease-out sm:hover:bg-[#15233E]/80 sm:hover:border-[#04A3DA]/60 sm:hover:-translate-y-1.5 sm:hover:shadow-[0_12px_30px_-8px_rgba(4,163,218,0.22)] backdrop-blur-sm",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#04A3DA] to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),e.jsxs("div",{children:[e.jsx("div",{className:"icon-float-idle w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#04A3DA]/10  flex items-center justify-center mb-4 sm:mb-5 text-[#04A3DA] sm:group-hover:scale-105 sm:group-hover:bg-[#04A3DA]/20 sm:group-hover:border-[#04A3DA]/40 transition-all duration-300",style:{animationDelay:`${m%3*.4}s`},children:e.jsx(x,{className:"w-5 h-5 sm:w-6 sm:h-6",strokeWidth:2})}),e.jsx("h3",{className:"text-white  text-[17px] sm:text-[16px] leading-snug mb-2.5 sm:mb-3",children:o.title}),e.jsx("p",{className:"text-[#B4BAC5] sm:group-hover:text-[#E7E8EA] text-[14px] sm:text-[14px] leading-[21px] sm:leading-[24px] transition-colors duration-200",children:o.description})]})]},m)})})]})}function H(){return e.jsx("section",{id:"dream-team-section",className:"px-4 mb-0 md:mb-0 lg:mb-16 md:mt-16 mt-12 lg:mt-24",children:e.jsx("div",{className:"max-w-[1150px] mx-auto",children:e.jsxs("div",{className:"bg-[linear-gradient(357.37deg,_rgba(177,226,244,0.2)_1.93%,_rgba(230,246,251,0.2)_97.52%)] border border-white/10 rounded-2xl px-4 md:px-6 lg:px-10 py-6 md:py-10 lg:py-12 text-center",children:[e.jsxs("h2",{className:"font-semibold text-[28px] md:text-[42px] lg:text-[56px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.5px] text-white text-center mb-4 md:mb-6",children:["Your Data Has ",e.jsx("span",{className:"text-sky-400",children:"More"})," To Tell You"]}),e.jsx("p",{className:"mb-4 md:mb-6 mx-auto max-w-[850px] text-[#E7E8EA] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-[-0.5px] text-center",children:"Let's build the data foundation that helps you turn insights into action. Our team of experts will help you unlock the full potential of your growth."}),e.jsxs("div",{className:"flex flex-row items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-6",children:[e.jsxs(g,{to:"/contact-us",className:"inline-flex items-center gap-1.5 sm:gap-2 text-white text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap",children:["Start a conversation",e.jsx("svg",{className:"w-3 h-3 md:w-4 md:h-4 shrink-0",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"})})]}),e.jsx(g,{to:"/services#services-cards",className:"inline-flex items-center gap-2 text-[#0F172A] text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white hover:bg-slate-100 transition-all shadow-lg whitespace-nowrap",children:"Explore Our Services"})]})]})})})}function _(){return e.jsxs("main",{id:"saftware",className:"min-h-screen  text-white",children:[e.jsx(R,{}),e.jsx(W,{}),e.jsx(Y,{}),e.jsx(P,{}),e.jsx(M,{}),e.jsx(H,{})]})}export{_ as default};
