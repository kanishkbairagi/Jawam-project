import React, { useState } from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const techStacks = {
  languages: [
    { name: 'Python', src: `${CDN}/python/python-original.svg` },
    { name: 'Jupyter', src: `${CDN}/jupyter/jupyter-original.svg` },
  ],
  frameworks: [
    { name: 'TensorFlow', src: `${CDN}/tensorflow/tensorflow-original.svg` },
    { name: 'PyTorch', src: `${CDN}/pytorch/pytorch-original.svg` },
    { name: 'Keras', src: `${CDN}/keras/keras-original.svg` },
    { name: 'Scikit-learn', src: `${CDN}/scikitlearn/scikitlearn-original.svg` },
  ],
  data: [
    { name: 'NumPy', src: `${CDN}/numpy/numpy-original.svg` },
    { name: 'Pandas', src: `${CDN}/pandas/pandas-original.svg` },
    { name: 'OpenCV', src: `${CDN}/opencv/opencv-original.svg` },
  ],
  cloud: [
    { name: 'AWS', src: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    { name: 'Azure', src: `${CDN}/azure/azure-original.svg` },
    { name: 'GCP', src: `${CDN}/googlecloud/googlecloud-original.svg` },
    { name: 'Docker', src: `${CDN}/docker/docker-original.svg` },
    { name: 'Kubernetes', src: `${CDN}/kubernetes/kubernetes-plain.svg` },
  ],
};

const filterTabs = [
  { id: 'languages', label: 'Languages & Notebooks' },
  { id: 'frameworks', label: 'ML Frameworks' },
  { id: 'data', label: 'Data Processing' },
  { id: 'cloud', label: 'Cloud & Deployment' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const icons = techStacks[activeCategory] || [];
  const minItems = 24;
  const repeatCount = Math.max(2, Math.ceil(minItems / icons.length));
  const finalRepeatCount = repeatCount % 2 === 0 ? repeatCount : repeatCount + 1;

  // Build marquee items, tagging the first item of every repeated set
  // (except the very first) so we can add an extra gap there — that's
  // the point where one full loop ends and the duplicate set begins.
  const marqueeItems = [];
  for (let set = 0; set < finalRepeatCount; set++) {
    icons.forEach((tech, i) => {
      marqueeItems.push({
        tech,
        key: `${tech.name}-${set}-${i}`,
        isSetStart: i === 0 && set !== 0,
      });
    });
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
            {marqueeItems.map(({ tech, key, isSetStart }) => (
              <div
                key={key}
                className={`flex flex-col items-center justify-center px-6 md:px-8 group shrink-0 ${
                  isSetStart ? 'ml-10 md:ml-16' : ''
                }`}
                title={tech.name}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-10 w-10 md:h-12 md:w-12 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  loading="lazy"
                />
                <span className="text-[11px] text-slate-400 mt-2 font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}