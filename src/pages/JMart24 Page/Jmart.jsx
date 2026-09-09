import JmartHero from './components/JmartHero';
import JmartIcons from './components/JmartIcons';
import Dashboard from './components/Dashboard';
import Growing from './components/Growing';
import Whychoose from './components/Whychoose';
import CTA from './components/CTA';

export default function Jmart() {
  return (
    <div id="jmart" className="min-h-screen bg-[#0F172A] mb-[-40px] md:mb-[-30px] lg:mb-0 lg:mt-4 md:mt-0 mt-0">
      <JmartHero />
      <JmartIcons />
      <Dashboard />
      <Growing />
      <Whychoose />
      <CTA />
    </div>
  );
}
