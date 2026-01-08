import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { contentData } from "@/data";
import { useNavigation } from "@/hooks";

interface NavigationProps {
  onNavClick: () => void;
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useNavigation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleSectionClick = (sectionId: string) => {
    setMenuOpen(false);
    onNavClick();
    scrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${
          menuOpen
            ? "bg-black backdrop-blur-0 shadow-none border-b border-white/10"
            : scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl border-b border-white/10"
            : "bg-transparent backdrop-blur-0 shadow-none border-b border-transparent"
        }
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick("hero")}
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <Image
                src={Logo}
                alt="AirGuard Logo"
                className="h-8 w-8 sm:h-10 sm:w-10"
                width={40}
                height={40}
                priority
                sizes="40px"
              />
              <div className="absolute inset-0 bg-[#d8ff43]/20 rounded-full blur-sm group-hover:bg-[#d8ff43]/30 transition-all duration-300"></div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#d8ff43] transition-colors duration-300">
              AirGuard
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {contentData.navigation.links.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => handleSectionClick(link.sectionId)}
                className="relative px-4 py-2 text-white/90 hover:text-[#d8ff43] transition-all duration-300 text-sm font-medium group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d8ff43] group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-white/20">
              <button
                onClick={() =>
                  handleSectionClick(contentData.navigation.ctaLink.sectionId)
                }
                className="relative px-6 py-2.5 bg-[#d8ff43] text-black font-bold rounded-lg hover:bg-white transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10">
                  {contentData.navigation.ctaLink.label}
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`absolute top-2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-4 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden absolute top-full left-0 right-0 bg-black backdrop-blur-xl border-t border-white/10 transition-all duration-500 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          {/* Overlay inside menu, not covering navbar */}
          {menuOpen && (
            <div
              className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-sm z-0"
              aria-hidden="true"
            />
          )}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 xl:px-8 py-6">
            <div className="space-y-2">
              {contentData.navigation.links.map((link, index) => (
                <button
                  key={link.sectionId}
                  onClick={() => handleSectionClick(link.sectionId)}
                  className={`w-full text-left px-4 py-3 text-white/90 hover:text-[#d8ff43] hover:bg-white/5 rounded-lg transition-all duration-300 text-lg font-medium transform ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#d8ff43] rounded-full opacity-60"></div>
                    <span>{link.label}</span>
                  </div>
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    handleSectionClick(contentData.navigation.ctaLink.sectionId)
                  }
                  className={`w-full bg-[#d8ff43] text-black font-bold py-3 px-4 rounded-lg hover:bg-white transition-all duration-300 text-lg text-center transform ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: menuOpen
                      ? `${contentData.navigation.links.length * 100}ms`
                      : "0ms",
                  }}
                >
                  {contentData.navigation.ctaLink.label}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
