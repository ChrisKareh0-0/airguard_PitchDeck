"use client";

import { useEffect, useState, useRef } from "react";

// Types for our network nodes and connections
interface Node {
  id: string;
  x: number;
  y: number;
  delay: number;
}

interface Connection {
  from: string;
  to: string;
  delay: number;
}

// Linear network configuration (Problem - single point of failure)
const createLinearNetwork = (): { nodes: Node[]; connections: Connection[] } => {
  const nodes: Node[] = [];
  const connections: Connection[] = [];

  // Central hub node (single point of failure)
  nodes.push({ id: "hub", x: 50, y: 50, delay: 0 });

  // Left side nodes (clients)
  const leftNodes = [
    { id: "l1", x: 15, y: 25, delay: 0.2 },
    { id: "l2", x: 10, y: 45, delay: 0.3 },
    { id: "l3", x: 15, y: 65, delay: 0.4 },
    { id: "l4", x: 10, y: 85, delay: 0.5 },
    { id: "l5", x: 20, y: 15, delay: 0.6 },
    { id: "l6", x: 25, y: 75, delay: 0.7 },
  ];

  // Right side nodes (servers/destinations) - aligned in a single horizontal line
  const rightNodes = [
    { id: "r1", x: 58, y: 50, delay: 0.8 },
    { id: "r2", x: 66, y: 50, delay: 0.85 },
    { id: "r3", x: 74, y: 50, delay: 0.9 },
    { id: "r4", x: 82, y: 50, delay: 0.95 },
    { id: "r5", x: 90, y: 50, delay: 1.0 },
  ];

  nodes.push(...leftNodes, ...rightNodes);

  // Connect all left nodes to hub
  leftNodes.forEach((node, i) => {
    connections.push({ from: node.id, to: "hub", delay: 0.3 + i * 0.1 });
  });

  // Connect hub to right nodes (in sequence)
  rightNodes.forEach((node, i) => {
    connections.push({ from: "hub", to: node.id, delay: 1.0 + i * 0.15 });
  });

  return { nodes, connections };
};

// Mesh network configuration (Solution - resilient)
const createMeshNetwork = (): { nodes: Node[]; connections: Connection[] } => {
  const nodes: Node[] = [];
  const connections: Connection[] = [];

  // Distributed nodes in a mesh pattern
  const meshNodes = [
    { id: "m1", x: 20, y: 20, delay: 0 },
    { id: "m2", x: 50, y: 15, delay: 0.1 },
    { id: "m3", x: 80, y: 20, delay: 0.2 },
    { id: "m4", x: 15, y: 50, delay: 0.15 },
    { id: "m5", x: 50, y: 50, delay: 0.25 },
    { id: "m6", x: 85, y: 50, delay: 0.3 },
    { id: "m7", x: 20, y: 80, delay: 0.2 },
    { id: "m8", x: 50, y: 85, delay: 0.35 },
    { id: "m9", x: 80, y: 80, delay: 0.4 },
  ];

  nodes.push(...meshNodes);

  // Create mesh connections (each node connects to multiple neighbors)
  const meshConnections = [
    // Top row connections
    { from: "m1", to: "m2", delay: 0.3 },
    { from: "m2", to: "m3", delay: 0.35 },
    // Middle row connections
    { from: "m4", to: "m5", delay: 0.4 },
    { from: "m5", to: "m6", delay: 0.45 },
    // Bottom row connections
    { from: "m7", to: "m8", delay: 0.5 },
    { from: "m8", to: "m9", delay: 0.55 },
    // Vertical connections
    { from: "m1", to: "m4", delay: 0.6 },
    { from: "m2", to: "m5", delay: 0.65 },
    { from: "m3", to: "m6", delay: 0.7 },
    { from: "m4", to: "m7", delay: 0.75 },
    { from: "m5", to: "m8", delay: 0.8 },
    { from: "m6", to: "m9", delay: 0.85 },
    // Diagonal connections (mesh redundancy)
    { from: "m1", to: "m5", delay: 0.9 },
    { from: "m2", to: "m4", delay: 0.95 },
    { from: "m2", to: "m6", delay: 1.0 },
    { from: "m3", to: "m5", delay: 1.05 },
    { from: "m4", to: "m8", delay: 1.1 },
    { from: "m5", to: "m7", delay: 1.15 },
    { from: "m5", to: "m9", delay: 1.2 },
    { from: "m6", to: "m8", delay: 1.25 },
  ];

  connections.push(...meshConnections);

  return { nodes, connections };
};

