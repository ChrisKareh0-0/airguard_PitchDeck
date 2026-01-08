import { contentData } from "@/data";

export default function MarketSection() {
  return (
    <section
      id="market"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-light text-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl">
            {contentData.market.title.main}{" "}
            <span
              className="text-primary-green accent-red"
              style={{ color: "#191919" }}
            >
              {contentData.market.title.highlight}
            </span>{" "}
            {contentData.market.title.suffix}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {contentData.market.description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contentData.market.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="market-card p-8 rounded-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">
                {metric.label}
              </p>
              <p className="text-6xl font-black text-primary-dark">
                {metric.value}
              </p>
              <p className="mt-2 text-lg font-bold text-gray-700">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
