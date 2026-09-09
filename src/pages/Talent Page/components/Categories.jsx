import { useState } from 'react';

const tabData = {
  frontend: {
    line1: 'Frontend',
    line2: 'Developers',
    desc: "We believe great work happens when great people come together. Here's a glimpse of life at Jawam.",
    techs: [
      { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
      { name: 'Next.js', src: null, alt: 'Next.js', custom: true },
      { name: 'Angular', src: 'https://cdn.simpleicons.org/angular/DD0031', alt: 'Angular' },
      { name: 'Vue.js', src: 'https://cdn.simpleicons.org/vuedotjs/41B883', alt: 'Vue.js' },
      { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
      { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind CSS' },
    ],
  },
  backend: {
    line1: 'Backend',
    line2: 'Developers',
    desc: "Build highly-scalable, fast, secure, and robust APIs and databases to support complex business workflows.",
    techs: [
      { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', alt: 'Node.js' },
      { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
      { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', alt: 'Java' },
      { name: 'Ruby', src: 'https://cdn.simpleicons.org/ruby/CC342D', alt: 'Ruby' },
      { name: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL' },
      { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
    ],
  },
  fullstack: {
    line1: 'Full Stack',
    line2: 'Developers',
    desc: "End-to-end engineers who bridge frontend aesthetics and backend functionality to deliver complete products.",
    techs: [
      { name: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
      { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', alt: 'Node.js' },
      { name: 'Next.js', src: null, alt: 'Next.js', custom: true },
      { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
      { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
      { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
    ],
  },
  ai_ml: {
    line1: 'AI / ML',
    line2: 'Engineers',
    desc: "Deploy neural networks, configure LLMs, design data pipelines, and incorporate intelligence into your apps.",
    techs: [
      { name: 'Python', src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python' },
      { name: 'TensorFlow', src: 'https://cdn.simpleicons.org/tensorflow/FF6F00', alt: 'TensorFlow' },
      { name: 'PyTorch', src: 'https://cdn.simpleicons.org/pytorch/EE4C2C', alt: 'PyTorch' },
      { name: 'OpenAI', src: null, alt: 'OpenAI', custom: true },
      { name: 'Pandas', src: 'https://cdn.simpleicons.org/pandas/FFFFFF', alt: 'Pandas' },
      { name: 'Jupyter', src: 'https://cdn.simpleicons.org/jupyter/F37626', alt: 'Jupyter' },
    ],
  },
  devops: {
    line1: 'DevOps',
    line2: 'Engineers',
    desc: "Automate build infrastructure, manage server deployments, set up CI/CD pipelines, and secure cloud environments.",
    techs: [
      { name: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
      { name: 'Kubernetes', src: 'https://cdn.simpleicons.org/kubernetes/326CE5', alt: 'Kubernetes' },
      { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS' },
      { name: 'Terraform', src: 'https://cdn.simpleicons.org/terraform/7B42BC', alt: 'Terraform' },
      { name: 'GitHub', src: 'https://cdn.simpleicons.org/github/FFFFFF', alt: 'GitHub' },
      { name: 'Linux', src: 'https://cdn.simpleicons.org/linux/FCC624', alt: 'Linux' },
    ],
  },
  ui_ux: {
    line1: 'UI / UX',
    line2: 'Designers',
    desc: "Design gorgeous user interfaces, plan smooth user flows, create high-fidelity prototypes, and build component libraries.",
    techs: [
      { name: 'Figma', src: 'https://cdn.simpleicons.org/figma/F24E1E', alt: 'Figma' },
      { name: 'Adobe XD', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg', alt: 'Adobe XD' },
      { name: 'Sketch', src: 'https://cdn.simpleicons.org/sketch/F7B500', alt: 'Sketch' },
      { name: 'Illustrator', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg', alt: 'Illustrator' },
      { name: 'Photoshop', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg', alt: 'Photoshop' },
      { name: 'Framer', src: 'https://cdn.simpleicons.org/framer/0055FF', alt: 'Framer' },
    ],
  },
  qa: {
    line1: 'QA / Test',
    line2: 'Engineers',
    desc: "Ensure software reliability, verify logic with unit/end-to-end testing, and execute automated regression suites.",
    techs: [
      { name: 'Selenium', src: 'https://cdn.simpleicons.org/selenium/43B02A', alt: 'Selenium' },
      { name: 'Cypress', src: 'https://cdn.simpleicons.org/cypress/FFFFFF', alt: 'Cypress' },
      { name: 'Playwright', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg', alt: 'Playwright' },
      { name: 'Jest', src: 'https://cdn.simpleicons.org/jest/C21325', alt: 'Jest' },
      { name: 'Postman', src: 'https://cdn.simpleicons.org/postman/FF6C37', alt: 'Postman' },
      { name: 'Mocha', src: 'https://cdn.simpleicons.org/mocha/8D6748', alt: 'Mocha' },
    ],
  },
  mobile: {
    line1: 'Mobile App',
    line2: 'Developers',
    desc: "Deploy cross-platform applications with React Native and Flutter or high-performance native iOS and Android apps.",
    techs: [
      { name: 'React Native', src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React Native' },
      { name: 'Flutter', src: 'https://cdn.simpleicons.org/flutter/02569B', alt: 'Flutter' },
      { name: 'Swift', src: 'https://cdn.simpleicons.org/swift/F05138', alt: 'Swift' },
      { name: 'Kotlin', src: 'https://cdn.simpleicons.org/kotlin/7F52FF', alt: 'Kotlin' },
      { name: 'Android', src: 'https://cdn.simpleicons.org/android/34A853', alt: 'Android' },
      { name: 'Xcode', src: 'https://cdn.simpleicons.org/xcode/147EFB', alt: 'Xcode' },
    ],
  },
};

function CustomNextJS() {
  return (
    <svg className="w-full h-full" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="64" fill="black"/>
      <path d="M102 102L50.5 36H36V92H47.5V51.5L95.5 110.5C97.8 108.1 99.9 105.4 102 102Z" fill="white"/>
      <path d="M83.5 36H95V92H83.5V36Z" fill="white"/>
    </svg>
  );
}

function CustomOpenAI() {
  return (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  );
}

function TechLogo({ tech }) {
  if (tech.custom) {
    if (tech.name === 'Next.js') return <CustomNextJS />;
    if (tech.name === 'OpenAI') return <CustomOpenAI />;
    return null;
  }
  return (
    <img
      src={tech.src}
      className="w-full h-full object-contain"
      alt={tech.alt}
      style={{
        filter: 'brightness(1.15) saturate(1.5) drop-shadow(0 0 8px rgba(255,255,255,0.15))',
      }}
    />
  );
}

export default function Categories() {
  const [activeTab, setActiveTab] = useState('frontend');

  const current = tabData[activeTab];

  return (
    <section className="py-4 md:py-16 lg:pt-26 px-4 lg:max-w-[1130px] md:max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <p className="mb-6 font-semibold text-[16px] leading-[18px] text-[#04A3DA] text-center">
          TOP TALENT CATEGORIES?
        </p>
        <h2 className="section-heading mt-0 md:mt-[-20px] lg:mt-0 font-bold text-[32px] sm:text-[38px] md:text-[30px] lg:text-[36px] leading-[38px] sm:leading-[44px] md:leading-[42px] tracking-[-0.5px] text-center mb-8 md:mb-0 lg:mb-8">
          Hire <span className="text-sky-400">Expert</span> Across Technologies
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 justify-start md:justify-center mb-8">
        {[
          { key: 'frontend', label: 'Frontend Developers' },
          { key: 'backend', label: 'Backend Developers' },
          { key: 'fullstack', label: 'Full Stack Developers' },
          { key: 'ai_ml', label: 'AI/ML Engineers' },
          { key: 'devops', label: 'DevOps Engineers' },
          { key: 'ui_ux', label: 'UI/UX Designer' },
          { key: 'qa', label: 'QA/Test Engineers' },
          { key: 'mobile', label: 'Mobile App Developers' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`tab-btn px-3 py-1.5 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold transition-all duration-300 text-xs md:text-[8px] lg:text-sm whitespace-nowrap ${
              activeTab === tab.key
                ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20 border border-sky-500'
                : 'bg-white text-slate-800 border border-white hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-0 md:mt-[10px] lg:mt-0 tab-details-card rounded-3xl bg-[linear-gradient(357.37deg,_rgba(177,226,244,0.2)_1.93%,_rgba(230,246,251,0.2)_97.52%)] border border-[#BDBDBDB0] shadow-2xl relative overflow-hidden px-5 py-6 sm:px-8 md:px-12 md:py-4">

        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#04A3DA] opacity-10 blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">

          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            <h3 id="tab-title" className="font-bold text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px] leading-[32px] sm:leading-[40px] md:leading-[46px] lg:leading-[48px] tracking-[-0.5px] mb-3 md:mb-4">
              <span>{current.line1} </span>
              <br className="hidden lg:block" />
              <span className="text-sky-400">{current.line2}</span>
            </h3>
            <p id="tab-desc" className="font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] md:leading-[17px] lg:leading-[18px] tracking-[-0.5px] text-[#E7E8EA] mb-0">
              {current.desc}
            </p>
          </div>

  <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
  <div
    id="tab-logos"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '12px',
      width: '100%',
      maxWidth: '340px',
    }}
  >
    {current.techs.map((tech) => (
      <div
        key={tech.name}
        className="flex items-center justify-center group cursor-pointer"
      >
        <div
          className="tech-logo-container flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ width: '100%', aspectRatio: '1 / 1', maxWidth: '80px' }}
        >
          <TechLogo tech={tech} />
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}