"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  featured?: boolean;
  delay?: number;
}

function PricingCard({ title, price, period, description, featured, delay = 0 }: PricingCardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
        featured 
          ? "border-[#d8ff43] bg-[#191919] text-white shadow-lg shadow-[#d8ff43]/20" 
          : "border-gray-200 bg-white text-[#191919]"
      }`}
      style={{ 
        animationDelay: `${delay}ms`,
        animation: "fadeInUp 0.6s ease-out forwards",
        opacity: 0
      }}
    >
      <h3 className={`text-lg font-bold mb-2 ${featured ? "text-[#d8ff43]" : "text-[#191919]"}`}>
        {title}
      </h3>
      <p className={`text-3xl font-black mb-2 ${featured ? "text-white" : "text-[#191919]"}`}>
        {price}
        {period && <span className="text-base font-normal opacity-70">{period}</span>}
      </p>
      <p className={`text-sm ${featured ? "text-white/70" : "text-gray-600"}`}>
        {description}
      </p>
    </div>
  );
}

export default function WhatWeSellSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingData = [
    {
      title: "Hardware",
      price: "N/A",
      description: "Airguard",
      featured: true,
    },
    {
      title: "Core Subscription",
      price: "$125",
      period: "/mo",
      description: "Full platform access with real-time spectrum monitoring and autonomous optimization.",
      featured: true,
    },
    {
      title: "Predictive AI",
      price: "+$40",
      period: "/mo",
      description: "Advanced AI module for predictive network optimization and issue prevention.",
      featured: false,
    },
    {
      title: "Advanced Analytics",
      price: "+$30",
      period: "/mo",
      description: "Deep insights into network performance and interference pattern analysis.",
      featured: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center bg-white py-16 px-8"
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
      `}</style>

      <div className="max-w-7xl w-full">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl md:text-5xl font-black text-[#191919] tracking-tight"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
              opacity: isVisible ? 1 : 0
            }}
          >
            What Do We <span className="text-[#d8ff43]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" }}>Sell</span>?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Left: Video */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl max-h-56"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out 0.2s forwards" : "none",
              opacity: 0
            }}
          >
            <video
              ref={videoRef}
              src="/airguardshowcase.mp4"
              className="w-full h-56 object-cover"
              muted
              loop
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm font-medium">Purpose-Built for the Edge</p>
            </div>
          </div>

          {/* Right: Device Image */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl h-56"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out 0.3s forwards" : "none",
              opacity: 0
            }}
          >
            <Image
              src="/AirguardOnTower.webp"
              alt="AirGuard Hardware Device"
              width={600}
              height={224}
              className="w-full h-56 object-cover"
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pricingData.map((tier, index) => (
            <PricingCard
              key={tier.title}
              {...tier}
              delay={400 + index * 100}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <div 
          className="text-center mt-10"
          style={{
            animation: isVisible ? "fadeInUp 0.6s ease-out 0.8s forwards" : "none",
            opacity: 0
          }}
        >
          <p className="text-sm text-gray-500">
            High-margin recurring revenue model aligned with customer success
          </p>
        </div>
      </div>
    </section>
  );
}
