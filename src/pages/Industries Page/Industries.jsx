import { useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import IndustryHero from './components/IndustryHero';
import Healthcare from './components/Healthcare';
import Finance from './components/Finance';
import Education from './components/Education';
import Ecommerce from './components/Ecommerce';
import Logistics from './components/Logistics';
import Construction from './components/Construction';
import Automotive from './components/Automotive';
import Insurance from './components/Insurance';

export default function Industries() {
  const { category } = useParams();
  const location = useLocation();
  const prevCategory = useRef(null);

  const currentPath = location.pathname.toLowerCase();
  let active = (category || currentPath.split('/').pop() || '').toLowerCase();

  // Default to healthcare when visiting /industries with no category selected
  if (!category && (currentPath === '/industries' || active === 'industries')) {
    active = 'healthcare';
  }

  // Always start at the top on initial page mount / refresh
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  // Scroll to industry content only when user switches category (not on initial load)
  useEffect(() => {
    if (prevCategory.current !== null && prevCategory.current !== active) {
      setTimeout(() => {
        const industryContent = document.getElementById('industry-content');
        if (industryContent) {
          const offset = 100;
          const elementPosition = industryContent.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }

    prevCategory.current = active;
  }, [active]);

  const renderIndustryComponent = () => {
    switch (active) {
      case 'finance':
        return <Finance />;
      case 'education':
        return <Education />;
      case 'ecommerce':
      case 'retail':
        return <Ecommerce />;
      case 'logistics':
      case 'distribution':
        return <Logistics />;
      case 'construction':
        return <Construction />;
      case 'automotive':
        return <Automotive />;
      case 'insurance':
        return <Insurance />;
      case 'healthcare':
      default:
        return <Healthcare />;
    }
  };

  return (
    <div id="industry" className="min-h-screen bg-[#0F172A] mt-[-170px] md:mt-0 lg:mt-0 mb-[-20px] md:mb-0 lg:mb-[60px] ">
      <IndustryHero />
      <div id="industry-content">
        {renderIndustryComponent()}
      </div>
    </div>
  );
}

