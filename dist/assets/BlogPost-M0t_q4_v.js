import{j as e,L as b,r as c,e as D,f as R,u as T}from"./vendor-react-hCZ_EpQP.js";import{g as A,I as S,b as B}from"./blogData-Bm-ns1JC.js";const P="/assets/robothand-C3bzFTFS.webp";function F({post:r}){const s=r?.title||"AI & Machine Learning – Driving Smarter Decisions",o=r?.date||"Aug 26, 2026",l=r?.category||"Research",a=r?.author||"Jawam Team",d=r?.image||P;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"header-fade-up hidden sm:block mb-8 text-left max-w-[1050px] mx-auto",style:{animationDelay:"0ms"},children:e.jsxs(b,{to:"/blog",className:"group inline-flex items-center gap-2 text-white hover:text-sky-300 transition-colors text-sm font-medium",children:[e.jsx("svg",{className:"w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Blogs"]})}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("p",{className:"header-fade-up mb-5 text-white text-xs md:text-[16px] font-normal leading-[28px] tracking-[-0.5px] mt-[-45px] md:mt-[-30px]",style:{animationDelay:"100ms"},children:[o," : ",l]}),e.jsx("h1",{className:"header-fade-up mb-4 font-extrabold text-2xl sm:text-3xl md:text-[45px] lg:text-[45px] leading-tight md:leading-[55px] tracking-[-0.5px] text-center text-white max-w-[950px] mx-auto",style:{animationDelay:"220ms"},children:s}),e.jsxs("div",{className:"header-fade-up flex items-center justify-center gap-2 mt-4",style:{animationDelay:"340ms"},children:[e.jsx("div",{className:"w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#04A3DA]"}),e.jsx("span",{className:"text-[#E7E8EA] font-normal text-sm md:text-[18px] leading-[28px] tracking-[-0.5px]",children:a})]})]}),e.jsx("div",{className:"header-image mb-10 mt-[-10px] w-full max-w-[370px] h-[223.56px] rounded-[11.32px] overflow-hidden mx-auto sm:w-full sm:h-[398px] sm:max-w-[1050px] sm:rounded-xl",style:{animationDelay:"400ms"},children:e.jsx("img",{src:d,alt:s,className:"w-full h-full object-cover rounded-[11.32px] sm:rounded-xl transition-transform duration-700 ease-out hover:scale-105"})}),e.jsx("div",{className:"header-line w-full max-w-[1150px] h-[2px] mx-auto rounded-sm mb-16 bg-gradient-to-r from-[#04A3DA] to-[rgba(255,255,255,0.75)] mt-[-15px] md:mt-0 hover:from-[#04A3DA] hover:to-[#04A3DA] transition-all duration-300",style:{animationDelay:"650ms"}})]})}function E({postId:r=6}){const s=A(r);if(s&&s.ContentComponent&&s.ContentComponent!==E){const o=s.ContentComponent;return e.jsx(o,{})}return e.jsx(S,{})}function M({currentId:r}){const s=c.useRef(null),o=c.useRef(null),l=c.useRef(null),a=c.useRef(0),d=c.useRef(!1),[I,p]=c.useState(0),j=B.filter(t=>t.id!==Number(r)),x=j.slice(0,3);c.useEffect(()=>{const t=s.current;if(!t||x.length<=1)return;const n=Array.from(t.children),g=(w,f=!0)=>{if(!n.length)return;let i=w;i>=n.length&&(i=0),i<0&&(i=n.length-1);const v=n[i];v&&(a.current=i,p(i),t.scrollTo({left:v.offsetLeft,behavior:f?"smooth":"auto"}))},h=()=>{clearInterval(o.current),o.current=setInterval(()=>{d.current||g(a.current+1)},3500)},m=()=>{clearInterval(o.current),o.current=null},u=()=>{d.current=!0,m(),clearTimeout(l.current)},y=()=>{d.current=!1,clearTimeout(l.current),l.current=setTimeout(()=>{h()},1500)},N=()=>{const w=t.scrollLeft;let f=0,i=1/0;n.forEach((v,L)=>{const k=Math.abs(v.offsetLeft-w);k<i&&(i=k,f=L)}),a.current=f,p(f)};return t.addEventListener("touchstart",u,{passive:!0}),t.addEventListener("touchend",y,{passive:!0}),t.addEventListener("scroll",N,{passive:!0}),h(),()=>{m(),clearTimeout(l.current),t.removeEventListener("touchstart",u),t.removeEventListener("touchend",y),t.removeEventListener("scroll",N)}},[r,x.length]);const C=t=>{const n=s.current;if(!n)return;const g=n.children[t];g&&(clearInterval(o.current),clearTimeout(l.current),a.current=t,p(t),n.scrollTo({left:g.offsetLeft,behavior:"smooth"}),l.current=setTimeout(()=>{o.current=setInterval(()=>{const h=a.current,m=h+1>=x.length?0:h+1,u=n.children[m];u&&(a.current=m,p(m),n.scrollTo({left:u.offsetLeft,behavior:"smooth"}))},3500)},1500))};return e.jsxs("div",{className:"mb-12 max-w-[1030px] mx-auto mt-[-20px] md:mt-[-30px]",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6 flex-wrap gap-4",children:[e.jsxs("h2",{className:"font-bold text-white text-left text-[28px] sm:text-[34px] leading-tight tracking-tight",children:["Related"," ",e.jsx("span",{className:"text-[#04A3DA]",children:"Blogs"})]}),e.jsxs(b,{to:"/blog#blog-grid",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-400/40 bg-sky-500/10 hover:bg-[#04A3DA] text-sky-300 hover:text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-sky-500/25 group",children:[e.jsx("span",{children:"See More"}),e.jsx("span",{className:"text-base transition-transform duration-300 group-hover:translate-x-1",children:"→"})]})]}),e.jsxs("div",{className:"sm:hidden",children:[e.jsx("div",{ref:s,className:`
            flex
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-hide
            overscroll-x-contain
            touch-pan-x
          `,style:{WebkitOverflowScrolling:"touch",scrollBehavior:"smooth"},children:x.map(t=>e.jsxs(b,{to:`/blog-post?id=${t.id}`,state:{postId:t.id},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`
                blog-card
                flex-shrink-0
                w-full
                snap-center
                hover:border-sky-400/30
                transition-all
                border
                border-white/10
                rounded-lg
                overflow-hidden
                block
                bg-slate-800/40
              `,style:{padding:"12px 14px"},children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("p",{className:"text-[#E7E8EA] text-xs mb-3 text-left",children:[t.date," : ",t.category]}),e.jsx("h3",{className:"text-white text-base mb-3 text-left leading-snug",children:t.title})]}),e.jsx("div",{className:"relative",style:{width:"100%",height:"auto",aspectRatio:"280/239"},children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",decoding:"async",draggable:"false",className:`
                    w-full
                    h-full
                    object-cover
                    rounded-md
                  `})})]},t.id))}),e.jsx("div",{className:"flex items-center justify-center gap-2 mt-4 mb-6",children:x.map((t,n)=>e.jsx("button",{type:"button","aria-label":`Go to related blog ${n+1}`,onClick:()=>C(n),className:`
                h-2
                rounded-full
                transition-all
                duration-300
                ${I===n?"w-5 bg-sky-400":"w-2 bg-white/30"}
              `},n))})]}),e.jsx("div",{className:"hidden sm:block max-w-[1030px] mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:j.slice(0,3).map(t=>e.jsxs(b,{to:`/blog-post?id=${t.id}`,state:{postId:t.id},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`
                blog-card
                hover:border-sky-400/50
                transition-all
                border
                border-white/10
                rounded-xl
                overflow-hidden
                block
                bg-slate-800/40
                hover:-translate-y-1.5
                duration-300
                shadow-sm
                hover:shadow-md
                hover:shadow-sky-500/10
              `,style:{padding:"14px"},children:[e.jsxs("div",{className:"mb-3",children:[e.jsxs("p",{className:"text-[#E7E8EA] text-xs mb-2.5 text-left font-medium",children:[t.date," : ",t.category]}),e.jsx("h3",{className:`
                  text-white
                  text-[15px]
                  font-semibold
                  mb-2
                  text-left
                  line-clamp-2
                  min-h-[44px]
                  leading-snug
                `,children:t.title})]}),e.jsx("div",{className:`
                  relative
                  rounded-lg
                  overflow-hidden
                `,style:{width:"100%",height:"auto",aspectRatio:"280/210"},children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",decoding:"async",className:`
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  `})})]},t.id))})})]})}function G(){const{id:r}=D(),[s]=R(),o=T(),l=r||s.get("id")||o.state?.postId||1,a=A(l);c.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[l]);const d=a?.ContentComponent||E;return e.jsx("div",{children:e.jsx("main",{className:"min-h-screen pt-24 mb-[-90px] md:mb-[-20px] lg:mb-[-70px]",children:e.jsxs("div",{className:"w-full mx-auto px-4 md:px-6 lg:px-6 py-8 text-center",children:[e.jsx(F,{post:a}),e.jsx(d,{postId:a.id}),e.jsx(M,{currentId:a.id})]})})})}export{G as default};
