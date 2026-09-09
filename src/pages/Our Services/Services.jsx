import { useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Icons from './components/Icons';
import ServiceDetail from './components/ServiceDetail';
import Vision from './components/Vision';
import Vision2 from './components/Vision2';
import Vision3 from './components/Vision3';
import Vision4 from './components/Vision4';
import Vision5 from './components/Vision5';
import Vision6 from './components/Vision6';
import Vision7 from './components/Vision7';
import Vision8 from './components/Vision8';
import Vision9 from './components/Vision9';
import Vision10 from './components/Vision10';
import Vision11 from './components/Vision11';
import Vision12 from './components/Vision12';
import Vision13 from './components/Vision13';
import Vision14 from './components/Vision14';
import Vision15 from './components/Vision15';
import Trust from './components/Trust';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

const visionMap = {
  '/services/vision':   Vision,
  '/services/vision2':  Vision2,
  '/services/vision3':  Vision3,
  '/services/vision4':  Vision4,
  '/services/vision5':  Vision5,
  '/services/vision6':  Vision6,
  '/services/vision7':  Vision7,
  '/services/vision8':  Vision8,
  '/services/vision9':  Vision9,
  '/services/vision10': Vision10,
  '/services/vision11': Vision11,
  '/services/vision12': Vision12,
  '/services/vision13': Vision13,
  '/services/vision14': Vision14,
  '/services/vision15': Vision15,
};

export default function Services() {
  const { pathname } = useLocation();
  const ActiveVision = visionMap[pathname] || Vision;

  return (
    <main id="service" className="min-h-screen  mt-[-220px] md:mt-0 lg:mt-0 overflow-visible">
      <Hero />
      <Cards class="overflow-visible"/>
      <Icons />
      <ServiceDetail />
      <div id="vision-section">
        <ActiveVision />
      </div>
      <Trust />
      <Benefits />
      <FAQ />
      <CTA />
    </main>
  );
}
