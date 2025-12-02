import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import SectionDivider from "@/components/SectionDivider";
import AgendaSection from "@/components/AgendaSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <HighlightsSection />
        <SectionDivider />
        <AgendaSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
