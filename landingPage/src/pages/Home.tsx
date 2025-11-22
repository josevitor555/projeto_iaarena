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
import DemonstrationSection from '../components/DemonstrationSection';
import FooterCTA from '../components/FooterCTA';

// Main component
const Home = () => {
  return (
    <div className="relative bg-[#121212] text-[#B0B0B0] selection:bg-[#444444] selection:text-[#E0E0E0]">
      <Navigations />
      <HeroSection />
      <AboutSection />
      <ArenaMode />
      <CrreativeMode />
      <AIModelCatalog />
      <AdvancedAnalytics />
      <Pricing />
      <TechnicalAudienceGrid />
      <DemonstrationSection />
      <FooterCTA />
    </div>
  );
}

export default Home;