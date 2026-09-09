import React, { useEffect } from 'react';

const tabs = [
  { id: 'overview', label: 'Overview', shortLabel: 'Overview' },
  { id: 'photos', label: 'Photos', shortLabel: 'Photos' },
  { id: 'videos', label: 'Videos', shortLabel: 'Videos' },
  { id: 'highlights', label: 'Highlights', shortLabel: 'Highlights' },
  { id: 'key-learning', label: 'Key Learning', shortLabel: 'Learning' },
];

const SecondaryNav = ({ activeTab, onTabChange }) => {
  useEffect(() => {
    const secondaryNav = document.querySelector('.secondary-nav');
    if (secondaryNav) {
      secondaryNav.style.msOverflowStyle = 'none';
      secondaryNav.style.scrollbarWidth = 'none';
    }
  }, []);

  return (
    <section className="px-4 md:px-6 py-1 md:mb-[80px] mb-0 lg:mb-0 pb-1 mt-[-45px] md:mt-[-70px] max-w-[750px] mx-auto relative z-30">
      <div className="max-w-6xl mx-auto">
        <nav className="secondary-nav flex justify-start md:justify-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 md:p-1.5 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-3 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3 text-[11px] sm:text-sm md:text-base font-semibold rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-sky-500 text-white'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sm:hidden">{tab.shortLabel}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default SecondaryNav;
