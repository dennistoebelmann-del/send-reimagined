import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import AgendaSection from "@/components/AgendaSection";
import InfoSection from "@/components/InfoSection";
import LeitbildSection from "@/components/LeitbildSection";
import ProduktionSection from "@/components/ProduktionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HighlightsSection />
        <OrangeBarsTransition toBlack={true} />
        <AgendaSection />
        <OrangeBarsTransition toBlack={false} />
        <InfoSection />
        <OrangeBarsTransition toBlack={true} />
        <LeitbildSection />
        <ProduktionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
