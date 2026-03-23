import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import WohnformenSection from "@/components/sections/WohnformenSection";
import USPSection from "@/components/sections/USPSection";
import PartnerSection from "@/components/sections/PartnerSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GermanyMapSection from "@/components/sections/GermanyMapSection";
import KarriereSection from "@/components/sections/KarriereSection";
import KontaktSection from "@/components/sections/KontaktSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <WohnformenSection />
        <USPSection />
        <PartnerSection />
        <ServicesSection />
        <GermanyMapSection />
        <KarriereSection />
        <KontaktSection />
      </main>
      <Footer />
    </div>
  );
}
