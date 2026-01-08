"use client";

import { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    year: "Year 1",
    title: "Market Validation & Pilot Partnerships",
    description:
      "Secure 3-5 paid pilot programs with leading MENA operators (e.g., stc, Etisalat, Zain) to build data-backed case studies and industry validation. Finalize production hardware and gather robust case study data.",
  },
  {
    year: "Year 2",
    title: "Commercial Scaling & Expansion",
    description:
      "Build an in-house sales team to convert the pilot pipeline and establish a channel partner program with telecom system integrators. Launch direct sales operations in KSA and UAE and onboard first channel partners.",
  },
  {
    year: "Year 3",
    title: "Regional Expansion",
    description:
      "Expand into new MENA markets (e.g., Egypt, Qatar). Launch Enterprise tier and introduce advanced features like 6GHz band support.",
  },
];

export default function VisionRoadmapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate timeline items sequentially
          timelineData.forEach((_, index) => {
            setTimeout(() => {
              setActiveIndex(index);
            }, 800 + index * 600);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center bg-[#191919] py-8 px-8"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes drawLine {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 8px rgba(216, 255, 67, 0.5), 0 0 16px rgba(216, 255, 67, 0.3);
          }
          50% {
            box-shadow: 0 0 16px rgba(216, 255, 67, 0.8), 0 0 32px rgba(216, 255, 67, 0.5);
          }
        }
      `}</style>

      <div className="max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-black text-white tracking-tight"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            Our Vision &{" "}
            <span
              className="text-[#d8ff43]"
              style={{ textShadow: "0 0 30px rgba(216, 255, 67, 0.5)" }}
            >
              Roadmap
            </span>
          </h2>
          <p
            className="mt-2 text-base text-white/70 max-w-2xl mx-auto"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out 0.2s forwards" : "none",
              opacity: 0,
            }}
          >
            A clear path from market entry to becoming the standard for intelligent network infrastructure in the MENA region.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Animated horizontal line */}
          <div className="absolute left-0 right-0 top-6 h-1 bg-white/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#d8ff43] via-[#d8ff43] to-[#d8ff43]/30"
              style={{
                animation: isVisible ? "drawLine 1.5s ease-out 0.5s forwards" : "none",
                width: 0,
              }}
            />
          </div>

          {/* Timeline items - horizontal layout */}
          <div className="grid grid-cols-3 gap-6">
            {timelineData.map((item, index) => (
              <div key={item.year} className="relative flex flex-col items-center">
                {/* Dot */}
                <div
                  className={`w-5 h-5 rounded-full border-4 border-[#191919] z-10 transition-all duration-500 mb-4 flex-shrink-0 ${
                    activeIndex >= index
                      ? "bg-[#d8ff43] scale-100"
                      : "bg-white/20 scale-75"
                  }`}
                  style={{
                    animation: activeIndex >= index ? "pulseGlow 2s ease-in-out infinite" : "none",
                  }}
                />

                {/* Content card */}
                <div
                  className={`w-full flex-1 transition-all duration-500 ${
                    activeIndex >= index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#d8ff43]/30 hover:bg-white/10 transition-all h-full flex flex-col">
                    <div className="inline-block px-2 py-0.5 bg-[#d8ff43] text-[#191919] rounded-full text-xs font-bold mb-2 self-start">
                      {item.year}
                    </div>
                    <h3 className="text-base font-bold text-[#d8ff43] mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
