"use client";

import { useEffect, useState, useRef } from "react";

import EditableText from "@/components/ui/EditableText";

export default function RoadAnalogySection({ isStatic = false, isEditMode = false }: { isStatic?: boolean, isEditMode?: boolean }) {
  const [isVisible, setIsVisible] = useState(isStatic);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isStatic) {
      setIsVisible(true);
      return;
    }

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
  }, [isStatic]);

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
          <h2 className="text-3xl md:text-5xl font-bold text-primary-light mb-4 flex justify-center items-center gap-2">
            <EditableText
              initialText="Think of it like"
              isEditMode={isEditMode}
            />
            <span className="text-primary-green">
              <EditableText initialText="driving" isEditMode={isEditMode} />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-light/60 max-w-2xl mx-auto">
            <EditableText
              initialText="A simple way to understand network resilience"
              isEditMode={isEditMode}
            />
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
            style={isStatic ? { transition: "none", animation: "none", opacity: 1, transform: "none" } : undefined}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-red-500/20 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 font-semibold uppercase tracking-wider text-sm">
                  <EditableText initialText="The Old Way" isEditMode={isEditMode} />
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
                  <EditableText initialText="Road blocked?" isEditMode={isEditMode} />
                  <span className="text-red-400">
                    <EditableText initialText="You're stuck." isEditMode={isEditMode} />
                  </span>
                </h3>
                <p className="text-primary-light/60 text-base">
                  <EditableText initialText="One path. One failure point. No alternatives." isEditMode={isEditMode} />
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
            style={isStatic ? { transition: "none", animation: "none", opacity: 1, transform: "none" } : undefined}
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-primary-green/20 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary-green animate-pulse" />
                <span className="text-primary-green font-semibold uppercase tracking-wider text-sm">
                  <EditableText initialText="With AirGuard" isEditMode={isEditMode} />
                </span>
              </div>

              {/* Road visualization - Solution */}
              <div className="relative h-32 md:h-40 mb-6 flex-shrink-0 overflow-hidden">
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#222" />
                      <stop offset="50%" stopColor="#333" />
                      <stop offset="100%" stopColor="#222" />
                    </linearGradient>
                  </defs>

                  {/* Infinite Highway Background */}
                  <rect x="0" y="20" width="400" height="60" fill="url(#roadGradient)" opacity="0.5" />

                  {/* Multiple Lanes */}
                  {[25, 35, 45, 55, 65, 75].map((y, i) => (
                    <path
                      key={i}
                      d={`M 0 ${y} L 400 ${y}`}
                      stroke="#444"
                      strokeWidth="1"
                      strokeDasharray="10 20"
                      opacity="0.5"
                    />
                  ))}

                  {/* Top Lane Blockage */}
                  <g>
                    <rect x="220" y="22" width="20" height="14" fill="#ff5643" rx="2" opacity="0.8" />
                    <text x="230" y="33" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">✕</text>
                  </g>

                  {/* Active route highlight (bottom path) */}
                  <path
                    d="M 150 50 Q 200 80 250 50"
                    stroke="#d8ff43"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    className={!isStatic ? "animate-pulse" : ""}
                  />

                  {/* Car moving on alternative route */}
                  {!isStatic && (
                    <g>
                      <rect x="180" y="60" width="30" height="16" fill="#d8ff43" rx="3">
                        <animateMotion
                          dur="3s"
                          repeatCount="indefinite"
                          path="M -30 -10 L 220 -10"
                        />
                      </rect>
                    </g>
                  )}
                  {/* Static Car Position if Static */}
                  {isStatic && (
                    <rect x="250" y="42" width="30" height="16" fill="#d8ff43" rx="3" />
                  )}

                  {/* Other traffic (faded) - only animated if not static */}
                  {!isStatic ? (
                    <>
                      <circle r="4" fill="#333">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          path="M 20 20 L 380 20"
                        />
                      </circle>
                      <circle r="4" fill="#333">
                        <animateMotion
                          dur="5s"
                          repeatCount="indefinite"
                          path="M 380 80 L 20 80"
                        />
                      </circle>
                    </>
                  ) : (
                    <>
                      {/* Static traffic positions */}
                      <circle cx="200" cy="20" r="4" fill="#333" />
                      <circle cx="300" cy="80" r="4" fill="#333" />
                    </>
                  )}
                </svg>
              </div>

              <div className="text-center mt-auto">
                <h3 className="text-xl md:text-2xl font-bold text-primary-light mb-3">
                  <EditableText initialText="Road blocked?" isEditMode={isEditMode} />
                  <span className="text-primary-green">
                    <EditableText initialText="Reroute instantly." isEditMode={isEditMode} />
                  </span>
                </h3>
                <p className="text-primary-light/60 text-base">
                  <EditableText initialText="Multiple paths. Automatic rerouting. Always connected." isEditMode={isEditMode} />
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
          style={isStatic ? { transition: "none", animation: "none", opacity: 1, transform: "none" } : undefined}
        >
          <p className="text-lg md:text-xl text-primary-light/80">
            <EditableText initialText="Your data deserves" isEditMode={isEditMode} />
            <span className="text-primary-green font-semibold">
              <EditableText initialText="the same smart routing." isEditMode={isEditMode} />
            </span>
          </p>
        </div>
      </div >
    </section >
  );
}
