import React, { useState } from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const techStacks = {
  native: [
    { name: 'Swift', src: `${CDN}/swift/swift-original.svg` },
    { name: 'Kotlin', src: `${CDN}/kotlin/kotlin-original.svg` },
    { name: 'Java', src: `${CDN}/java/java-original.svg` },
    { name: 'Objective-C', src: `${CDN}/objectivec/objectivec-plain.svg` },
  ],
  crossplatform: [
    { name: 'React Native', src: `${CDN}/react/react-original.svg` },
    { name: 'Flutter', src: `${CDN}/flutter/flutter-original.svg` },
    { name: 'Dart', src: `${CDN}/dart/dart-original.svg` },
    { name: 'TypeScript', src: `${CDN}/typescript/typescript-original.svg` },
  ],
  backend: [
    { name: 'Node.js', src: `${CDN}/nodejs/nodejs-original.svg` },
    { name: 'Python', src: `${CDN}/python/python-original.svg` },
    { name: 'GraphQL', src: `${CDN}/graphql/graphql-plain.svg` },
    { name: 'Firebase', src: `${CDN}/firebase/firebase-plain.svg` },
  ],
  cloud: [
    { name: 'Firebase', src: `${CDN}/firebase/firebase-plain.svg` },
    { name: 'AWS', src: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    { name: 'GCP', src: `${CDN}/googlecloud/googlecloud-original.svg` },
    { name: 'Docker', src: `${CDN}/docker/docker-original.svg` },
  ],
  tools: [
    { name: 'Android Studio', src: `${CDN}/androidstudio/androidstudio-original.svg` },
    { name: 'Git', src: `${CDN}/git/git-original.svg` },
    { name: 'Postman', src: `${CDN}/postman/postman-original.svg` },
    { name: 'Jest', src: `${CDN}/jest/jest-plain.svg` },
    { name: 'Figma', src: `${CDN}/figma/figma-original.svg` },
  ],
};

const filterTabs = [
  { id: 'native', label: 'Native iOS & Android' },
  { id: 'crossplatform', label: 'Cross-Platform' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cloud', label: 'Cloud & Services' },
  { id: 'tools', label: 'Testing & Tools' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('native');

  const icons = techStacks[activeCategory] || [];
  const minItems = 24;
  const repeatCount = Math.max(2, Math.ceil(minItems / icons.length));
  const finalRepeatCount = repeatCount % 2 === 0 ? repeatCount : repeatCount + 1;

  // Build the marquee content as repeated "blocks" — one full pass through
  // the unique icon set, followed by a spacer — so there's a visible gap
  // exactly where each pass loops back to the first icon again. Since every
  // block (icons + spacer) is identical and finalRepeatCount is always even,
  // the first half and second half of the track stay equal-width, which is
  // what keeps the translateX(-50%) loop seamless.
  const marqueeItems = [];
  for (let i = 0; i < finalRepeatCount; i++) {
    icons.forEach((icon) => {
      marqueeItems.push({ ...icon, blockIndex: i });
    });
    marqueeItems.push({ isSpacer: true, blockIndex: i });
  }

  return (
    <div className="mt-[-75px] md:mt-0 lg:mt-0">
      <section className="py-12 px-4 bg-[#0F172A] relative overflow-hidden section-glow">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-[#00B4D8] text-base font-semibold tracking-[0.25em] uppercase mb-4">Tech Stack</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-white">
            Technology Stack <span className="text-[#00B4D8]">We Use</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3.5 mb-6 md:mb-10" id="tech-filters">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 md:px-6 py-1.5 md:py-2.5 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-md ${
                    isActive ? 'bg-[#1D82F5] text-white' : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="marquee-wrapper min-h-[80px] py-2">
            <div key={activeCategory} className="marquee-track">
              {marqueeItems.map((item, idx) =>
                item.isSpacer ? (
                  <div
                    key={`spacer-${item.blockIndex}`}
                    className="w-10 md:w-12 shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex flex-col items-center justify-center px-6 md:px-8 group shrink-0"
                    title={item.name}
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-10 w-10 md:h-12 md:w-12 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                      loading="lazy"
                    />
                    <span className="text-[11px] text-slate-400 mt-2 font-medium whitespace-nowrap">{item.name}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}