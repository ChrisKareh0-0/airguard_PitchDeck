import { newDeckContent } from "@/data/newDeckContent";

export default function EnhancedTractionSection() {
  return (
    <section
      id="traction"
      className="min-h-screen flex items-center py-4 md:py-10 bg-primary-dark overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading text-4xl md:text-6xl text-primary-light">
            {newDeckContent.traction.title.main}{" "}
            <span className="text-primary-green">
              {newDeckContent.traction.title.highlight}
            </span>{" "}
            {newDeckContent.traction.title.suffix}
          </h2>
        </div>

        {/* Milestones Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {newDeckContent.traction.milestones.map((milestone, index) => (
            <div
              key={milestone.metric}
              className="glassmorphism-card p-6 rounded-2xl text-center reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl font-black text-primary-green mb-2">
                {milestone.metric}
              </p>
              <p className="text-primary-light/80">{milestone.description}</p>
            </div>
          ))}
        </div>

        {/* Pilot Results */}
        <div className="mb-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-green mb-8 text-center">
            {newDeckContent.traction.pilotResults.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newDeckContent.traction.pilotResults.metrics.map(
              (metric, index) => (
                <div
                  key={metric.description}
                  className="glassmorphism-card p-6 rounded-2xl text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p className="text-5xl font-black text-primary-green mb-2">
                    {metric.metric}
                  </p>
                  <p className="text-primary-light/80">{metric.description}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto reveal">
          <blockquote className="text-xl md:text-2xl italic text-primary-dark relative">
            <span className="absolute -top-4 -left-6 text-6xl text-primary-dark/30 font-serif">
              &ldquo;
            </span>
            {newDeckContent.traction.testimonial.quote}
            <span className="absolute -bottom-4 -right-6 text-6xl text-primary-dark/30 font-serif">
              &rdquo;
            </span>
          </blockquote>
          <p className="mt-4 text-right font-bold text-primary-dark">
            – {newDeckContent.traction.testimonial.author},{" "}
            {newDeckContent.traction.testimonial.company}
          </p>
        </div>
      </div>
    </section>
  );
}
