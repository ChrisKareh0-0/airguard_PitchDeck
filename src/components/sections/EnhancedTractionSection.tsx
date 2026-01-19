import { useState, useEffect, useRef, useMemo } from "react";
import EditableText from "@/components/ui/EditableText";

// Data structure for the graph nodes
const tractionData = [
  { id: 1, year: "Inception", sub: "(Founding / R&D)", label: "Architecture Validated", x: 5, yOffset: 40 },
  { id: 2, year: "", sub: "", label: "Prototype Built", x: 12, yOffset: 80 },
  { id: 3, year: "2025 – Today", sub: "(Traction)", label: "Pilot Users", x: 22, yOffset: 40 },
  { id: 4, year: "", sub: "", label: "First Real-World Deployment", x: 28, yOffset: 120 },
  { id: 5, year: "", sub: "", label: "Key Integrations", x: 34, yOffset: 40 },
  { id: 6, year: "2026", sub: "", label: "User Base Growth", x: 42, yOffset: 40 },
  { id: 7, year: "", sub: "", label: "Platform Scaling", x: 48, yOffset: 100 },
  { id: 8, year: "2027", sub: "", label: "New Product Tier", x: 56, yOffset: 40 },
  { id: 9, year: "", sub: "", label: "Global Expansion", x: 62, yOffset: 100 },
  { id: 10, year: "2028", sub: "", label: "New Partnerships Milestone", x: 70, yOffset: 40 },
  { id: 11, year: "", sub: "", label: "Securing 1st Major Client", x: 76, yOffset: 120 },
  { id: 12, year: "2029–2030", sub: "", label: "AI/ML Enhancements", x: 84, yOffset: 40 },
  { id: 13, year: "", sub: "", label: "Patents Granted", x: 88, yOffset: 140 },
  { id: 14, year: "", sub: "", label: "Exponential Growth", x: 92, yOffset: 40 },
  { id: 15, year: "", sub: "", label: "Market Leadership Achieved", x: 96, yOffset: 140 },
];

