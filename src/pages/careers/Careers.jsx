import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './component/Hero';
import WhyJoinUs from './component/WhyJoinUs';
import BelongGallery from './component/BelongGallery';
import OpenRoles from './component/OpenRoles';
import HiringProcess from './component/HiringProcess';
import WhyWork from './component/WhyWork';
import CTA from './component/CTA';
import './careers.css';

export default function Careers() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#open-roles' || location.hash === '#open-positions') {
      setTimeout(() => {
        const el = document.getElementById('open-roles');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [location]);

  return (
    <>
      <main id="kaaam" className="min-h-screen mb-[-30px] md:mb-[-125px] lg:mb-[-115px] w-full overflow-x-hidden">
        <Hero />
        <WhyJoinUs className="" />
        <BelongGallery />
        <OpenRoles />
        <HiringProcess />
        <WhyWork />
        <CTA />
      </main>
    </>
  );
}
