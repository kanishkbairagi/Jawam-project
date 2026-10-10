import SchoolHero from './components/SchoolHero';
import SchoolFeatures from './components/SchoolFeatures';
import SchoolDashboard from './components/SchoolDashboard';
import SchoolInstitutions from './components/SchoolInstitutions';
import SchoolWhyChoose from './components/SchoolWhyChoose';
import IDCards from './components/IDCards';
import SchoolCTA from './components/SchoolCTA';
import './school.css';

export default function School() {
  return (
    <div id="school-page" className="min-h-screen bg-[#0F172A] mb-[-40px] md:mb-[-30px] lg:mb-0 lg:mt-4 md:mt-0 mt-0">
      <SchoolHero />
      <SchoolFeatures />
      <SchoolDashboard />
      <SchoolInstitutions />
      <SchoolWhyChoose />
      <IDCards />
      <SchoolCTA />
    </div>
  );
}
