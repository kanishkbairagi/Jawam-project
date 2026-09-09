import HeroSection from './components/HeroSection';
import ModelSection from './components/ModelSection';
import WhyAugmentSection from './components/WhyAugmentSection';
import TechnologySection from './components/TechnologySection';
import RolesSection from './components/RolesSection';
import ProcessSection from './components/ProcessSection';
import EngagementModelsSection from './components/EngagementModelsSection';
import TrustSection from './components/TrustSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import './components/augmentation.css';

export default function Augmentation() {
  return (
    <div id="staff" className="bg-[#0F172A] font-sans text-white antialiased overflow-visible">
      <main className="mb-[-10px] md:mb-0 lg:mb-0">
        <HeroSection />
        <ModelSection />
        <WhyAugmentSection />
        <TechnologySection />
        <RolesSection />
        <ProcessSection />
        <EngagementModelsSection />
        <TrustSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  );
}
