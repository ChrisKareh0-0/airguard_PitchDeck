import Image from "next/image";
import OptimizedVideo from "@/components/OptimizedVideo";
import { contentData } from "@/data";

export default function ProductSection() {
  return (
    <section
      id="product"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-light">
            {contentData.product.title}
          </h2>
          <p className="mt-4 text-lg text-primary-light/80 max-w-2xl mx-auto">
            {contentData.product.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hardware Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-primary-green mb-4">
                {contentData.product.hardware.title}
              </h3>
              <p className="text-base text-primary-light/80 mb-6">
                {contentData.product.hardware.description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {contentData.product.hardware.features
                  .slice(0, 4)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                      <span className="text-sm text-primary-light/90">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="reveal order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video max-h-80">
                <OptimizedVideo
                  src={contentData.product.hardware.video}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Software Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="relative rounded-xl overflow-hidden shadow-xl aspect-video max-h-80 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <a
                  href="https://www.airguard.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full relative"
                >
                  <Image
                    src={contentData.product.software.image}
                    alt="AirGuard Dashboard Interface"
                    className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-90"
                    width={800}
                    height={450}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-green text-primary-dark px-4 py-2 rounded-lg font-bold flex items-center space-x-2">
                      <span>Open Dashboard</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="reveal">
              <h3 className="text-2xl font-bold text-primary-green mb-4">
                {contentData.product.software.title}
              </h3>
              <p className="text-base text-primary-light/80 mb-6">
                {contentData.product.software.description}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {contentData.product.software.features
                  .slice(0, 4)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                      <span className="text-sm text-primary-light/90">
                        {feature}
                      </span>
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