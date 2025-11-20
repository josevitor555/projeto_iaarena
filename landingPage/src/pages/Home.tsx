// Imports
import Navigations from '../components/Navigations';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ArenaMode from '../components/ArenaMode';
import CrreativeMode from '../components/CrreativeMode';
import AIModelCatalog from '../components/AIModelCatalog';
import AdvancedAnalytics from '../components/AdvancedAnalytics';
import Pricing from '../components/Pricing';
import TechnicalAudienceGrid from '../components/Technical&AudienceGrid';
import FooterCTA from '../components/FooterCTA';

// Main component
const Home = () => {
  return (
    <div className="relative bg-black text-neutral-300 selection:bg-neutral-800 selection:text-white">
      <Navigations />
      <HeroSection />
      <AboutSection />
      <ArenaMode />
      <CrreativeMode />
      <AIModelCatalog />
      <AdvancedAnalytics />
      <Pricing />
      <TechnicalAudienceGrid />
      <FooterCTA />
    </div>
  );
}

export default Home;