"use client";

import { useState, useEffect, useCallback } from "react";

// Import new enhanced sections
import {
  EnhancedHeroSection,
  NetworkVisualizationSection,
  RoadAnalogySection,
  EnvironmentalImpactSection,
  EnhancedTractionSection,
  FinancialsSection,
} from "@/components/sections/newDeckSections";

import WhatWeSellSection from "@/components/sections/WhatWeSellSection";
import SupportedByTeamSection from "@/components/sections/SupportedByTeamSection";
import VisionRoadmapSection from "@/components/sections/VisionRoadmapSection";
import TheAskSection from "@/components/sections/TheAskSection";

// Define slides with their components and titles
const slides = [
  { id: "hero", title: "AirGuard", component: EnhancedHeroSection, whiteBg: false },
  { id: "road", title: "Road Analogy", component: RoadAnalogySection, whiteBg: false },
  { id: "network", title: "Network Visualization", component: NetworkVisualizationSection, whiteBg: false },
  { id: "what-we-sell", title: "What We Sell", component: WhatWeSellSection, whiteBg: true },
  { id: "supported-team", title: "Supported By & Team", component: SupportedByTeamSection, whiteBg: true },
  { id: "traction", title: "Traction", component: EnhancedTractionSection, whiteBg: false },
  { id: "vision", title: "Vision & Roadmap", component: VisionRoadmapSection, whiteBg: false },
  { id: "financials", title: "Financial Projections", component: FinancialsSection, whiteBg: false },
  { id: "environmental", title: "Environmental Impact", component: EnvironmentalImpactSection, whiteBg: false },
  { id: "ask", title: "The Ask", component: TheAskSection, whiteBg: true },
];

type TransitionDirection = "next" | "prev" | null;