// Network visualization component
function NetworkDiagram({
  nodes,
  connections,
  isActive,
  showPulse = false,
  highlightHub = false,
  className = "",
}: {
  nodes: Node[];
  connections: Connection[];
  isActive: boolean;
  showPulse?: boolean;
  highlightHub?: boolean;
  className?: string;
}) {
  const getNodePosition = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Glow filter for nodes */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Animated gradient for lines */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d8ff43" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#d8ff43" stopOpacity="1" />
          <stop offset="100%" stopColor="#d8ff43" stopOpacity="0.3" />
        </linearGradient>

        {/* Pulse gradient for data flow */}
        <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d8ff43" stopOpacity="0">
            <animate
              attributeName="offset"
              values="-0.5;1.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="25%" stopColor="#d8ff43" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-0.25;1.75"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#d8ff43" stopOpacity="0">
            <animate
              attributeName="offset"
              values="0;2"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        {/* Red warning gradient for hub failure */}
        <radialGradient id="warningGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5643" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ff5643" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connection lines */}
      {connections.map((conn, index) => {
        const from = getNodePosition(conn.from);
        const to = getNodePosition(conn.to);
        return (
          <g key={`conn-${index}`}>
            {/* Base line */}
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#d8ff43"
              strokeWidth="0.3"
              strokeOpacity={isActive ? 0.4 : 0}
              className="transition-all duration-500"
              style={{
                transitionDelay: `${conn.delay}s`,
              }}
            />
            {/* Animated pulse line */}
            {showPulse && isActive && (
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#pulseGradient)"
                strokeWidth="0.5"
                strokeOpacity="0.8"
                style={{
                  animationDelay: `${conn.delay + 1}s`,
                }}
              />
            )}
            {/* Animated dot traveling along the line */}
            {showPulse && isActive && (
              <circle r="0.8" fill="#d8ff43" filter="url(#glow)">
                <animateMotion
                  dur={`${1.5 + Math.random() * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${conn.delay}s`}
                >
                  <mpath xlinkHref={`#path-${index}`} />
                </animateMotion>
              </circle>
            )}
            {/* Hidden path for animateMotion */}
            <path
              id={`path-${index}`}
              d={`M${from.x},${from.y} L${to.x},${to.y}`}
              fill="none"
              stroke="none"
            />
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isHub = node.id === "hub";
        return (
          <g key={node.id}>
            {/* Warning glow for hub (single point of failure) */}
            {highlightHub && isHub && (
              <circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="url(#warningGlow)"
                className="animate-pulse"
              />
            )}
            {/* Node outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={isHub ? 3.5 : 2.5}
              fill="#d8ff43"
              fillOpacity={isActive ? 0.2 : 0}
              className="transition-all duration-500"
              style={{
                transitionDelay: `${node.delay}s`,
              }}
            />
            {/* Node core */}
            <circle
              cx={node.x}
              cy={node.y}
              r={isHub ? 2 : 1.5}
              fill={highlightHub && isHub ? "#ff5643" : "#d8ff43"}
              fillOpacity={isActive ? 1 : 0}
              filter="url(#glow)"
              className="transition-all duration-500"
              style={{
                transitionDelay: `${node.delay}s`,
              }}
            />
            {/* Pulse animation for active nodes */}
            {showPulse && isActive && !isHub && (
              <circle
                cx={node.x}
                cy={node.y}
                r="1.5"
                fill="none"
                stroke="#d8ff43"
                strokeWidth="0.3"
                strokeOpacity="0.5"
              >
                <animate
                  attributeName="r"
                  values="1.5;4;1.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${node.delay + 0.5}s`}
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.5;0;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${node.delay + 0.5}s`}
                />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function NetworkVisualizationSection() {
  const [phase, setPhase] = useState<
    "initial" | "problem-active" | "transitioning" | "solution-visible"
  >("initial");
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const linearNetwork = createLinearNetwork();
  const meshNetwork = createMeshNetwork();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Start animation sequence
            setPhase("problem-active");

            // After problem animation plays, transition to show solution
            setTimeout(() => {
              setPhase("transitioning");
            }, 3000);

            // Show solution after transition
            setTimeout(() => {
              setPhase("solution-visible");
            }, 3800);
          }
        });
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
      id="network-visualization"
      className="h-screen bg-[#0a0a0a] overflow-hidden relative flex flex-col justify-center"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(216, 255, 67, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(216, 255, 67, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-light">
            Network Architecture
            <span className="text-primary-green"> Evolution</span>
          </h2>
        </div>

        {/* Main visualization container */}
        <div className="relative flex items-center justify-center max-h-[60vh]">
          {/* Problem Network (Left side after transition) */}
          <div
            className={`
              absolute md:relative w-full md:w-1/2 h-[320px] md:h-[380px]
              transition-all duration-1000 ease-in-out
              ${
                phase === "initial"
                  ? "opacity-0 scale-90"
                  : phase === "problem-active"
                  ? "opacity-100 scale-100 left-0 right-0"
                  : "opacity-100 scale-100 md:scale-90"
              }
              ${
                phase === "transitioning" || phase === "solution-visible"
                  ? "md:translate-x-0"
                  : phase === "problem-active"
                  ? "md:translate-x-1/2"
                  : ""
              }
            `}
          >
            {/* Problem label */}
            <div
              className={`
                absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0
                transition-all duration-700
                ${phase === "problem-active" ? "opacity-100" : "opacity-100"}
              `}
            >
              <span className="text-sm md:text-base font-semibold text-red-400 uppercase tracking-wider">
                The Problem
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-primary-light mt-1">
                Single Point of Failure
              </h3>
            </div>

            {/* Linear network diagram */}
            <div className="w-full h-full pt-16">
              <NetworkDiagram
                nodes={linearNetwork.nodes}
                connections={linearNetwork.connections}
                isActive={phase !== "initial"}
                showPulse={phase === "problem-active"}
                highlightHub={phase !== "initial"}
              />
            </div>

            {/* Problem description */}
            <div
              className={`
                absolute -bottom-12 left-0 right-0 text-center md:text-left
                transition-all duration-500 delay-500
                ${phase === "initial" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
              `}
            >
              <p className="text-sm md:text-base text-primary-light/70 max-w-sm">
                Traditional networks rely on central hubs. When one fails,
                <span className="text-red-400 font-semibold">
                  {" "}
                  everything goes down.
                </span>
              </p>
            </div>
          </div>

          {/* Arrow separator (center) */}
          <div
            className={`
              hidden md:flex absolute md:relative z-20 flex-col items-center justify-center
              px-4 md:px-8
              transition-all duration-700
              ${
                phase === "transitioning" || phase === "solution-visible"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }
            `}
          >
            <span className="text-primary-green font-bold text-lg md:text-xl mb-2 whitespace-nowrap">
              Solution
            </span>
            <div className="relative">
              {/* Arrow */}
              <svg
                width="60"
                height="40"
                viewBox="0 0 60 40"
                fill="none"
                className="text-primary-green"
              >
                <path
                  d="M0 20H50M50 20L35 5M50 20L35 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    transition-all duration-500
                    ${phase === "solution-visible" ? "opacity-100" : "opacity-50"}
                  `}
                />
              </svg>
              {/* Animated pulse on arrow */}
              {phase === "solution-visible" && (
                <div className="absolute inset-0 flex items-center">
                  <div className="w-3 h-3 bg-primary-green rounded-full animate-ping" />
                </div>
              )}
            </div>
          </div>

          {/* Solution Network (Right side) */}
          <div
            className={`
              absolute md:relative w-full md:w-1/2 h-[320px] md:h-[380px]
              transition-all duration-1000 ease-in-out
              ${
                phase === "solution-visible"
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-90 translate-x-8"
              }
            `}
          >
            {/* Solution label */}
            <div className="absolute top-0 right-0 text-right">
              <span className="text-sm md:text-base font-semibold text-primary-green uppercase tracking-wider">
                The Solution
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-primary-light mt-1">
                Self-Healing Mesh
              </h3>
            </div>

            {/* Mesh network diagram */}
            <div className="w-full h-full pt-16">
              <NetworkDiagram
                nodes={meshNetwork.nodes}
                connections={meshNetwork.connections}
                isActive={phase === "solution-visible"}
                showPulse={phase === "solution-visible"}
              />
            </div>

            {/* Solution description */}
            <div
              className={`
                absolute -bottom-12 left-0 right-0 text-center md:text-right
                transition-all duration-500 delay-700
                ${
                  phase === "solution-visible"
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
              `}
            >
              <p className="text-sm md:text-base text-primary-light/70 max-w-sm md:ml-auto">
                AirGuard creates{" "}
                <span className="text-primary-green font-semibold">
                  intelligent mesh networks
                </span>{" "}
                that automatically reroute around failures.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile arrow (shown between states on mobile) */}
        <div
          className={`
            md:hidden flex flex-col items-center justify-center py-8
            transition-all duration-700
            ${
              phase === "transitioning" || phase === "solution-visible"
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          <span className="text-primary-green font-bold text-lg mb-2">
            Solution
          </span>
          <svg
            width="40"
            height="60"
            viewBox="0 0 40 60"
            fill="none"
            className="text-primary-green rotate-90"
          >
            <path
              d="M0 30H50M50 30L35 15M50 30L35 45"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Bottom stats */}
        <div
          className={`
            grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16
            transition-all duration-700 delay-1000
            ${
              phase === "solution-visible"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-primary-green">
              99.9%
            </div>
            <div className="text-xs md:text-sm text-primary-light/60 mt-1">
              Uptime Guaranteed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-primary-green">
              &lt;100ms
            </div>
            <div className="text-xs md:text-sm text-primary-light/60 mt-1">
              Failover Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-primary-green">
              0
            </div>
            <div className="text-xs md:text-sm text-primary-light/60 mt-1">
              Single Points of Failure
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dataFlow {
          0% {
            stroke-dashoffset: 100;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
