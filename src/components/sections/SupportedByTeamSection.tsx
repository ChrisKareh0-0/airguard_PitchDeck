"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const logos = [
  {
    name: "Lebanese American University - Spark",
    src: "/lau.png",
    alt: "LAU Logo",
  },
  {
    name: "Clyntech",
    src: "/clyntech.svg",
    alt: "Clyntech Logo",
  },
  {
    name: "ACIE",
    src: "/acie.svg",
    alt: "ACIE Logo",
  },
];

const teamMembers = [
  {
    name: "Ryan Kyrillos",
    role: "Founder & CEO",
    description:
      "Visionary leader with deep expertise in scaling technology companies and building strategic partnerships.",
  },
  {
    name: "Chris Kareh",
    role: "Co-Founder & CTO",
    description:
      "Technical expert in embedded systems and AI with extensive experience in edge computing and network infrastructure.",
  },
  {
    name: "Elias Cheikh",
    role: "Network & Security Specialist",
    description:
      "Cybersecurity expert specializing in network infrastructure security and threat mitigation strategies.",
  },
  {
    name: "Ramona Baysari",
    role: "Product Designer",
    description:
      "Creative designer focused on user experience and interface design for complex technical products.",
  },
  {
    name: "Anthony Saliba",
    role: "Senior FrontEnd Developer",
    description:
      "Experienced developer specializing in modern web technologies and creating intuitive user interfaces.",
  },
  {
    name: "Anthony Murr",
    role: "Networking Specialist",
    description:
      "Expert in network architecture and optimization with deep knowledge of wireless communication systems.",
  },
];

export default function SupportedByTeamSection() {
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
      className="min-h-screen w-full flex items-center justify-center bg-white py-12 px-8"
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

      <div className="max-w-6xl w-full">
        {/* Supported By Section */}
        <div className="text-center mb-10">
          <h2 
            className="text-3xl md:text-4xl font-black text-[#191919] tracking-tight"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
              opacity: isVisible ? 1 : 0
            }}
          >
            Proudly <span className="text-[#d8ff43]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" }}>Supported</span> By
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 gap-6 items-center mb-14 max-w-3xl mx-auto">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="group bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out text-center border border-gray-100 hover:border-gray-200"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${0.1 + index * 0.1}s forwards` : "none",
                opacity: 0
              }}
            >
              <div className="flex items-center justify-center h-16">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={70}
                  className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    filter: logo.name === "Clyntech" ? "brightness(0.3)" : "none",
                    width: logo.name === "ACIE" ? "100px" : "140px",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h2 
            className="text-3xl md:text-4xl font-black text-[#191919] tracking-tight"
            style={{
              animation: isVisible ? "fadeInUp 0.6s ease-out 0.4s forwards" : "none",
              opacity: 0
            }}
          >
            & Our <span className="text-[#d8ff43]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)" }}>Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-[#191919] p-5 rounded-2xl text-center border border-gray-800 hover:border-[#d8ff43]/30 transition-all duration-300"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${0.5 + index * 0.1}s forwards` : "none",
                opacity: 0
              }}
            >
              <h3 className="text-base font-bold text-white">
                {member.name}
              </h3>
              <p className="text-[#d8ff43] font-semibold text-sm">
                {member.role}
              </p>
              <p className="mt-2 text-white/70 text-xs leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
