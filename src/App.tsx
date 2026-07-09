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


function App() {
  return (
    <main className="App font-sans selection:bg-accent-muted selection:text-brand-900">
      <Header />
      <HeroSection />

      <ProblemSection />

      <SolutionSection />

      <ComparisonTable />

      <FeaturesStream />

      <ROICalculator />

      <BenefitsSection />

      

      <CTASection />

      <FAQSection />

      <FooterSection />
    </main>
  );
}

export default App;
