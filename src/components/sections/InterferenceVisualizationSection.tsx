"use client";

import { useEffect, useState, useRef } from "react";

interface InterferenceType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const interferenceTypes: InterferenceType[] = [
  {
    id: "frequency",
    title: "Frequency Collision",
    description: "Multiple ISPs competing for limited spectrum bands",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12h4l3-9 3 18 3-9 3 9 4-9h2" />
      </svg>
    ),
  },
  {
    id: "lightning",
    title: "Natural Causes",
    description: "Electromagnetic pulses disrupting signal transmission",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "power",
    title: "Power Fluctuations",
    description: "Voltage drops and surges affecting equipment",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    id: "config",
    title: "Misconfiguration",
    description: "Wrong settings under heavy network loads",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function InterferenceVisualizationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeInterference, setActiveInterference] = useState<string | null>(null);
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

  // Set initial interference type on mount
  useEffect(() => {
    if (isVisible && !activeInterference) {
      setActiveInterference("frequency");
    }
  }, [isVisible, activeInterference]);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-[#0a0a0a] overflow-hidden relative flex flex-col justify-center"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 86, 67, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 86, 67, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div
          className={`
            text-center mb-10 md:mb-14
            transition-all duration-1000
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-light mb-4">
            What Causes <span className="text-red-400">Network Failures?</span>
          </h2>
          <p className="text-lg md:text-xl text-primary-light/60 max-w-2xl mx-auto">
            Multiple threats constantly attack your network infrastructure
          </p>
        </div>

        {/* Main visualization */}
        <div
          className={`
            relative max-w-4xl mx-auto
            transition-all duration-1000 delay-300
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* Network visualization with interference */}
          <div className="relative bg-[#111] rounded-2xl p-6 md:p-8 border border-red-500/20">
            <svg viewBox="0 0 500 200" className="w-full h-auto">
              <defs>
                {/* Interference wave pattern */}
                <pattern id="wavePattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M0 10 Q5 0 10 10 Q15 20 20 10" stroke="rgba(255,86,67,0.3)" fill="none" strokeWidth="1" />
                </pattern>
                
                {/* Glow filters */}
                <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <filter id="yellowGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main network line */}
              <path
                d="M 30 100 L 470 100"
                stroke="#444"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              
              {/* Road markings */}
              <path
                d="M 50 100 L 70 100 M 90 100 L 110 100 M 130 100 L 150 100 M 170 100 L 190 100 M 210 100 L 230 100 M 270 100 L 290 100 M 310 100 L 330 100 M 350 100 L 370 100 M 390 100 L 410 100 M 430 100 L 450 100"
                stroke="#666"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* Network nodes */}
              <circle cx="30" cy="100" r="8" fill="#d8ff43" />
              <circle cx="130" cy="100" r="6" fill="#d8ff43" opacity="0.7" />
              <circle cx="250" cy="100" r="8" fill={activeInterference ? "#ff5643" : "#d8ff43"} className="transition-colors duration-300" />
              <circle cx="370" cy="100" r="6" fill="#d8ff43" opacity="0.7" />
              <circle cx="470" cy="100" r="8" fill="#d8ff43" opacity="0.5" />

              {/* Data packet (car) */}
              <g className={activeInterference ? "" : ""}>
                <rect x="80" y="92" width="30" height="16" fill="#d8ff43" rx="3" />
                <circle cx="88" cy="108" r="4" fill="#333" />
                <circle cx="102" cy="108" r="4" fill="#333" />
              </g>

              {/* INTERFERENCE VISUALIZATIONS */}
              
              {/* 1. Frequency Collision - Other ISP waves */}
              <g className={`transition-all duration-500 ${activeInterference === "frequency" ? "opacity-100" : "opacity-0"}`}>
                {/* Competing signal waves from top */}
                <path
                  d="M 200 30 Q 210 40 220 30 Q 230 20 240 30 Q 250 40 260 30 Q 270 20 280 30 Q 290 40 300 30"
                  stroke="#ff5643"
                  strokeWidth="3"
                  fill="none"
                  filter="url(#redGlow)"
                >
                  <animate attributeName="d" 
                    values="M 200 30 Q 210 40 220 30 Q 230 20 240 30 Q 250 40 260 30 Q 270 20 280 30 Q 290 40 300 30;
                            M 200 35 Q 210 25 220 35 Q 230 45 240 35 Q 250 25 260 35 Q 270 45 280 35 Q 290 25 300 35;
                            M 200 30 Q 210 40 220 30 Q 230 20 240 30 Q 250 40 260 30 Q 270 20 280 30 Q 290 40 300 30"
                    dur="0.5s" repeatCount="indefinite" />
                </path>
                <path
                  d="M 210 50 Q 220 60 230 50 Q 240 40 250 50 Q 260 60 270 50 Q 280 40 290 50"
                  stroke="#ff5643"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                >
                  <animate attributeName="d" 
                    values="M 210 50 Q 220 60 230 50 Q 240 40 250 50 Q 260 60 270 50 Q 280 40 290 50;
                            M 210 55 Q 220 45 230 55 Q 240 65 250 55 Q 260 45 270 55 Q 280 65 290 55;
                            M 210 50 Q 220 60 230 50 Q 240 40 250 50 Q 260 60 270 50 Q 280 40 290 50"
                    dur="0.6s" repeatCount="indefinite" />
                </path>
                {/* Arrow pointing down to interference point */}
                <path d="M 250 65 L 250 85" stroke="#ff5643" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <polygon points="250,90 245,80 255,80" fill="#ff5643" />
                {/* Label */}
                <text x="250" y="20" textAnchor="middle" fill="#ff5643" fontSize="10" fontWeight="bold">OTHER ISP</text>
              </g>

              {/* 2. Lightning Strike */}
              <g className={`transition-all duration-500 ${activeInterference === "lightning" ? "opacity-100" : "opacity-0"}`}>
                <path
                  d="M 250 15 L 240 45 L 255 45 L 235 80 L 260 50 L 245 50 L 260 15 Z"
                  fill="#ffcc00"
                  filter="url(#yellowGlow)"
                >
                  <animate attributeName="opacity" values="1;0.5;1;0.3;1" dur="0.3s" repeatCount="indefinite" />
                </path>
                {/* Electric sparks at impact */}
                <g>
                  <line x1="250" y1="100" x2="230" y2="85" stroke="#ffcc00" strokeWidth="2">
                    <animate attributeName="opacity" values="0;1;0" dur="0.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="100" x2="270" y2="85" stroke="#ffcc00" strokeWidth="2">
                    <animate attributeName="opacity" values="0;1;0" dur="0.15s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="100" x2="250" y2="120" stroke="#ffcc00" strokeWidth="2">
                    <animate attributeName="opacity" values="0;1;0" dur="0.25s" repeatCount="indefinite" />
                  </line>
                </g>
              </g>

              {/* 3. Power Issue */}
              <g className={`transition-all duration-500 ${activeInterference === "power" ? "opacity-100" : "opacity-0"}`}>
                {/* Power plug icon */}
                <rect x="220" y="140" width="60" height="40" rx="5" fill="none" stroke="#ff5643" strokeWidth="2" />
                <line x1="235" y1="150" x2="235" y2="170" stroke="#ff5643" strokeWidth="3" />
                <line x1="265" y1="150" x2="265" y2="170" stroke="#ff5643" strokeWidth="3" />
                {/* Disconnection effect */}
                <path d="M 250 140 L 250 110" stroke="#ff5643" strokeWidth="2" strokeDasharray="5 5">
                  <animate attributeName="stroke-dashoffset" values="0;10" dur="0.5s" repeatCount="indefinite" />
                </path>
                {/* Warning symbol */}
                <text x="250" y="165" textAnchor="middle" fill="#ff5643" fontSize="16">⚠</text>
                {/* Voltage fluctuation line */}
                <path
                  d="M 200 185 L 210 185 L 215 175 L 220 195 L 225 175 L 230 195 L 235 185 L 300 185"
                  stroke="#ff5643"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />
                </path>
              </g>

              {/* 4. Misconfiguration */}
              <g className={`transition-all duration-500 ${activeInterference === "config" ? "opacity-100" : "opacity-0"}`}>
                {/* Gear icon with error */}
                <g transform="translate(250, 50)">
                  <circle cx="0" cy="0" r="15" fill="none" stroke="#ff5643" strokeWidth="2" />
                  <circle cx="0" cy="0" r="6" fill="#ff5643" />
                  {/* Gear teeth */}
                  <rect x="-3" y="-20" width="6" height="8" fill="#ff5643" />
                  <rect x="-3" y="12" width="6" height="8" fill="#ff5643" />
                  <rect x="-20" y="-3" width="8" height="6" fill="#ff5643" />
                  <rect x="12" y="-3" width="8" height="6" fill="#ff5643" />
                  {/* X mark */}
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#fff" strokeWidth="3" />
                  <line x1="8" y1="-8" x2="-8" y2="8" stroke="#fff" strokeWidth="3" />
                  {/* Rotation animation */}
                  <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" additive="sum" />
                </g>
                {/* Data overload bars */}
                <g transform="translate(320, 30)">
                  <rect x="0" y="30" width="10" height="20" fill="#ff5643" opacity="0.5" />
                  <rect x="15" y="20" width="10" height="30" fill="#ff5643" opacity="0.7" />
                  <rect x="30" y="5" width="10" height="45" fill="#ff5643" />
                  <rect x="45" y="10" width="10" height="40" fill="#ff5643" opacity="0.8">
                    <animate attributeName="height" values="40;45;35;40" dur="0.5s" repeatCount="indefinite" />
                    <animate attributeName="y" values="10;5;15;10" dur="0.5s" repeatCount="indefinite" />
                  </rect>
                  <text x="25" y="65" textAnchor="middle" fill="#ff5643" fontSize="8">OVERLOAD</text>
                </g>
              </g>

              {/* Disruption effect at center node */}
              {activeInterference && (
                <circle cx="250" cy="100" r="20" fill="none" stroke="#ff5643" strokeWidth="2" opacity="0.5">
                  <animate attributeName="r" values="10;30;10" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite" />
                </circle>
              )}
            </svg>
            
            {/* Icon buttons - 2 on each side, outside the box */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {interferenceTypes.slice(0, 2).map((type, index) => (
                <button
                  key={type.id}
                  onClick={() => setActiveInterference(type.id)}
                  className={`
                    w-12 h-12 rounded-lg border transition-all duration-300 flex items-center justify-center
                    ${activeInterference === type.id 
                      ? "bg-red-500/20 border-red-500/50 scale-110" 
                      : "bg-[#1a1a1a] border-primary-light/10 hover:border-red-500/30"
                    }
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                  `}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`
                    transition-colors duration-300
                    ${activeInterference === type.id ? "text-red-400" : "text-primary-light/50"}
                  `}>
                    {type.icon}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {interferenceTypes.slice(2, 4).map((type, index) => (
                <button
                  key={type.id}
                  onClick={() => setActiveInterference(type.id)}
                  className={`
                    w-12 h-12 rounded-lg border transition-all duration-300 flex items-center justify-center
                    ${activeInterference === type.id 
                      ? "bg-red-500/20 border-red-500/50 scale-110" 
                      : "bg-[#1a1a1a] border-primary-light/10 hover:border-red-500/30"
                    }
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
                  `}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className={`
                    transition-colors duration-300
                    ${activeInterference === type.id ? "text-red-400" : "text-primary-light/50"}
                  `}>
                    {type.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active interference explanation */}
          <div
            className={`
              text-center mt-6
              transition-all duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {interferenceTypes.map((type) => (
              <div
                key={type.id}
                className={`
                  transition-all duration-300
                  ${activeInterference === type.id ? "opacity-100" : "opacity-0 hidden"}
                `}
              >
                <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-2">
                  {type.title}
                </h3>
                <p className="text-base md:text-lg text-primary-light/60">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}