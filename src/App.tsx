import Header from './Header';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import InteractiveShowcase from './InteractiveShowcase';
import FeaturesStream from './FeaturesStream';
import ComparisonTable from './ComparisonTable';
import ROICalculator from './ROICalculator';
import BenefitsSection from './BenefitsSection';
import CTASection from './CTASection';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';

function App() {
  return (
    <main className="App font-sans selection:bg-accent-muted selection:text-brand-900 bg-white min-h-screen text-brand-900 antialiased">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <InteractiveShowcase />
      <FeaturesStream />
      <ComparisonTable />
      <ROICalculator />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}

export default App;
