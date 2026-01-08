import { contentData } from "@/data";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal">
            <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
              {contentData.vision.title.main}{" "}
              <span className="text-primary-green">
                {contentData.vision.title.highlight}
              </span>
              .
            </h2>
            <p className="mt-6 text-xl text-primary-light/80 max-w-4xl mx-auto">
              {contentData.vision.description}
            </p>
          </div>

          {/* Timeline */}
          <div className="reveal">
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 border-l-4 border-primary-green/30">
                {contentData.vision.timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`timeline-item relative ${
                      index < contentData.vision.timeline.length - 1
                        ? "mb-16"
                        : ""
                    }`}
                  >
                    <div className="absolute -left-12 top-6 w-7 h-7 bg-primary-green rounded-full border-4 border-primary-dark shadow-lg transform -translate-y-1/2"></div>
                    <h3 className="text-2xl font-bold text-primary-green mb-3">
                      {item.year}
                    </h3>
                    <p className="text-primary-light/80 leading-relaxed text-lg">
                      {item.description}
                    </p>
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
