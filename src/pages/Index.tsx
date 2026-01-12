import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Screenshots from "@/components/landing/Screenshots";
import OpenSource from "@/components/landing/OpenSource";
import BetaInvitation from "@/components/landing/BetaInvitation";
import DownloadCTA from "@/components/landing/DownloadCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Features />
        <HowItWorks />
        <Screenshots />
        <OpenSource />
        <BetaInvitation />
        <DownloadCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
