import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { HookSection } from "@/components/HookSection";
import { QualificationSection } from "@/components/QualificationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HookSection />
        <QualificationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;