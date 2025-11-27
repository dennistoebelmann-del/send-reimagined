import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramSection from "@/components/ProgramSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProgramSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
