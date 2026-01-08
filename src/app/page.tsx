"use client";

// Import custom hooks
import { useRevealOnScroll, useScrollNavbar } from "@/hooks";

// Import components
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  MarketSection,
  ProductSection,
  BusinessSection,
  ImpactSection,
  SupportedBySection,
  TeamSection,
  CompetitionSection,
  VisionSection,
  AskSection,
  TractionSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  useRevealOnScroll();

  // Close menu function for scroll handler
  const closeMenu = () => {};

  useScrollNavbar(closeMenu);

  return (
    <>
      {/* Header / Navigation */}
      <Navigation onNavClick={() => {}} />

      {/* Main content sections */}
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MarketSection />
        <ProductSection />
        <BusinessSection />
        <ImpactSection />
        <SupportedBySection />
        <TeamSection />
        <CompetitionSection />
        <VisionSection />
        <AskSection />
        <TractionSection />
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </main>
    </>
  );
}
