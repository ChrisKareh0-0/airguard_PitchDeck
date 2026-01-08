import { contentData } from "@/data";

export default function BusinessSection() {
  return (
    <section
      id="business"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-light text-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl">
            {contentData.business.title.main}{" "}
            <span
              className="text-primary-green accent-red"
              style={{ color: "#191919" }}
            >
              {contentData.business.title.highlight}
            </span>{" "}
            {contentData.business.title.suffix}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {contentData.business.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contentData.business.pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`glassmorphism-card-light p-8 rounded-2xl reveal ${
                tier.featured ? "border-4 border-primary-green scale-105" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary-dark">
                {tier.name}
              </h3>
              <p className="text-4xl font-black my-2 text-primary-dark">
                {tier.price}
                {tier.period && (
                  <span className="text-lg font-normal">{tier.period}</span>
                )}
              </p>
              <p className="text-primary-dark/70">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
