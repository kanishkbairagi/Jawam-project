import PortfolioHero from './components/PortfolioHero';
import PortfolioSection from './components/PortfolioSection';
import JourneySection from './components/JourneySection';
import './portfolio.css';

const Portfolio = () => {
  return (
    <>
      <main id="pomtfolio" className="mb-[-60px] md:mb-[-90px]">
        <PortfolioHero />
        <PortfolioSection />
        <JourneySection />
      </main>
    </>
  );
};

export default Portfolio;
