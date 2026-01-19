import Image from "next/image";
import Logo from "@/app/favicon.ico";
import EditableText from "@/components/ui/EditableText";
import { newDeckContent } from "@/data/newDeckContent";
import { useNavigation } from "@/hooks";

export default function EnhancedHeroSection({ isStatic = false, isEditMode = false }: { isStatic?: boolean, isEditMode?: boolean }) {
  const { scrollToSection } = useNavigation();

  const handleScrollToProblem = () => {
    scrollToSection("problem");
  };

  return (
    <section id="hero" className="min-h-svh flex items-center hero-bg-pattern">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 hero-content">
        {/* Main Title Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
          {/* Logo */}
          <Image
            src={Logo}
            alt="AirGuard Logo"
            className="h-20 w-20 md:h-32 md:w-32"
            width={128}
            height={128}
            priority
            sizes="128px"
          />

          {/* AIRGUARD Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-primary-light uppercase tracking-tighter flex items-center gap-2">
            <EditableText
              initialText="AIRGUARD"
              isEditMode={isEditMode}
              className="outline-none"
            />
          </h1>
        </div>

        {/* Animated Terminal Text */}
        <div className="flex justify-center mb-8 w-full">
          <div className="terminal-text text-xl md:text-3xl lg:text-4xl font-bold text-primary-green flex justify-center w-full text-center" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            {isEditMode ? (
              <EditableText
                initialText="The New Internet"
                isEditMode={true}
                className="mx-auto text-center bg-transparent border-b border-primary-green outline-none"
              />
            ) : isStatic ? (
              <span>The New Internet_</span>
            ) : (
              <>
                <span className="typewriter">The New Internet</span>
                <span className="cursor-blink">_</span>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex justify-center space-x-6 text-primary-light/70">
          <span>{newDeckContent.hero.socialLinks.twitter}</span>
          <span>{newDeckContent.hero.socialLinks.website}</span>
        </div>
        <div className="mt-8 md:mt-10 text-center">
          <button
            onClick={handleScrollToProblem}
            className="hero-cta cursor-pointer bg-primary-green text-primary-dark font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-green/50"
          >
            {newDeckContent.hero.ctaText}
          </button>
        </div>
      </div>

      <style jsx>{`
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          animation: typing 2s steps(16, end) 0.5s both;
        }

        .cursor-blink {
          display: inline-block;
          animation: blink 1s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .terminal-text {
          display: inline-flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