export default function NewDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isStaticMode, setIsStaticMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const goToSlide = useCallback((index: number, direction: TransitionDirection) => {
    if (isTransitioning || index < 0 || index >= slides.length) return;

    setIsTransitioning(true);
    setTransitionDirection(direction);

    // After exit animation completes, change slide
    setTimeout(() => {
      setCurrentSlide(index);
      // Reset transition state after enter animation
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionDirection(null);
      }, 500);
    }, 500);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1, "next");
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, "prev");
    }
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0, "prev");
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1, "next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  // Calculate transition classes
  const getSlideClasses = () => {
    if (!transitionDirection) return "translate-x-0 opacity-100";

    if (isTransitioning) {
      // Exit animation
      if (transitionDirection === "next") {
        return "-translate-x-full opacity-0 scale-95";
      } else {
        return "translate-x-full opacity-0 scale-95";
      }
    }
    return "translate-x-0 opacity-100";
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Slide Container */}
      <div
        className={`h-full w-full transition-all duration-500 ease-out ${getSlideClasses()}`}
      >
        <div className="h-full overflow-y-auto">
          <CurrentSlideComponent isStatic={isStaticMode} isEditMode={isEditMode} />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0 || isTransitioning}
          className={`p-3 rounded-full border transition-all duration-300 ${currentSlide === 0 || isTransitioning
            ? slides[currentSlide].whiteBg
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-gray-700 text-gray-700 cursor-not-allowed"
            : slides[currentSlide].whiteBg
              ? "border-primary-green text-[#191919] hover:bg-primary-green/20 shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]"
              : "border-primary-green/50 text-primary-green hover:bg-primary-green/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide Counter */}
        <div className={`px-4 py-2 rounded-full font-mono text-sm transition-all duration-300 ${slides[currentSlide].whiteBg
          ? "bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]"
          : "bg-black/80 border border-gray-700"
          }`}>
          <span className="text-primary-green" style={slides[currentSlide].whiteBg ? { textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" } : undefined}>{currentSlide + 1}</span>
          <span className={slides[currentSlide].whiteBg ? "text-gray-500" : "text-gray-500"}> / {slides.length}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || isTransitioning}
          className={`p-3 rounded-full border transition-all duration-300 ${currentSlide === slides.length - 1 || isTransitioning
            ? slides[currentSlide].whiteBg
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-gray-700 text-gray-700 cursor-not-allowed"
            : slides[currentSlide].whiteBg
              ? "border-primary-green text-[#191919] hover:bg-primary-green/20 shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]"
              : "border-primary-green/50 text-primary-green hover:bg-primary-green/20 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]"
            }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-primary-green transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Title and Toggle */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <div className="px-4 py-2 bg-black/80 border border-gray-700 rounded-full font-mono text-xs text-gray-400">
          [{slides[currentSlide].title.toUpperCase()}]
        </div>

        {/* Static/Animation Toggle */}
        <button
          onClick={() => setIsStaticMode(!isStaticMode)}
          className={`
            px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300
            ${isStaticMode
              ? "bg-primary-green/90 border-primary-green text-black font-bold shadow-[0_0_15px_rgba(74,222,128,0.4)]"
              : "bg-black/80 border-gray-700 text-gray-400 hover:border-gray-500"
            }
          `}
        >
          {isStaticMode ? "STATIC" : "ANIMATION"}
        </button>

        {/* Edit Button */}
        <button
          onClick={() => isEditMode ? setIsEditMode(false) : setShowPasswordPrompt(true)}
          className={`
            px-4 py-2 rounded-full font-mono text-xs border transition-all duration-300
            ${isEditMode
              ? "bg-red-500/90 border-red-500 text-white font-bold"
              : "bg-black/80 border-gray-700 text-gray-400 hover:border-gray-500"
            }
          `}
        >
          {isEditMode ? "DONE EDITING" : "EDIT"}
        </button>

        {/* Export Button */}
        <div className="relative group">
          <button className="px-4 py-2 rounded-full font-mono text-xs border bg-black/80 border-gray-700 text-gray-400 hover:border-gray-500 transition-all duration-300">
            EXPORT
          </button>

          {/* Export Menu */}
          <div className="absolute top-full right-0 mt-2 bg-black border border-gray-800 rounded-lg shadow-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto flex flex-col min-w-[140px]">
            <button
              onClick={() => window.print()}
              className="px-4 py-3 text-left hover:bg-gray-900 text-xs font-mono text-gray-300 border-b border-gray-800"
            >
              Print to PDF
            </button>
            <button
              onClick={async () => {
                try {
                  const res = await fetch('/api/export-pptx');
                  const data = await res.json();
                  if (data.success) alert('PPTX Exported! Check server /public folder.');
                  else alert('Export Failed');
                } catch (e) { alert('Export Failed'); }
              }}
              className="px-4 py-3 text-left hover:bg-gray-900 text-xs font-mono text-gray-300"
            >
              Export PPTX
            </button>
          </div>
        </div>
      </div>

      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Enter Password</h3>
            <input
              type="password"
              autoFocus
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-primary-green mb-6 font-mono"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const val = (e.target as HTMLInputElement).value;
                  if (val === 'wirestorm') {
                    setIsEditMode(true);
                    setShowPasswordPrompt(false);
                  } else {
                    alert('Incorrect password');
                  }
                }
              }}
              placeholder="Password..."
            />
            <button
              onClick={() => setShowPasswordPrompt(false)}
              className="text-gray-500 hover:text-white text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className={`fixed top-4 right-4 z-50 p-2 rounded-lg border transition-all duration-300 ${slides[currentSlide].whiteBg
          ? "bg-white border-gray-200 text-[#191919] hover:bg-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
          : "bg-black/80 border-gray-700 text-white hover:bg-black/90"
          }`}
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        {isFullscreen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0v5m0-5h5M15 9l5-5m0 0v5m0-5h-5M9 15l-5 5m0 0v-5m0 5h5M15 15l5 5m0 0v-5m0 5h-5" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        )}
      </button>

      {/* Slide Dots Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-0.5">
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative group flex items-center justify-end">
            {/* Expanded label that shows on hover */}
            <div className={`
              overflow-hidden transition-all duration-300 ease-out
              max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:mr-3
            `}>
              <div className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-300 ${slides[currentSlide].whiteBg
                ? "bg-white border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.15)]"
                : "bg-black/90 border border-gray-700"
                }`}>
                <span className={`font-mono text-xs ${slides[currentSlide].whiteBg ? "text-gray-600" : "text-gray-400"}`}>
                  <span className="text-primary-green" style={slides[currentSlide].whiteBg ? { textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" } : undefined}>{index + 1}.</span> {slide.title}
                </span>
              </div>
            </div>

            {/* Dot button */}
            <button
              onClick={() => goToSlide(index, index > currentSlide ? "next" : "prev")}
              disabled={isTransitioning}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                ? slides[currentSlide].whiteBg
                  ? "w-3 h-6 bg-primary-green shadow-[0_2px_8px_rgba(0,0,0,0.3),0_4px_16px_rgba(0,0,0,0.2)]"
                  : "w-3 h-6 bg-primary-green shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                : slides[currentSlide].whiteBg
                  ? "w-2 h-2 bg-gray-400 hover:bg-gray-500 group-hover:w-3 group-hover:h-3"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400 group-hover:w-3 group-hover:h-3"
                }`}
            />
          </div>
        ))}
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-6 right-6 z-50 font-mono text-xs text-gray-600">
        <span className="opacity-50">Use</span>{" "}
        <span className="text-gray-500">←</span>{" "}
        <span className="text-gray-500">→</span>{" "}
        <span className="opacity-50">to navigate</span>
      </div>

      {/* Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Glitch lines effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-primary-green/30"
                style={{
                  top: `${20 + i * 15}%`,
                  left: 0,
                  right: 0,
                  animation: `glitch-line ${0.1 + i * 0.05}s ease-out`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes glitch-line {
          0% {
            transform: translateX(-100%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
