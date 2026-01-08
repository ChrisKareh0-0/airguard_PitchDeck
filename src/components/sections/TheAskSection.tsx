"use client";

import { useEffect, useRef, useState } from "react";

const useOfFundsData = [
  { percentage: "40%", category: "R&D & Next-Gen Hardware", amount: "$180K" },
  { percentage: "25%", category: "Manufacturing & Pilot Production", amount: "$112.5K" },
  { percentage: "15%", category: "IP, Patents & Legal", amount: "$67.5K" },
  { percentage: "10%", category: "Pilot Deployments & Field Ops", amount: "$45K" },
  { percentage: "10%", category: "Sales & Marketing", amount: "$45K" },
];

const strategicPartners = [
  "Manufacturing & Supply Chain",
  "Legal & Regulatory Compliance",
  "IP Strategy & Patenting",
];

export default function TheAskSection() {
  const [isVisible, setIsVisible] = useState(false);
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
      className="min-h-screen w-full flex items-center justify-center py-12 px-8"
      style={{ backgroundColor: "#e6ff3f" }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          {/* Left: Main Heading and Description */}
          <div className="lg:w-1/2 flex flex-col justify-center items-start">
            <div
              style={{
                animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
                opacity: isVisible ? 1 : 0,
              }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-black tracking-tight">
                Join Us in Redefining Network Management
              </h2>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl font-bold text-black mb-4">
                  We are seeking
                  <span
                    className="bg-black text-[#e6ff3f] font-black px-3 py-1 rounded-lg border-2 border-black mx-2 inline-flex items-center"
                    style={{
                      animation: isVisible ? "scaleIn 0.5s ease-out 0.3s forwards" : "none",
                      opacity: 0,
                    }}
                  >
                    $450K
                  </span>
                  for 10% equity to accelerate our growth and capture the
                  rapidly growing MENA market.
                </p>
                <p
                  className="text-lg text-black/80 mt-4"
                  style={{
                    animation: isVisible ? "fadeInUp 0.6s ease-out 0.4s forwards" : "none",
                    opacity: 0,
                  }}
                >
                  This seed round ask is aligned with the regional average for
                  deep-tech startups and will fund our growth plan.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Use of Funds and Key Focus Areas */}
          <div className="lg:w-1/2 flex flex-col gap-4 w-full">
            {/* Use of Funds Box */}
            <div
              className="bg-black rounded-2xl shadow-2xl p-6 w-full"
              style={{
                animation: isVisible ? "fadeInUp 0.6s ease-out 0.2s forwards" : "none",
                opacity: 0,
              }}
            >
              <h3 className="text-xl font-bold text-center mb-5 text-[#e6ff3f]">
                Use of Funds
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {useOfFundsData.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center"
                    style={{
                      animation: isVisible
                        ? `countUp 0.4s ease-out ${0.4 + idx * 0.1}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    <span className="text-2xl md:text-3xl font-black text-[#e6ff3f]">
                      {item.percentage}
                    </span>
                    <span className="text-xs font-bold text-white mt-1 mb-1 leading-tight">
                      {item.category}
                    </span>
                    <span className="text-base font-bold text-[#e6ff3f]">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Partners Needed Box */}
            <div
              className="bg-black rounded-2xl shadow-2xl p-6 w-full"
              style={{
                animation: isVisible ? "fadeInUp 0.6s ease-out 0.5s forwards" : "none",
                opacity: 0,
              }}
            >
              <h4 className="text-xl font-bold text-center mb-4 text-[#e6ff3f]">
                Strategic Partners Needed
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[#e6ff3f] text-sm md:text-base text-center">
                {strategicPartners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="py-2 px-3 border border-[#e6ff3f]/30 rounded-lg hover:bg-[#e6ff3f]/10 transition-colors"
                    style={{
                      animation: isVisible
                        ? `fadeInUp 0.4s ease-out ${0.6 + idx * 0.1}s forwards`
                        : "none",
                      opacity: 0,
                    }}
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
