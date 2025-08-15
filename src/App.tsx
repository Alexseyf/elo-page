import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import BenefitsSection from './BenefitsSection';
import HowItWorksSection from './HowItWorksSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';
import PricingElo from './Pricing';
import TeamSection from './TeamSection';
import FutureFeaturesSection from './FutureFeaturesSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <div id="como-funciona">
        <HowItWorksSection />
      </div>
      <div id='planos'>
        <PricingElo />
      </div>
      <div id="equipe">
        <TeamSection />
      </div>
      <div id="futuras-features">
        <FutureFeaturesSection />
      </div>
      <CTASection />
      <div id="faq">
        <FAQSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
