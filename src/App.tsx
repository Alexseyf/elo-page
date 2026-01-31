import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import ComparisonTable from './ComparisonTable';
import FeaturesStream from './FeaturesStream';
import ROICalculator from './ROICalculator';
import BenefitsSection from './BenefitsSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';
// import FutureFeaturesSection from './FutureFeaturesSection';

function App() {
  return (
    <div className="App font-sans selection:bg-ochre selection:text-white">
      <Header />
      <HeroSection />

      <div id="problema">
        <ProblemSection />
      </div>

      <SolutionSection />

      <div id="comparativo">
        <ComparisonTable />
      </div>

      <div id="funcionalidades" className="scroll-mt-20">
        <FeaturesStream />
      </div>

      <div id="roi">
        <ROICalculator />
      </div>

      <div id="beneficios">
        <BenefitsSection />
      </div>

      {/* <div id="futuras-features">
        <FutureFeaturesSection />
      </div> */}

      <CTASection />

      <div id="faq">
        <FAQSection />
      </div>

      <FooterSection />
    </div>
  );
}

export default App;
