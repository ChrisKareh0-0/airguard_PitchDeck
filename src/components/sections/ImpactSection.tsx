import { contentData } from "@/data";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="min-h-screen flex flex-col justify-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16 flex-grow flex flex-col justify-center">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {contentData.impact.title.main}{" "}
            <span className="text-primary-green">
              {contentData.impact.title.highlight}
            </span>
            .
          </h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-primary-light/80">
            {contentData.impact.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contentData.impact.metrics.map((metric, index) => (
            <div
              key={index}
              className="glassmorphism-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-6xl font-black text-primary-green">
                {metric.value}
              </p>
              <p className="mt-2 text-xl font-bold text-primary-light">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
