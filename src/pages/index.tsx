import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
//import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/Faq";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />

        {/* <AboutSection /> */}
        <FeaturesSection />
        {/* <ContactSection /> */}
        <FAQ />
      </main>
    </div>
  );
};

export default Index;
