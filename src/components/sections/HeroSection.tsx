import Image from "next/image";
import Logo from "@/app/favicon.ico";
import { contentData } from "@/data";
import { useNavigation } from "@/hooks";

export default function HeroSection() {
  const { scrollToSection } = useNavigation();

  const handleScrollToProblem = () => {
    scrollToSection("problem");
  };

  return (
    <section id="hero" className="min-h-svh flex items-center hero-bg-pattern">
      <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center hero-content">
        <Image
          src={Logo}
          alt="AirGuard Logo"
          className="h-16 w-16 md:h-24 md:w-24 mx-auto mb-6 md:mb-8"
          width={96}
          height={96}
          priority
          sizes="96px"
        />
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-primary-light uppercase tracking-tighter leading-none">
          {contentData.hero.title.main}
          <span className="text-primary-green">
            {" "}
            {contentData.hero.title.highlight}
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          {contentData.hero.description}
        </p>
        <div className="mt-6 md:mt-8 flex justify-center space-x-6 text-primary-light/70">
          <span>{contentData.hero.socialLinks.twitter}</span>
          <span>{contentData.hero.socialLinks.website}</span>
        </div>
        <div className="mt-8 md:mt-10">
          <button
            onClick={handleScrollToProblem}
            className="hero-cta cursor-pointer bg-primary-green text-primary-dark font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary-green/50"
          >
            {contentData.hero.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
