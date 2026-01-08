"use client";

import { useEffect, useState, useRef } from "react";

export default function EnvironmentalImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeComparison, setActiveComparison] = useState<"without" | "with">("without");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
      className="relative h-screen bg-[#0f0f0f] overflow-hidden flex flex-col justify-center"
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
        <div className="text-center mb-10">
          <h2
            className={`text-3xl md:text-5xl font-bold text-primary-light mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Environmental <span className="text-primary-green">Impact</span>
          </h2>
          <p
            className={`text-lg md:text-xl text-primary-light/60 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Sustainable networking for a greener future
          </p>
        </div>

        {/* Toggle Buttons */}
        <div
          className={`flex justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => setActiveComparison("without")}
            className={`px-6 py-3 rounded-xl font-semibold text-base border-2 transition-all duration-300 ${
              activeComparison === "without"
                ? "bg-red-500/20 text-red-400 border-red-500/50"
                : "bg-transparent text-primary-light/50 border-primary-light/20 hover:border-primary-light/40"
            }`}
          >
            Without AirGuard
          </button>
          <button
            onClick={() => setActiveComparison("with")}
            className={`px-6 py-3 rounded-xl font-semibold text-base border-2 transition-all duration-300 ${
              activeComparison === "with"
                ? "bg-primary-green/20 text-primary-green border-primary-green/50"
                : "bg-transparent text-primary-light/50 border-primary-light/20 hover:border-primary-light/40"
            }`}
          >
            With AirGuard
          </button>
        </div>

        {/* Main Visualization */}
        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className={`bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
            activeComparison === "with" 
              ? "border-primary-green/30" 
              : "border-red-500/30"
          }`}>
            {/* Header bar */}
            <div className={`h-12 flex items-center justify-between px-6 border-b transition-colors duration-500 ${
              activeComparison === "with" 
                ? "bg-primary-green/10 border-primary-green/20" 
                : "bg-red-500/10 border-red-500/20"
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full animate-pulse ${
                  activeComparison === "with" ? "bg-primary-green" : "bg-red-500"
                }`} />
                <span className={`font-semibold text-sm uppercase tracking-wider ${
                  activeComparison === "with" ? "text-primary-green" : "text-red-400"
                }`}>
                  {activeComparison === "with" ? "Sustainable Mode" : "Legacy Mode"}
                </span>
              </div>
              <span className={`text-sm ${
                activeComparison === "with" ? "text-primary-green/70" : "text-red-400/70"
              }`}>
                Status: {activeComparison === "with" ? "Optimized" : "Degraded"}
              </span>
            </div>

            {/* Charts Grid */}
            <div className="p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <ChartCard
                title="CO₂ Emissions"
                unit="tons/yr"
                withValue={35}
                withoutValue={100}
                isActive={activeComparison === "with"}
                showWithValue={activeComparison === "with"}
              />
              
              <ChartCard
                title="E-Waste"
                unit="kg/yr"
                withValue={200}
                withoutValue={400}
                isActive={activeComparison === "with"}
                showWithValue={activeComparison === "with"}
              />
              
              <ChartCard
                title="Energy Use"
                unit="kWh"
                withValue={60}
                withoutValue={100}
                isActive={activeComparison === "with"}
                showWithValue={activeComparison === "with"}
                inverted
              />
              
              <ChartCard
                title="Efficiency"
                unit="%"
                withValue={95}
                withoutValue={23}
                isActive={activeComparison === "with"}
                showWithValue={activeComparison === "with"}
                inverted
              />
            </div>

            {/* Stats bar at bottom */}
            <div className={`px-6 py-4 border-t transition-colors duration-500 ${
              activeComparison === "with" 
                ? "bg-primary-green/5 border-primary-green/20" 
                : "bg-red-500/5 border-red-500/20"
            }`}>
              <div className="flex justify-between items-center text-sm">
                <StatItem 
                  label="CO₂" 
                  value={activeComparison === "with" ? "-65%" : "HIGH"} 
                  isPositive={activeComparison === "with"} 
                />
                <StatItem 
                  label="E-WASTE" 
                  value={activeComparison === "with" ? "-50%" : "▲▲▲"} 
                  isPositive={activeComparison === "with"} 
                />
                <StatItem 
                  label="ENERGY" 
                  value={activeComparison === "with" ? "+40%" : "POOR"} 
                  isPositive={activeComparison === "with"} 
                />
                <StatItem 
                  label="STATUS" 
                  value={activeComparison === "with" ? "OPTIMAL" : "CRITICAL"} 
                  isPositive={activeComparison === "with"} 
                />
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full transition-all duration-1000 ${
            activeComparison === "with"
              ? "bg-primary-green/5"
              : "bg-red-500/5"
          } blur-[100px]`}
        />
      </div>
    </section>
  );
}

function StatItem({
  label,
  value,
  isPositive,
}: {
  label: string;
  value: string;
  isPositive: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-primary-light/50">{label}:</span>
      <span className={`font-bold ${isPositive ? "text-primary-green" : "text-red-400"}`}>
        {value}
      </span>
    </div>
  );
}

function ChartCard({
  title,
  unit,
  withValue,
  withoutValue,
  isActive,
  showWithValue,
  inverted = false,
}: {
  title: string;
  unit: string;
  withValue: number;
  withoutValue: number;
  isActive: boolean;
  showWithValue: boolean;
  inverted?: boolean;
}) {
  const currentValue = showWithValue ? withValue : withoutValue;
  const maxValue = Math.max(withValue, withoutValue);
  
  return (
    <div className={`p-4 rounded-xl border transition-all duration-500 ${
      isActive
        ? "border-primary-green/20 bg-primary-green/5"
        : "border-red-500/20 bg-red-500/5"
    }`}>
      {/* Title */}
      <div className="text-sm text-primary-light/60 mb-3 font-medium">
        {title}
      </div>
      
      {/* Value */}
      <div className={`text-2xl font-bold transition-colors duration-500 ${
        isActive ? "text-primary-green" : "text-red-400"
      }`}>
        {currentValue}
        <span className="text-xs text-primary-light/50 ml-1 font-normal">{unit}</span>
      </div>
      
      {/* Change indicator */}
      <div className={`text-xs font-medium mt-1 ${
        isActive ? "text-primary-green" : "text-red-400"
      }`}>
        {showWithValue ? (
          inverted ? (
            `▲ ${Math.round(((withValue - withoutValue) / withoutValue) * 100)}%`
          ) : (
            `▼ ${Math.round(((withoutValue - withValue) / withoutValue) * 100)}%`
          )
        ) : (
          inverted ? "▼ Degraded" : "▲ Excess"
        )}
      </div>
    </div>
  );
}
