import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import AgendaSection from "@/components/AgendaSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <HighlightsSection />
        <SectionDivider />
        <AgendaSection />
        <SectionDivider />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
