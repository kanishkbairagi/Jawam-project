import{j as e,r as l,L as p,u as A}from"./vendor-react-hCZ_EpQP.js";import{b}from"./blogData-Bm-ns1JC.js";function I(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("div",{className:"hero-fade-up flex justify-center mb-6 lg:mt-8 md:mt-6 mt-0",style:{animationDelay:"0ms"},children:e.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 shadow-md transition-transform duration-300 hover:scale-105",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 text-[#4F7DF3]",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})}),e.jsx("span",{className:"text-[15px] font-semibold text-[#3F4555]",children:"Blogs"})]})}),e.jsxs("h1",{className:"hero-fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left md:text-center lg:text-center mb-4 md:mb-6 lg:mb-6",style:{animationDelay:"120ms"},children:["Discover our ",e.jsx("span",{className:"text-sky-400",children:"latest"})," news"]}),e.jsx("p",{className:"hero-fade-up text-[#E7E8EA] text-left md:text-center lg:text-center text-sm md:text-base lg:text-base max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-8",style:{animationDelay:"240ms"},children:"Discover the achievement that set us apart. Form groundbreaking projects to industry accolades, we take pride in our accomplishment."})]})}function D(){const s=b,t=s.length,u=[s[t-1],...s,s[0]],[c,i]=l.useState(1),[j,o]=l.useState(!0),[h,f]=l.useState(!1),r=l.useRef(!1),x=l.useRef(0),d=l.useRef(0),v=((c-1)%t+t)%t;l.useEffect(()=>{const n=s.map(a=>{const m=new Image;return m.src=a.image,m.decode&&m.decode().catch(()=>{}),m});return()=>{n.forEach(a=>{a.src=""})}},[]);const g=()=>{r.current||(r.current=!0,o(!0),i(n=>n+1))},w=()=>{r.current||(r.current=!0,o(!0),i(n=>n-1))};l.useEffect(()=>{if(h)return;const n=setInterval(()=>{r.current||g()},3e3);return()=>clearInterval(n)},[h]);const N=n=>{if(n.target===n.currentTarget){if(c===u.length-1){o(!1),i(1),requestAnimationFrame(()=>{requestAnimationFrame(()=>{o(!0),r.current=!1})});return}if(c===0){o(!1),i(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{o(!0),r.current=!1})});return}r.current=!1}},y=n=>{r.current||(r.current=!0,o(!0),i(n+1))},F=n=>{x.current=n.touches[0].clientX,d.current=n.touches[0].clientX},E=n=>{d.current=n.touches[0].clientX},T=()=>{const n=x.current-d.current;Math.abs(n)>40&&(n>0?g():w()),x.current=0,d.current=0};return e.jsxs("div",{className:`
       mb-[-20px] lg:mb-0 md:mb-0
        relative
        w-full
        md:max-w-[640px]
        lg:max-w-[980px]
        mx-auto
        mb-10
        select-none
      `,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onTouchStart:F,onTouchMove:E,onTouchEnd:T,children:[e.jsx("div",{className:`
          overflow-hidden
          rounded-2xl
          shadow-md
          border
          border-slate-100/20
        `,children:e.jsx("div",{className:`flex will-change-transform ${j?"transition-transform duration-500 ease-in-out":""}`,style:{transform:`translate3d(-${c*100}%, 0, 0)`},onTransitionEnd:N,children:u.map((n,a)=>e.jsxs("div",{className:`
                w-full
                flex-shrink-0
                flex
                flex-col
                sm:flex-row
              `,children:[e.jsx("div",{className:`
                  w-full
                  sm:w-1/2
                  h-40
                  lg:h-[300px]
                  md:h-[290px]
                  overflow-hidden
                `,children:e.jsx("img",{src:n.image,alt:n.title,loading:"eager",decoding:"async",draggable:"false",className:`
                    w-full
                    h-full
                    object-cover
                    pointer-events-none
                  `})}),e.jsxs("div",{className:`
                  w-full
                  sm:w-1/2
                  p-5
                  sm:p-6
                  flex
                  flex-col
                  justify-center
                  space-y-6
                `,children:[e.jsx("h2",{className:`
                    text-[#00A3FF]
                    text-[16px]
                    md:text-[18px]
                    lg:text-[22px]
                    font-bold
                    mb-0
                    leading-snug
                  `,children:n.title}),e.jsx("p",{className:`
                    text-white
                    text-xs
                    md:text-[13.5px]
                    lg:text-[14px]
                    mt-[-15px]
                    leading-relaxed
                    mb-8
                  `,children:n.description}),e.jsxs(p,{to:`/blog-post?id=${n.id}`,state:{postId:n.id},className:`
                    self-start
                    w-fit
                    inline-flex
                    items-center
                    justify-center
                    gap-1
                    px-4
                    py-2
                    rounded-full
                    bg-[#8799AA]
                    border
                    border-[#B8C4CF]
                    text-white
                    text-[12px]
                    font-normal
                    leading-none
                    transition-all
                    duration-300
                    hover:bg-[#7A8D9F]
                    group
                  `,children:[e.jsx("span",{children:"Read More"}),e.jsx("span",{className:`
                      text-[14px]
                      leading-none
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    `,children:"→"})]})]})]},`${n.id}-${a}`))})}),e.jsx("div",{className:"flex items-center justify-center gap-1.5 mt-3.5",children:s.map((n,a)=>e.jsx("button",{type:"button",onClick:()=>y(a),"aria-label":`Go to slide ${a+1}`,className:`
              transition-all
              duration-300
              rounded-full
              h-1.5
              ${a===v?"w-5 bg-[#00A3FF]":"w-1.5 bg-slate-300 hover:bg-slate-400"}
            `},a))})]})}function k(){const s=b;return e.jsx("div",{className:"w-full max-w-[980px] mx-auto pb-12 md:pb-4 lg:pb-12 mt-10 md:mt-[50px] lg:mt-[70px]",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5",children:s.map(t=>e.jsxs(p,{to:`/blog-post?id=${t.id}`,state:{postId:t.id},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`
              border
              border-slate-100/20
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
              flex
              flex-col
              hover:-translate-y-1
              block
              text-left
            `,children:[e.jsx("div",{className:"w-full h-36 md:h-40 overflow-hidden",children:e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",decoding:"async",className:`
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-105
                `})}),e.jsxs("div",{className:"p-4 flex flex-col flex-grow",children:[e.jsx("h3",{className:`
                text-[#00A3FF]
                text-[15px]
                md:text-[16px]
                font-bold
                mb-2
                leading-snug
              `,children:t.title}),e.jsx("p",{className:`
                text-slate-100
                text-xs
                md:text-[13px]
                leading-relaxed
              `,children:t.description})]})]},t.id))})})}function S(){const s=A();return l.useEffect(()=>{(s.hash==="#blog-grid"||s.pathname==="/blog-grid")&&setTimeout(()=>{const t=document.getElementById("blog-grid");t&&t.scrollIntoView({behavior:"smooth"})},100)},[s]),e.jsxs("main",{className:"min-h-screen mb-[-60px] md:mb-[-60px] ",children:[e.jsx("div",{className:"h-12"}),e.jsx("section",{className:"py-12 px-4 md:px-6 lg:px-6",children:e.jsxs("div",{className:"max-w-[1150px] mx-auto",children:[e.jsx(I,{}),e.jsx(D,{}),e.jsx("div",{id:"blog-grid",children:e.jsx(k,{})})]})})]})}export{S as default};
