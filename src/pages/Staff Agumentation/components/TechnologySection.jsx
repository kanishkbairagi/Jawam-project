import { useState } from 'react';
import { Icon } from '@iconify/react';

const si  = (slug, hex, alt) => ({ type: 'img', src: `https://cdn.simpleicons.org/${slug}/${hex}`, alt });
const di  = (name, v, alt)   => ({ type: 'img', src: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${v}.svg`, alt });
const dib = (name, v, alt)   => ({ type: 'img', src: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${v}.svg`, alt, style:{ filter:'brightness(1.7) saturate(1.3)' } });

const NextjsSvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="64" cy="64" r="64" fill="black"/>
    <path d="M102 102L50.5 36H36V92H47.5V51.5L95.5 110.5C97.8 108.1 99.9 105.4 102 102Z" fill="white"/>
    <path d="M83.5 36H95V92H83.5V36Z" fill="white"/>
  </svg>
);
const OpenAISvg = () => (
  <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
  </svg>
);

const tabData = {
  frontend: {
    title: <>Frontend <span className="text-sky-400">Developers</span></>,
    desc: "We believe great work happens when great people come together. Here's a glimpse of life at Jawam.",
    techs: [
      { name:'React',        ...si('react','61DAFB','React') },
      { name:'Next.js',      type:'svg', component: NextjsSvg },
      { name:'Angular',      ...si('angular','DD0031','Angular') },
      { name:'Vue.js',       ...si('vuedotjs','41B883','Vue.js') },
      { name:'TypeScript',   ...si('typescript','3178C6','TypeScript') },
      { name:'Tailwind CSS', ...si('tailwindcss','06B6D4','Tailwind CSS') },
    ]
  },
  backend: {
    title: <>Backend <span className="text-sky-400">Developers</span></>,
    desc: "Build highly-scalable, fast, secure, and robust APIs and databases to support complex business workflows.",
    techs: [
      { name:'Node.js',    ...si('nodedotjs','5FA04E','Node.js') },
      { name:'Python',     ...si('python','3776AB','Python') },
      { name:'Go',         ...si('go','00ADD8','Go') },
      { name:'Java',       ...di('java','original','Java') },
      { name:'PostgreSQL', ...si('postgresql','4169E1','PostgreSQL') },
      { name:'Docker',     ...si('docker','2496ED','Docker') },
       { name: 'Ruby', src: 'https://cdn.simpleicons.org/ruby/CC342D', alt: 'Ruby' },
    ]
  },
  fullstack: {
    title: <>Full Stack <span className="text-sky-400">Developers</span></>,
    desc: "End-to-end engineers who bridge frontend aesthetics and backend functionality to deliver complete products.",
    techs: [
      { name:'React',      ...si('react','61DAFB','React') },
      { name:'Node.js',    ...si('nodedotjs','5FA04E','Node.js') },
      { name:'Next.js',    type:'svg', component: NextjsSvg },
      { name:'TypeScript', ...si('typescript','3178C6','TypeScript') },
      { name:'Python',     ...si('python','3776AB','Python') },
      { name:'Docker',     ...si('docker','2496ED','Docker') },
    ]
  },
  ai_ml: {
    title: <>AI / ML <span className="text-sky-400">Engineers</span></>,
    desc: "Deploy neural networks, configure LLMs, design data pipelines, and incorporate intelligence into your apps.",
    techs: [
      { name:'Python',     ...si('python','3776AB','Python') },
      { name:'TensorFlow', ...si('tensorflow','FF6F00','TensorFlow') },
      { name:'PyTorch',    ...si('pytorch','EE4C2C','PyTorch') },
      { name:'OpenAI',     type:'svg', component: OpenAISvg },
      { name:'Pandas',     ...si('pandas','FFFFFF','Pandas') },
      { name:'Jupyter',    ...si('jupyter','F37626','Jupyter') },
    ]
  },
  devops: {
    title: <>DevOps <span className="text-sky-400">Engineers</span></>,
    desc: "Automate build infrastructure, manage server deployments, set up CI/CD pipelines, and secure cloud environments.",
    techs: [
      { name:'Docker',     ...si('docker','2496ED','Docker') },
      { name:'Kubernetes', ...si('kubernetes','326CE5','Kubernetes') },
      { name:'AWS',        ...di('amazonwebservices','plain-wordmark','AWS') },
      { name:'Terraform',  ...si('terraform','7B42BC','Terraform') },
      { name:'GitHub',     ...si('github','FFFFFF','GitHub') },
      { name:'Linux',      ...si('linux','FCC624','Linux') },
    ]
  },
  ui_ux: {
    title: <>UI / UX <span className="text-sky-400">Designers</span></>,
    desc: "Design gorgeous user interfaces, plan smooth user flows, create high-fidelity prototypes, and build component libraries.",
    techs: [
      { name:'Figma',       ...si('figma','F24E1E','Figma') },
      { name:'Adobe XD',    ...dib('xd','plain','Adobe XD') },
      { name:'Sketch',      ...si('sketch','F7B500','Sketch') },
      { name:'Illustrator', ...dib('illustrator','plain','Illustrator') },
      { name:'Photoshop',   ...dib('photoshop','plain','Photoshop') },
      { name:'Framer',      ...si('framer','0055FF','Framer') },
    ]
  },
  qa: {
    title: <>QA / Test <span className="text-sky-400">Engineers</span></>,
    desc: "Ensure software reliability, verify logic with unit/end-to-end testing, and execute automated regression suites.",
    techs: [
      { name:'Selenium',   ...si('selenium','43B02A','Selenium') },
      { name:'Cypress',    ...si('cypress','FFFFFF','Cypress') },
      { name:'Playwright', ...di('playwright','original','Playwright') },
      { name:'Jest',       ...si('jest','C21325','Jest') },
      { name:'Postman',    ...si('postman','FF6C37','Postman') },
      { name:'Mocha',      ...si('mocha','8D6748','Mocha') },
    ]
  },
  mobile: {
    title: <>Mobile App <span className="text-sky-400">Developers</span></>,
    desc: "Deploy cross-platform applications with React Native and Flutter or high-performance native iOS and Android apps.",
    techs: [
      { name:'React Native', ...si('react','61DAFB','React Native') },
      { name:'Flutter',      ...si('flutter','02569B','Flutter') },
      { name:'Swift',        ...si('swift','F05138','Swift') },
      { name:'Kotlin',       ...si('kotlin','7F52FF','Kotlin') },
      { name:'Android',      ...si('android','34A853','Android') },
      { name:'Xcode',        ...si('xcode','147EFB','Xcode') },
    ]
  },
};

