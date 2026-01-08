import Image from "next/image";
import { contentData } from "@/data";

const getFeatureIcon = (icon: string) => {
  switch (icon) {
    case "lightning":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      );
    case "processor":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l-1.414 1.414m-12.728 12.728l-1.414 1.414"
        />
      );
    case "settings":
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      );
    default:
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      );
  }
};

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden -mt-8 md:mt-0"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {contentData.solution.title.main}{" "}
            <span className="text-primary-green">
              {contentData.solution.title.highlight}
            </span>{" "}
            {contentData.solution.title.suffix}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {contentData.solution.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            {/* Features List */}
            {contentData.solution.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-green p-3 rounded-full mt-1">
                  <svg
                    className="w-6 h-6 text-primary-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {getFeatureIcon(feature.icon)}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal">
            {/* AirGuard device image */}
            <div className="rounded-2xl shadow-2xl w-full h-96 overflow-hidden">
              <Image
                src={contentData.solution.deviceImage}
                alt="AirGuard device mounted on tower"
                className="w-full h-full object-cover"
                fill={false}
                width={800}
                height={320}
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
