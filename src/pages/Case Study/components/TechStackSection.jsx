import { useState, useEffect, useRef, useCallback } from 'react';

const si = (slug, hex, alt) => ({ type: 'img', src: `https://cdn.simpleicons.org/${slug}/${hex}`, alt });

const Css3Svg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M9 0l10.6 118.8L64 128l44.4-9.2L119 0H9z"/><path fill="#33A9DC" d="M64 9.6V119l35.9-8.8L108.9 9.6H64z"/><path fill="#fff" d="M64 53.6H45.7l-1.3-14.4H64V25H29l.3 3.4L32.4 67h31.6V53.6zM64 92.7l-.1.1-15.1-4.1-1-11h-13.5l1.9 21.7 27.6 7.7h.1v-14.4z"/><path fill="#EBEBEB" d="M63.9 53.6v13.4h17.1l-1.6 18-15.5 4.1v14.4l27.6-7.7.2-2.3L94.9 42H63.9v11.6zM63.9 25v14.2h33.7l.3-3.1.6-6.7.3-4.4H63.9z"/></svg>
);

const AwsSvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F90" d="M36.4 66.7c0 1.6.2 2.9.5 3.8.3.9.7 1.9 1.4 3 .2.4.3.8.3 1.1 0 .5-.3 1-.9 1.5l-2.9 1.9c-.4.3-.8.4-1.2.4-.5 0-.9-.2-1.4-.6-.6-.7-1.2-1.4-1.6-2.1-.4-.8-.9-1.6-1.4-2.7-3.5 4.1-7.9 6.2-13.2 6.2-3.8 0-6.8-1.1-9-3.2-2.2-2.2-3.3-5.1-3.3-8.7 0-3.8 1.3-6.9 4.1-9.2 2.7-2.3 6.4-3.5 11-3.5 1.5 0 3.1.1 4.7.4 1.7.2 3.4.6 5.2 1v-3.3c0-3.5-.7-6-2.2-7.4-1.5-1.5-4-2.2-7.6-2.2-1.6 0-3.3.2-5 .6-1.7.4-3.4.9-5 1.6-.7.3-1.3.5-1.6.6-.3.1-.6.2-.8.2-.7 0-1.1-.5-1.1-1.6v-2.5c0-.8.1-1.4.4-1.7.3-.4.7-.7 1.4-1 1.6-.8 3.5-1.5 5.8-2 2.3-.6 4.7-.8 7.3-.8 5.6 0 9.6 1.3 12.3 3.8 2.6 2.5 3.9 6.4 3.9 11.6v15.4h.1zm-18.2 6.8c1.5 0 3-.3 4.7-.8 1.6-.5 3.1-1.5 4.3-2.8.7-.8 1.3-1.8 1.6-2.8.3-1 .5-2.3.5-3.7v-1.8c-1.3-.3-2.7-.6-4.1-.7-1.4-.2-2.8-.3-4.1-.3-3 0-5.2.6-6.7 1.8-1.5 1.2-2.2 2.9-2.2 5.1 0 2.1.5 3.7 1.6 4.8 1.1 1 2.5 1.5 4.4 1.5zm36-4c-.8 0-1.3-.1-1.7-.4-.4-.3-.7-.9-1-1.8L11.1 34.8c-.3-.9-.5-1.5-.5-1.9 0-.7.4-1.1 1.1-1.1h4.2c.9 0 1.5.1 1.8.4.4.3.7.9.9 1.8l8.7 34.3 8.1-34.3c.2-.9.5-1.5.9-1.8.4-.3 1-.4 1.9-.4h3.4c.9 0 1.5.1 1.9.4.4.3.7.9.9 1.8l8.2 34.7 9-34.7c.3-.9.6-1.5.9-1.8.4-.3.9-.4 1.8-.4h4c.7 0 1.1.4 1.1 1.1 0 .2 0 .4-.1.7-.1.3-.1.6-.3 1.1L58.3 68.3c-.3.9-.6 1.5-1 1.8-.4.3-1 .4-1.7.4h-3.6c-.9 0-1.5-.1-1.9-.4-.4-.3-.7-.9-.9-1.8L42.4 34l-8 34.3c-.2.9-.5 1.5-.9 1.8-.4.3-1 .4-1.9.4h-3.6zm57.6 1.1c-2.4 0-4.8-.3-7.1-.8-2.3-.5-4.1-1.1-5.3-1.7-.7-.4-1.2-.8-1.4-1.2-.2-.4-.3-.8-.3-1.2v-2.6c0-1.1.4-1.6 1.1-1.6.3 0 .6.1.9.2.3.1.7.3 1.2.5 1.6.7 3.4 1.3 5.2 1.6 1.9.4 3.7.5 5.6.5 3 0 5.3-.5 6.9-1.6 1.6-1 2.5-2.5 2.5-4.5 0-1.3-.4-2.4-1.3-3.3-.9-.9-2.4-1.7-4.6-2.5l-6.6-2.1c-3.3-1-5.7-2.6-7.2-4.6-1.5-2-2.3-4.2-2.3-6.5 0-1.9.4-3.5 1.2-5 .8-1.4 1.9-2.7 3.2-3.6 1.4-1 2.9-1.8 4.7-2.3 1.8-.5 3.6-.7 5.6-.7 1 0 2 .1 3 .2 1 .1 1.9.3 2.8.5.9.2 1.7.5 2.5.8.8.3 1.4.6 1.8.9.6.4 1 .8 1.2 1.2.2.4.3.9.3 1.5v2.4c0 1.1-.4 1.6-1.1 1.6-.4 0-1-.2-1.8-.6-2.7-1.2-5.7-1.8-9-1.8-2.7 0-4.8.4-6.3 1.3-1.5.9-2.3 2-2.3 3.4 0 1.2.5 2.4 1.6 3.5 1.1 1.1 3.1 2.1 5.7 3l3.7 1.2c3.5 1.1 6 2.4 7.7 3.9 1.6 1.5 2.5 3.3 2.5 5.5 0 2-.5 3.8-1.4 5.4-.9 1.6-2.1 2.9-3.6 3.9-1.5 1.1-3.1 1.9-5 2.5-2 .7-4 1-6.2 1z"/></svg>
);

const PlaywrightSvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#2EAD33" d="M22.221 10.148c.146.362.183.484.183 1.269v1.05c0 .719-.037.898-.126 1.148a1.72 1.72 0 0 1-.628.827c-.309.216-.577.294-1.204.294H16.9v-.001c-.05 1.454-.34 2.87-.847 4.13-.643 1.594-1.578 2.755-2.779 3.446-.505.29-1.077.436-1.653.436-.518 0-1.036-.12-1.51-.36l-.633-.322.415-.575c.79-1.098 1.316-2.437 1.559-3.978l.05-.324-.253-.207c-2.518-2.062-4.096-5.058-4.328-8.226l-.023-.323H2.85c-.719 0-.898-.037-1.148-.126a1.72 1.72 0 0 1-.827-.628C.658 7.86.58 7.591.58 6.964V5.914c0-.719.037-.898.126-1.148.13-.36.359-.66.628-.827.309-.216.577-.294 1.204-.294h3.545V3.6c0-.719.037-.898.126-1.148.13-.36.359-.66.628-.827.309-.216.577-.294 1.204-.294h.789c.719 0 .898.037 1.148.126.36.13.66.359.827.628.216.309.294.577.294 1.204v.645h2.263V3.6c0-.719.037-.898.126-1.148.13-.36.359-.66.628-.827.309-.216.577-.294 1.204-.294h.789c.719 0 .898.037 1.148.126.36.13.66.359.827.628.216.309.294.577.294 1.204v.645h3.545c.627 0 .895.078 1.204.294.269.167.498.467.628.827z"/></svg>
);

const OpenaiSvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
);

const TwilioSvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#F22F46" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 19.2c-3.96 0-7.2-3.24-7.2-7.2 0-3.96 3.24-7.2 7.2-7.2 3.96 0 7.2 3.24 7.2 7.2 0 3.96-3.24 7.2-7.2 7.2zm2.1-10.15a1.95 1.95 0 100 3.9 1.95 1.95 0 000-3.9zm-4.2 0a1.95 1.95 0 100 3.9 1.95 1.95 0 000-3.9zm4.2 4.2a1.95 1.95 0 100 3.9 1.95 1.95 0 000-3.9zm-4.2 0a1.95 1.95 0 100 3.9 1.95 1.95 0 000-3.9z"/></svg>
);