function TechLogo({ tech }) {
  if (tech.type === 'svg') {
    const C = tech.component;
    return <C />;
  }
  return (
    <img
      src={tech.src}
      className="w-10 h-10 md:w-12 md:h-12 object-contain"
      style={tech.style || {}}
      alt={tech.alt}
    />
  );
}

export default function TechnologySection() {
  const [activeTab, setActiveTab]         = useState('frontend');
  const [isTransitioning, setTransition]  = useState(false);

  const switchTab = (key) => {
    if (key === activeTab || isTransitioning) return;
    setTransition(true);
    setTimeout(() => { setActiveTab(key); setTransition(false); }, 150);
  };

  const cur = tabData[activeTab];
  const repeatedTechs = [...cur.techs, ...cur.techs, ...cur.techs, ...cur.techs];

  return (
    <div class="mt-[60px] md:mt-0 lg:mt-28 mb-[-20px] md:mt-0 lg:mt-0">
    <section className="px-4 max-w-[1140px] mx-auto md:mt-12 mt-16 lg:mt-16 mb-[70px] md:mb-0">
      <div className="text-center mb-6">
        <p className="mb-5 font-semibold md:text-[16px] text-[12px] leading-[18px] text-center text-[#04A3DA]">TECHNOLOGY WE USED</p>
        <h2 className="font-bold md:text-[44px] text-[16px] leading-[48px] tracking-[-0.5px] text-center mt-[-25px] md:mt-0 mb-[-20px] md:mb-8">
          Technologies We Provide <span className="text-sky-400">Talent For</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-1.5 md:flex md:flex-wrap md:justify-center md:mb-8 mb-4 md:mt-0">
        {[
          { key:'frontend',  label:'Frontend Developers' },
          { key:'backend',   label:'Backend Developers' },
          { key:'fullstack', label:'Full Stack Developers' },
          { key:'ai_ml',     label:'AI/ML Engineers' },
          { key:'devops',    label:'DevOps Engineers' },
          { key:'ui_ux',     label:'UI/UX Designer' },
          { key:'qa',        label:'QA/Test Engineers' },
          { key:'mobile',    label:'Mobile App Developers' },
        ].map(btn => (
          <button key={btn.key} onClick={() => switchTab(btn.key)}
            className={`w-full md:w-auto text-center tab-btn px-2 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-sm font-semibold transition-all duration-300 ${
              activeTab === btn.key
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 border border-sky-500'
                : 'bg-white text-slate-800 border border-white hover:bg-slate-100'
            }`}>
            {btn.label}
          </button>
        ))}
      </div>

      <div className="tab-details-card rounded-3xl border border-[#BDBDBDB0] shadow-2xl relative overflow-hidden px-6 py-6 md:px-12 md:py-6">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#04A3DA] opacity-10 blur-[100px] pointer-events-none"/>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center gap-4 transition-opacity duration-200" style={{ opacity: isTransitioning ? 0 : 1 }}>
            <h3 className="font-bold text-[32px] md:text-[38px] lg:text-[44px] leading-[40px] md:leading-[46px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4">
              {cur.title}
            </h3>
            <p className="font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[16px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px] text-[#E7E8EA] mb-0">
              {cur.desc}
            </p>
          </div>
          <div className="lg:col-span-7 overflow-hidden transition-opacity duration-200" style={{ opacity: isTransitioning ? 0 : 1 }}>
            <div className="tech-marquee-wrapper">
              <div className="tech-marquee-track">
                {repeatedTechs.map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-center group cursor-pointer shrink-0">
                    <div className="tech-logo-container w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <TechLogo tech={tech}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