export default function EnhancedTractionSection({ isStatic = false, isEditMode = false }: { isStatic?: boolean, isEditMode?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isStatic) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [isStatic]);

  // Generate SVG Path for the growing sine wave
  const wavePath = useMemo(() => {
    const points = [];
    const steps = 200;
    const width = 100; // using viewbox units 0-100

    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * width;
      // Frequency increases slightly, Amplitude increases with x
      // Base amplitude 2, growing to ~15 at the end
      const growthFactor = 2 + (x / 100) * (x / 100) * 12;
      const y = 50 + Math.sin(x * 0.45) * growthFactor;
      points.push(`${x},${y}`);
    }

    // Construct simplified path
    return `M ${points[0]} L ${points.slice(1).join(" L ")}`;
  }, []);

  return (
    <section
      ref={sectionRef}
      id="traction"
      className="min-h-screen flex flex-col justify-center items-center py-10 bg-gradient-to-br from-[#121212] to-[#0a0a0a] overflow-hidden relative"
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-16 w-full h-full flex flex-col">
        {/* Header */}
        <div className={`text-left mb-12 ${!isStatic ? "reveal" : ""} ${isVisible ? "visible" : ""}`}>
          <h2 className="text-sm font-bold text-primary-green tracking-widest uppercase mb-2">
            <EditableText initialText="PROJECT AIRGUARD" isEditMode={isEditMode} />
          </h2>
          <h1 className="text-4xl md:text-6xl font-thin text-white tracking-tight">
            <EditableText initialText="VISION ROADMAP & TRACTION" isEditMode={isEditMode} />
          </h1>
        </div>

        {/* Graph Container */}
        <div
          className={`relative w-full flex-grow flex items-center overflow-x-auto pb-8 ${!isStatic ? "reveal" : ""} ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Scrollable graphic area */}
          <div className="min-w-[1000px] w-full relative h-[500px] select-none">

            {/* Year Labels (Top) */}
            {tractionData.filter(d => d.year).map((item) => (
              <div
                key={`year-${item.id}`}
                className="absolute top-10 text-center transform -translate-x-1/2"
                style={{ left: `${item.x}%` }}
              >
                <div className="text-xl font-bold text-white">
                  <EditableText initialText={item.year} isEditMode={isEditMode} />
                </div>
                {item.sub && (
                  <div className="text-sm text-gray-400 mt-1">
                    <EditableText initialText={item.sub} isEditMode={isEditMode} />
                  </div>
                )}
              </div>
            ))}

            {/* SVG Wave */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              {/* Glow filter */}
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2c3e50" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#4ade80" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#d8ff43" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* The Wave Line */}
              <path
                d={wavePath}
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="0.8"
                filter="url(#glow)"
                className={`${!isStatic ? "draw-path" : ""}`}
                style={{
                  strokeDasharray: 300,
                  strokeDashoffset: isVisible ? 0 : 300,
                  transition: isStatic ? "none" : "stroke-dashoffset 2s ease-in-out"
                }}
              />
            </svg>

            {/* Nodes and Labels */}
            {tractionData.map((item, index) => (
              <div
                key={`node-${item.id}`}
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{
                  left: `${item.x}%`,
                  marginTop: "0px" // Adjust based on sine wave calculation? 
                  // Wait, exact y position on the SVG matches math. 
                  // I should probably rely on absolute positioning relative to top container for nodes?
                  // Or approximate. The sine wave logic determined Y.
                }}
              >
                {/* We need to position the dots EXACTLY on the wave.
                    Recalculate Y for this X using same formula.
                */}
                <Node
                  item={item}
                  index={index}
                  isVisible={isVisible}
                  isStatic={isStatic}
                  isEditMode={isEditMode}
                />
              </div>
            ))}

            {/* Special Highlight for "Traction" label near 2025 */}
            <div
              className={`absolute top-[40%] text-[#d8ff43] font-bold tracking-widest uppercase text-sm z-10 transition-opacity duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ left: "22%", textShadow: "0 0 10px rgba(216, 255, 67, 0.8)" }}
            >
              <EditableText initialText="Traction" isEditMode={isEditMode} />
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .draw-path {
           will-change: stroke-dashoffset;
        }
      `}</style>
    </section>
  );
}

// Helper component to position node and connecting line
const Node = ({ item, index, isVisible, isStatic, isEditMode }: any) => {
  // Replicate wave math to find Y position relative to center (50%)
  // x is 0-100.
  const x = item.x;
  const growthFactor = 2 + (x / 100) * (x / 100) * 12;
  const yVals = Math.sin(x * 0.45) * growthFactor; // - Amplitude to + Amplitude

  // yVals is percentage offset from center? 
  // In SVG viewbox 0-100, y=50 is center.
  // Visual height is 500px. Center is 250px.
  // Scale factor: SVG(100) -> px(500) = x5.
  // But we iterate x 0-100.

  // Let's use % for top position.
  // Center is 50%.
  // offset is yVals (which is approximately +/- 0 to 15 in SVG units).
  // So top = 50 + yVals %.

  const topPos = 50 + yVals;
  const isTopLabel = index % 2 === 0; // Alternating layout concept? 
  // User image has specific layouts. Some drop down long, some short.

  // Hardcoded yOffsets in data are for the labels.
  // Let's use item.yOffset for the label position relative to the dot.

  return (
    <div
      className="absolute"
      style={{
        left: 0, // Parent is positioned at left X
        top: `${yVals}%`, // Relative to vertical center of container
      }}
    >
      {/* The Dot */}
      <div
        className={`w-3 h-3 bg-[#d8ff43] rounded-full shadow-[0_0_10px_#d8ff43] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
        style={{
          opacity: isVisible || isStatic ? 1 : 0,
          transform: isVisible || isStatic ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)",
          transitionDelay: `${isStatic ? 0 : 500 + index * 100}ms`
        }}
      />

      {/* Connecting Line */}
      <div
        className="absolute bg-white/20 w-px left-0 transform -translate-x-1/2 origin-top"
        style={{
          top: 0,
          height: `${item.yOffset}px`,
          opacity: isVisible || isStatic ? 1 : 0,
          transition: "height 0.5s ease-out, opacity 0.5s",
          transitionDelay: `${isStatic ? 0 : 800 + index * 100}ms`
        }}
      />

      {/* Label */}
      <div
        className="absolute transform -translate-x-1/2 w-40 text-center"
        style={{
          top: `${item.yOffset + 10}px`,
          opacity: isVisible || isStatic ? 1 : 0,
          transition: "opacity 0.5s, transform 0.5s",
          transitionDelay: `${isStatic ? 0 : 1000 + index * 100}ms`
        }}
      >
        <p className="text-white text-xs font-medium leading-tight">
          <EditableText initialText={item.label} isEditMode={isEditMode} multiline />
        </p>
      </div>
    </div>
  );
}
