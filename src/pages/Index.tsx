import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroDivider from "@/components/HeroDivider";
import HighlightsSection from "@/components/HighlightsSection";
import SectionDivider from "@/components/SectionDivider";
import AgendaSection from "@/components/AgendaSection";
import InfoSection from "@/components/InfoSection";
import LeitbildSection from "@/components/LeitbildSection";
import ProduktionSection from "@/components/ProduktionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <HeroDivider />
        <HighlightsSection />
        <SectionDivider />
        <AgendaSection />
        <InfoSection />
        <LeitbildSection />
        <ProduktionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
