"use client";

import { useEffect, useState, useRef } from "react";

export default function RoadAnalogySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#0f0f0f] overflow-hidden relative flex flex-col justify-center"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(216, 255, 67, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-light mb-4">
            Think of it like <span className="text-primary-green">driving</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-light/60 max-w-2xl mx-auto">
            A simple way to understand network resilience
          </p>
        </div>

        {/* Side by side comparison */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
          {/* Problem Scenario - Left */}
          <div
            className={`
              transition-all duration-1000 delay-200
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-red-500/20 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 font-semibold uppercase tracking-wider text-sm">
                  The Old Way
                </span>
              </div>

              {/* Road visualization - Problem */}
              <div className="relative h-32 md:h-40 mb-6 flex-shrink-0">
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  {/* Single road */}
                  <path
                    d="M 20 50 L 380 50"
                    stroke="#444"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Road markings */}
                  <path
                    d="M 40 50 L 60 50 M 80 50 L 100 50 M 120 50 L 140 50 M 160 50 L 180 50 M 220 50 L 240 50 M 260 50 L 280 50 M 300 50 L 320 50 M 340 50 L 360 50"
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  {/* Blockage */}
                  <g className="animate-pulse">
                    <rect x="185" y="35" width="30" height="30" fill="#ff5643" rx="4" />
                    <text x="200" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">✕</text>
                  </g>
                  {/* Car stuck */}
                  <g>
                    <rect x="120" y="42" width="30" height="16" fill="#d8ff43" rx="3" />
                    <circle cx="128" cy="58" r="4" fill="#333" />
                    <circle cx="142" cy="58" r="4" fill="#333" />
                  </g>
                  {/* Destination */}
                  <circle cx="360" cy="50" r="8" fill="#d8ff43" opacity="0.5" />
                </svg>
              </div>

              <div className="text-center mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-primary-light mb-3">
                  Road blocked? <span className="text-red-400">You&apos;re stuck.</span>
                </h3>
                <p className="text-primary-light/60 text-base">
                  One path. One failure point. No alternatives.
                </p>
              </div>
            </div>
          </div>

          {/* Solution Scenario - Right */}
          <div
            className={`
              transition-all duration-1000 delay-500
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-primary-green/20 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary-green animate-pulse" />
                <span className="text-primary-green font-semibold uppercase tracking-wider text-sm">
                  With AirGuard
                </span>
              </div>

              {/* Road visualization - Solution */}
              <div className="relative h-32 md:h-40 mb-6 flex-shrink-0">
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  {/* Multiple roads */}
                  <path d="M 20 50 L 150 50" stroke="#444" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M 250 50 L 380 50" stroke="#444" strokeWidth="12" strokeLinecap="round" fill="none" />
                  {/* Alternative routes */}
                  <path d="M 150 50 Q 200 20 250 50" stroke="#444" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <path d="M 150 50 Q 200 80 250 50" stroke="#444" strokeWidth="12" strokeLinecap="round" fill="none" />
                  
                  {/* Blockage on middle top path */}
                  <g>
                    <rect x="185" y="22" width="20" height="20" fill="#ff5643" rx="3" opacity="0.6" />
                    <text x="195" y="37" textAnchor="middle" fill="white" fontSize="12">✕</text>
                  </g>
                  
                  {/* Active route highlight (bottom path) */}
                  <path
                    d="M 150 50 Q 200 80 250 50"
                    stroke="#d8ff43"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-pulse"
                  />
                  
                  {/* Car moving on alternative route */}
                  <g>
                    <rect x="180" y="60" width="30" height="16" fill="#d8ff43" rx="3">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 0 0 Q 20 15 40 0"
                      />
                    </rect>
                    <circle cx="188" cy="76" r="4" fill="#333">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 0 0 Q 20 15 40 0"
                      />
                    </circle>
                    <circle cx="202" cy="76" r="4" fill="#333">
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path="M 0 0 Q 20 15 40 0"
                      />
                    </circle>
                  </g>
                  
                  {/* Destination */}
                  <circle cx="360" cy="50" r="8" fill="#d8ff43" />
                </svg>
              </div>

              <div className="text-center mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-primary-light mb-3">
                  Road blocked? <span className="text-primary-green">Reroute instantly.</span>
                </h3>
                <p className="text-primary-light/60 text-base">
                  Multiple paths. Automatic rerouting. Always connected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          className={`
            text-center mt-10 md:mt-14
            transition-all duration-1000 delay-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <p className="text-lg md:text-xl text-primary-light/80">
            Your data deserves <span className="text-primary-green font-semibold">the same smart routing.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
