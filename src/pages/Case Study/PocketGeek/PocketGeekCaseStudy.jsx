import HeroSection from './HeroSection';
import ProjectOverview from './ProjectOverview';
import ChallengeSection from './ChallengeSection';
import SolutionSection from './SolutionSection';
import TechStackSection from '../components/TechStackSection';
import ResultSection from './ResultSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import ProjectOutcome from './ProjectOutcome';
import CTASection from '../components/CTASection';
import '../casestudy.css';

export default function PocketGeekCaseStudy() {
  return (
    <main id="feemd" className="mb-[-25px] md:mb-0 lg:mb-[-25px]">
      <HeroSection />
      <ProjectOverview />
      <ChallengeSection />
      <SolutionSection />
      <TechStackSection />
      <ResultSection />
      <KeyFeaturesSection />
      <ProjectOutcome />
      <CTASection />
    </main>
  );
}
