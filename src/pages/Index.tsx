import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import OrangeBarsTransition from "@/components/OrangeBarsTransition";
import AgendaSection from "@/components/AgendaSection";
import InfoSection from "@/components/InfoSection";
import NewsletterSection from "@/components/NewsletterSection";
import NewsSection from "@/components/home/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <HighlightsSection />
        <OrangeBarsTransition />
        <AgendaSection />
        <OrangeBarsTransition />
        <NewsSection />
        <OrangeBarsTransition />
        <InfoSection />
        <OrangeBarsTransition />
        <NewsletterSection />
      </main>
      <Footer sectionAbove="black" />
    </div>
  );
};

export default Index;
