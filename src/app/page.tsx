import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import WhatIDoSection from "./components/WhatIDoSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-32">
      <HomeSection />
      <AboutSection />
      <WhatIDoSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