const tabData = {
  frontend: [
    { name: 'Angular',      svg: si('angular','DD0031','Angular') },
    { name: 'Vue.js',       svg: si('vuedotjs','41B883','Vue.js') },
    { name: 'React',        svg: si('react','61DAFB','React') },
    { name: 'HTML5',        svg: si('html5','E34F26','HTML5') },
    { name: 'TypeScript',   svg: si('typescript','3178C6','TypeScript') },
    { name: 'CSS3',         svg: { type: 'component', Component: Css3Svg } },
    { name: 'Tailwind CSS', svg: si('tailwindcss','06B6D4','Tailwind CSS') },
    { name: 'Bootstrap',    svg: si('bootstrap','7952B3','Bootstrap') },
    { name: 'MUI',          svg: si('mui','007FFF','MUI') },
    { name: 'Sass',         svg: si('sass','CC6699','Sass') }
  ],
  backend: [
    { name: 'Node.js', svg: si('nodedotjs','5FA04E','Node.js') },
    { name: 'Python',  svg: si('python','3776AB','Python') },
    { name: 'Go',      svg: si('go','00ADD8','Go') },
    { name: 'Java',    svg: si('openjdk','FFFFFF','Java') },
    { name: 'PHP',     svg: si('php','777BB4','PHP') },
    { name: 'Express', svg: si('express','FFFFFF','Express') }
  ],
  database: [
    { name: 'PostgreSQL', svg: si('postgresql','4169E1','PostgreSQL') },
    { name: 'MongoDB',    svg: si('mongodb','47A248','MongoDB') },
    { name: 'MySQL',      svg: si('mysql','4479A1','MySQL') },
    { name: 'Redis',      svg: si('redis','FF4438','Redis') },
    { name: 'Firebase',   svg: si('firebase','FFCA28','Firebase') },
    { name: 'SQLite',     svg: si('sqlite','003B57','SQLite') }
  ],
  cloud_devops: [
    { name: 'Docker',     svg: si('docker','2496ED','Docker') },
    { name: 'Kubernetes', svg: si('kubernetes','326CE5','Kubernetes') },
    { name: 'AWS',        svg: { type: 'component', Component: AwsSvg } },
    { name: 'Terraform',  svg: si('terraform','7B42BC','Terraform') },
    { name: 'GitHub',     svg: si('github','FFFFFF','GitHub') },
    { name: 'Linux',      svg: si('linux','FCC624','Linux') }
  ],
  apis: [
    { name: 'GraphQL', svg: si('graphql','E10098','GraphQL') },
    { name: 'Postman', svg: si('postman','FF6C37','Postman') },
    { name: 'Swagger', svg: si('swagger','85EA2D','Swagger') },
    { name: 'Stripe',  svg: si('stripe','635BFF','Stripe') },
    { name: 'Twilio',  svg: { type: 'component', Component: TwilioSvg } },
    { name: 'OpenAI',  svg: { type: 'component', Component: OpenaiSvg } }
  ],
  testing: [
    { name: 'Selenium',   svg: si('selenium','43B02A','Selenium') },
    { name: 'Cypress',    svg: si('cypress','FFFFFF','Cypress') },
    { name: 'Jest',       svg: si('jest','C21325','Jest') },
    { name: 'Playwright', svg: { type: 'component', Component: PlaywrightSvg } },
    { name: 'Mocha',      svg: si('mocha','8D6748','Mocha') },
    { name: 'Postman',    svg: si('postman','FF6C37','Postman') }
  ]
};

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState('frontend');
  const tabLogosRef = useRef(null);

  useEffect(() => {
    const el = tabLogosRef.current;
    if (!el) return;
    el.style.opacity = 0;
    const timeout = setTimeout(() => {
      el.innerHTML = '';
      const techs = tabData[activeTab];
      if (!techs) { el.style.opacity = 1; return; }
      const repeated = [...techs, ...techs, ...techs, ...techs];
      const secondsPerIcon = 1.5;
      const duration = techs.length * secondsPerIcon;
      const track = document.createElement('div');
      track.className = 'tech-marquee-track';
      track.style.animationDuration = `${duration}s`;
      repeated.forEach(t => {
        const item = document.createElement('div');
        item.className = 'flex items-center justify-center shrink-0';
        if (t.svg.type === 'component') {
          const container = document.createElement('div');
          container.innerHTML = '<svg></svg>';
        } else {
          item.innerHTML = t.svg.src
            ? `<img src="${t.svg.src}" class="w-10 h-10 md:w-12 md:h-12 object-contain" alt="${t.svg.alt || t.name}" />`
            : '';
        }
        track.appendChild(item);
      });
      el.appendChild(track);
      el.style.opacity = 1;
    }, 150);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const renderTechIcon = useCallback((tech) => {
    if (tech.svg.type === 'component') {
      const Comp = tech.svg.Component;
      return <Comp />;
    }
    return (
      <img src={tech.svg.src} className="w-10 h-10 md:w-12 md:h-12 object-contain" alt={tech.svg.alt || tech.name} />
    );
  }, []);

  return (
    <section className="px-4 max-w-6xl mx-auto md:mb-[80px] mb-[45px] mt-0 md:mt-[-25px]" id="tech-stack-section">
      <div className="text-center mb-8">
        <p className="mb-3 font-semibold md:text-[16px] text-[12px] leading-[18px] text-center text-[#04A3DA] uppercase">
          TECH STACK
        </p>
        <h2 className="font-bold md:text-[44px] text-[24px] leading-[36px] md:leading-[48px] tracking-[-0.5px] text-center mb-8">
          Technology Stack <span className="text-sky-400">We Use</span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10 mt-[-15px] md:mt-0">
        {[
          { key: 'frontend', label: 'Frontend' },
          { key: 'backend', label: 'Backend' },
          { key: 'database', label: 'Database' },
          { key: 'cloud_devops', label: 'Cloud & DevOps' },
          { key: 'apis', label: 'APIs & integrations' },
          { key: 'testing', label: 'Testing & Tools' }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-btn px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 border border-sky-500'
                : 'bg-white text-slate-800 border border-white hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tech-marquee-wrapper" ref={tabLogosRef}>
        {/* populated by useEffect */}
      </div>
    </section>
  );
}
