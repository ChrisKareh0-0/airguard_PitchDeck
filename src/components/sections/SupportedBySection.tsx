import Image from "next/image";
import { contentData } from "@/data";

export default function SupportedBySection() {
  return (
    <section
      id="supported-by"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-light text-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl">
            Proudly{" "}
            <span
              className="text-primary-green accent-red"
              style={{ color: "#191919" }}
            >
              Supported
            </span>{" "}
            By
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Leading organizations that believe in our vision for intelligent
            network management and are empowering our growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {contentData.supportedBy.logos.map((logo, index) => (
              <div
                key={logo.name}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-out reveal text-center border border-gray-50 hover:border-gray-200"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center h-20">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain transition-opacity duration-300 group-hover:opacity-80"
                    loading="lazy"
                    sizes="160px"
                    style={{
                      filter:
                        logo.name === "Clyntech" ? "brightness(0.3)" : "none",
                      width: logo.name === "ACIE" ? "120px" : "160px",
                      height: "160px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
