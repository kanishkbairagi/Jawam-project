import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import WhyHire from './components/WhyHire';
import Process from './components/Process';
import Categories from './components/Categories';
import HiringModels from './components/HiringModels';
import CTA from './components/CTA';
import './talent-styles.css';

export default function Talent() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== '#hiring-models') return;

    requestAnimationFrame(() => {
      document.getElementById('hiring-models')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, [hash]);

  return (
    <>

      <main id="tamlent" className="mb-[-50px]">

        <Hero />
        <WhyHire />
        <Process />
        <Categories />
        <HiringModels />
        <CTA />

      </main>
    </>
  );
}
