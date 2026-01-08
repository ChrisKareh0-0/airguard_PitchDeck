"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { newDeckContent } from "@/data/newDeckContent";
import { useNavigation } from "@/hooks";

export default function MarathonHeroSection() {
  const { scrollToSection } = useNavigation();
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "The New Internet";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleScrollToProblem = () => {
    scrollToSection("problem");
  };

  return (
    <section className="min-h-screen flex items-center marathon-bg marathon-grid marathon-scanlines relative">
      {/* Geometric accents */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-marathon-cyan opacity-30 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-marathon-orange opacity-20"></div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Main Title Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          {/* Logo and Title Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
            {/* Logo with glow effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-marathon-cyan blur-2xl opacity-30"></div>
              <Image
                src={Logo}
                alt="AirGuard Logo"
                className="h-24 w-24 md:h-40 md:w-40 relative z-10 marathon-hologram"
                width={160}
                height={160}
                priority
                sizes="160px"
              />
            </div>

            {/* AIRGUARD Title with glitch effect */}
            <div className="relative">
              <h1
                className="marathon-glitch text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter"
                data-text="AIRGUARD"
                style={{ color: 'var(--marathon-white)' }}
              >
                AIRGUARD
              </h1>
              <div className="marathon-loading-bar mt-4"></div>
            </div>
          </div>

          {/* Marathon Divider */}
          <div className="marathon-divider mb-12 w-full max-w-4xl"></div>

          {/* Animated Terminal Text */}
          <div className="marathon-data-block max-w-4xl w-full py-8 px-12">
            <div className="flex items-center justify-center gap-4">
              <span className="text-marathon-orange text-2xl font-bold">&gt;</span>
              <div
                className="text-3xl md:text-5xl lg:text-6xl font-bold marathon-terminal"
                style={{ fontFamily: "'Press Start 2P', monospace" }}
              >
                {text}
                <span
                  className="inline-block w-4 h-12 md:h-16 bg-marathon-cyan ml-2"
                  style={{ opacity: showCursor ? 1 : 0 }}
                ></span>
              </div>
            </div>
          </div>

          {/* Corner-accented info panel */}
          <div className="marathon-card marathon-corners mt-16 p-8 max-w-2xl">
            <div className="flex justify-center space-x-8 text-marathon-cyan marathon-terminal">
              <span>{newDeckContent.hero.socialLinks.twitter}</span>
              <span className="text-marathon-orange">|</span>
              <span>{newDeckContent.hero.socialLinks.website}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <button
              onClick={handleScrollToProblem}
              className="marathon-btn text-sm md:text-base"
            >
              Initialize Protocol
            </button>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="absolute bottom-8 left-0 right-0 px-8">
          <div className="marathon-border-glow p-4 marathon-terminal text-xs md:text-sm">
            <div className="flex justify-between items-center">
              <span className="text-marathon-cyan">STATUS: <span className="text-marathon-orange">ACTIVE</span></span>
              <span className="text-marathon-gray">|</span>
              <span className="text-marathon-cyan">PROTOCOL: <span className="text-marathon-orange">AIRGUARD.v1</span></span>
              <span className="text-marathon-gray">|</span>
              <span className="text-marathon-cyan">NETWORK: <span className="text-marathon-orange">SECURE</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
